/* eslint-disable no-undef */
import 'leaflet'
import 'leaflet.control.layers.tree'
import 'leaflet.markercluster'
import 'leaflet-easybutton'
import './node_modules/leaflet.markercluster/dist/MarkerCluster.css'
import './node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css'

import gemeenten from './data/gemeenten_simplified.json'
import gemeentenPoint from './data/gemeenten_points.json'
import gemeentenBorders from './data/gemeenten_borders.json'
import gemeentenBordersOutside from './data/gemeenten_borders_outside.json'
import './index.css'
import { legend } from './legend'
import * as d3 from 'd3'
import * as ss from './ss.js'
import * as csv from 'csvtojson'

const markerColors = ['#f1eef6', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#034e7b']
const circleColors = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d']

var circleBreaks
var choroBreaks
const aantalArray = []
const aant100kArray = []
var aantalSum = 0
var aantalMin = Number.POSITIVE_INFINITY
var aantalMax = Number.NEGATIVE_INFINITY

// for normalizing size circles
var A
const max = 125
const min = 10

// eslint-disable-next-line no-extend-native
String.prototype.paddingLeft = function (paddingValue) {
  return String(paddingValue + this).slice(-paddingValue.length)
}

function getCSV () {
  return fetch('corona.csv')
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      return csv.csv({
        output: 'json',
        delimiter: ';'
      }).fromString(data)
        .then(function (result) {
          result.forEach(function (item) {
            if (parseInt(item.Gemnr) !== -1) {
              aant100kArray.push(parseFloat(item['Meldingen per 100k']))
              aantalArray.push(parseInt(item.Meldingen))
              item.Gemnr = item.Gemnr.paddingLeft('0000')
            }
          })
          return result
        })
    })
}

function getData () {
  return fetch('updated.json')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      return data
    })
}

Promise.all([getCSV(), getData()]).then(function (values) {
  const data = values[0]
  const updated = values[1]
  data.forEach(function (itemData) {
    if (parseInt(itemData.Gemnr) !== -1) {
      const tmp = parseInt(itemData.Meldingen)
      if (tmp < aantalMin) aantalMin = tmp
      if (tmp > aantalMax) aantalMax = tmp
      aantalSum += tmp
    } else {
      aantalSum += sumString(itemData.Gemeente)
    }
    gemeentenPoint.features.forEach(function (item) {
      if (itemData.Gemnr === item.properties.Code) {
        item.properties.aantal = parseInt(itemData.Meldingen)
        item.properties.bev_aantal = parseInt(itemData.BevAant)
        item.properties.aantal_100k = parseFloat(itemData['Meldingen per 100k'])
      }
    })
    gemeenten.features.forEach(function (item) {
      if (itemData.Gemnr === item.properties.Code) {
        item.properties.aantal = parseInt(itemData.Meldingen)
        item.properties.bev_aantal = parseInt(itemData.BevAant)
        item.properties.bev_aantal = parseInt(itemData.BevAant)
        item.properties.aantal_100k = parseFloat(itemData['Meldingen per 100k'])
      }
    })
  })
  for (var i = gemeentenPoint.features.length - 1; i >= 0; i--) {
    if (gemeentenPoint.features[i].properties.aantal === 0) {
      gemeentenPoint.features.splice(i, 1)
    }
  }

  A = (max - min) / (aantalMax - aantalMin)
  const markerBreaks = getBreaks(aantalSum)

  var map = L.map('mapid', {
    attributionControl: false,
    crs: L.CRS.EPSG3857,
    maxZoom: 18,
    minZoom: 5,
    maxBounds: [[43.634028, -4.262695],
      [58.378797, 13.886719]]
  }).setView([52, 5.3], 7)

  circleBreaks = ss.jenks(aantalArray, 5)
  choroBreaks = ss.jenks(aant100kArray, 5)
  const comment = data[0].Gemeente
  L.Control.Command = L.Control.extend({
    options: {
      position: 'bottomright'
    },
    onAdd: function (map) {
      var controlDiv = L.DomUtil.create('div', 'leaflet-control-command')
      var controlUI = L.DomUtil.create('div', 'leaflet-control-command-interior', controlDiv)
      controlUI.innerHTML = '<button style="display:inline;float:right;" id="btnAtt"><i class="fa fa-info"></i></button><div id="legendBody"><h1 class="full" style="margin-bottom:5px;">Corona Virus in Nederland</h1>' +
        '<div id="legend"></div><div id="radioDiv">' +
        '<div class="pretty p-default p-round"><input id="cluster" type="radio" name="viz" value="cluster" checked><div class="state p-primary-o"><label>Aantal</label></div></div>' +
        '<div class="pretty p-default p-round"><input  id="circles" type="radio" name="viz" value="circles"><div class="state p-primary-o"><label>Gemiddelde</label></div></div></div>' +
        `<p class="full"><b>totaal aantal positieve tests: </b>${aantalSum}&nbsp;&nbsp;&nbsp;&nbsp;<b>peildatum: </b> ${updated.date_data}</p>` +
        '</div>' + `<span class="mobile" style="font-size: 9px;position:absolute; right:5px;bottom:5px;"><b>peildatum: </b>${updated.date_data}</span>`
      return controlDiv
    }
  })

  L.control.command = function (options) {
    return new L.Control.Command(options)
  }
  L.control.attribution({ prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="https://github.com/arbakker/corona-map-nl" title="Broncode kaart Corona Virus in Nederland">Broncode Kaart</a>' }).addTo(map)

  L.control.command({}).addTo(map)
  const markers = L.markerClusterGroup({
    iconCreateFunction: function (cluster) {
      let count = 0
      const childs = cluster.getAllChildMarkers()
      for (let i = 0; i < childs.length; i++) {
        const child = childs[i]
        count += child.feature.properties.aantal
      }
      if (count === 0) {
        return
      }
      const color = getColor(count, markerBreaks, markerColors)
      const classIndex = markerColors.indexOf(color) + 1
      return L.divIcon({
        html: '<div><span>' + count + '</span></div>',
        className: `marker-cluster marker-cluster-${classIndex}`,
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      })
    },
    polygonOptions: {
      fillColor: '#e7e1ef',
      weight: 1,
      opacity: 1,
      color: '#dd1c77',
      fillOpacity: 0.5
    },
    singleMarkerMode: true,
    attribution: 'Bron: <a href="https://www.volksgezondheidenzorg.info/onderwerp/infectieziekten/regionaal-internationaal/coronavirus-covid-19">RIVM</a>'
  })

  const backgroundLayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartwater/EPSG:3857/{z}/{x}/{y}.png',
    {
      wmts: true,
      attribution: 'Achtergrondkaart: BRTA © <a href="http://www.kadaster.nl">Kadaster</a> (<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>)</span>'
    }
  )

  const gemBordersLayer = L.geoJSON(gemeentenBorders, {
    style: function (feature) {
      return {
        fillColor: null,
        weight: 2,
        opacity: 1,
        color: '#878787',
        dashArray: '4',
        fillOpacity: 0
      }
    }
  })

  const gemBordersLayerOutside = L.geoJSON(gemeentenBordersOutside, {
    style: {
      fillColor: null,
      weight: 2,
      opacity: 1,
      color: '#878787',
      dashArray: '4',
      fillOpacity: 0
    }
  })

  const gemLayer = L.geoJSON(gemeenten, {
  // onEachFeature: onEachFeature,
    style: getStyle()
  }).bindPopup(function (layer) {
    return getPopupHTML(layer.feature.properties)
  })

  const gemLayerChoro = L.geoJSON(gemeenten, {
    // onEachFeature: onEachFeature,
    style: function (feature) {
      return {
        fillColor: getColor(feature.properties.aantal_100k, choroBreaks, circleColors),
        weight: 2,
        opacity: 0,
        color: 'white',
        fillOpacity: (feature.properties.aantal_100k === 0) ? 0.3 : 1
      }
    },
    attribution: 'Bron: <a href="https://www.volksgezondheidenzorg.info/onderwerp/infectieziekten/regionaal-internationaal/coronavirus-covid-19">RIVM</a>'
  }).bindPopup(function (layer) {
    return getPopupHTML(layer.feature.properties)
  })

  const geojsonMarkers = L.geoJSON(gemeentenPoint)

  // create the GeoJSON layer and call the styling function with each marker

  // add layers
  markers.addLayers(geojsonMarkers)
  map.addLayer(markers)
  markers.refreshClusters(geojsonMarkers)
  backgroundLayer.addTo(map)
  gemBordersLayerOutside.addTo(map)
  gemLayer.addTo(map)

  // events
  markers.on('click', function (a) {
    L.popup()
      .setLatLng([a.layer._latlng.lat, a.layer._latlng.lng])
      .setContent(getPopupHTML(a.layer.feature.properties))
      .openOn(map)
  })
  var circles = L.geoJSON(gemeentenPoint, {
    pointToLayer: function (feature, latlng) {
      if (feature.properties.aantal > 0) {
        return L.marker(latlng, { icon: getCircleIcon(feature) })
      }
    }
  }).bindPopup(function (layer) {
    return getPopupHTML(layer.feature.properties.aantal)
  })
  const radiosViz = document.getElementsByName('viz')
  for (let i = 0, max = radiosViz.length; i < max; i++) {
    radiosViz[i].onclick = function () {
      let legend
      if (this.value === 'cluster') {
        // map.removeLayer(circles)
        map.removeLayer(gemLayerChoro)
        map.addLayer(markers)
        const markerBreaksCp = [...markerBreaks]
        markerBreaksCp.shift()
        legend = getLegend(markerBreaksCp, markerColors)
        setBorders()
      } else {
        map.removeLayer(markers)
        // map.addLayer(circles)
        map.addLayer(gemLayerChoro)
        setBorders()
        const circleBreaksCp = [...choroBreaks]
        circleBreaksCp.shift()
        legend = getLegend(circleBreaksCp, circleColors, 'Aantal positieve tests Covid-19 per 100.000 inwoners')
      }
      const legendDiv = document.getElementById('legend')
      legendDiv.innerHTML = ''
      legendDiv.append(legend)
    }
  }

  const markerBreaksCp = [...markerBreaks]
  markerBreaksCp.shift()
  const legendDiv = document.getElementById('legend')
  legendDiv.append(getLegend(markerBreaksCp, markerColors))
  map.fitBounds(gemBordersLayerOutside.getBounds())

  // .leaflet-control-command-interior
  const btnAtt = document.getElementById('btnAtt')
  btnAtt.onclick = function () {
    const attr = document.getElementsByClassName('leaflet-control-attribution')[0]
    if ([...attr.classList].indexOf('show') === -1) {
      attr.classList.add('show')
    } else {
      attr.classList.remove('show')
    }
  }
  function setBorders () {
    var z = map.getZoom()
    if (map.hasLayer(gemLayerChoro)) {
      gemBordersLayer.removeFrom(map)
      return gemBordersLayer.addTo(map)
    }
    if (z >= 9 && z < 18) {
      return gemBordersLayer.addTo(map)
    }
    return gemBordersLayer.removeFrom(map)
  }

  map.on('zoom', setBorders)

  Array.prototype.forEach.call(document.getElementsByClassName('leaflet-layer'), function (el) {
    el.classList.add('dark')
  })
  document.body.classList.add('dark')
  Array.prototype.forEach.call(document.getElementsByClassName('leaflet-container'), function (el) {
    el.classList.add('dark')
  })
})

function sumString (text, regex) {
  return (text.match(regex || /\d*(?:\.\d*)?/g) || [])
    .reduce(function (prev, curr) {
      return prev + +curr
    }, 0)
}

function getColor (value, breaks, colors) {
  let color
  for (let i = 1; i < breaks.length; i++) {
    if (i === 1) {
      if (value > breaks[0] && value <= breaks[1]) {
        color = colors[0]
        break
      }
    } else if (i === breaks.length - 1 && value > breaks[breaks.length - 1]) {
      color = colors[breaks.length - 1]
    } else {
      if (value <= breaks[i]) {
        color = colors[i - 1]
        break
      }
    }
  }
  return color
}

function getStyle (code = '') {
  return {
    fillColor: null,
    color: null,
    fillOpacity: 0
  }
}

function getBreaks (total) {
  const breaks = []
  let brk = parseInt(total / 2)
  for (let i = 0; i < 6; i++) {
    breaks.unshift(brk)
    brk = parseInt(brk / 2)
  }
  breaks.unshift(0)
  return breaks
}

function getCircleIcon (feature) {
  const aantal = parseInt(feature.properties.aantal)
  if (aantal > 0) {
    var calculatedSize = A * (aantal - aantalMin) + min
    var CustomIcon = L.Icon.extend({
      options: {
        iconAnchor: [calculatedSize / 3, calculatedSize / 2]
      }
    })
    const color = getColor(aantal, circleBreaks, circleColors)
    const strokeColor = 'black'
    const achenSvgString = `<svg xmlns='http://www.w3.org/2000/svg' width='${calculatedSize}' height='${calculatedSize}'><circle cx='${calculatedSize / 2}' cy='${calculatedSize / 2}' r='${(calculatedSize / 2) - calculatedSize * 0.1}' fill='${color}' opacity='0.8' stroke='${strokeColor}'  stroke-width="1"/></svg>`
    const myIconUrl = encodeURI('data:image/svg+xml,' + achenSvgString).replace('#', '%23')
    var rectIcon = new CustomIcon({ iconUrl: myIconUrl })
    return rectIcon
  }
}

function getPopupHTML (properties) {
  let rows = `<tr><td><b>Gemeente </b></td><td>${properties.Gemeentenaam}</td></tr>`
  rows += `<tr><td><b>Aantal</b></td><td>${properties.aantal}</td></tr>`
  rows += `<tr><td><b>Aantal per 100.000 inw</b></td><td>${properties.aantal_100k}</td></tr>`
  return `<table>${rows}</table>`
}

function getLegend (breaks, colors, title = 'Aantal positieve tests Covid-19') {
  return legend({
    color: d3.scaleThreshold(breaks, colors),
    title: title,
    tickSize: 0
  })
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)
window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})
