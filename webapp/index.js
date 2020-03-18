
import 'leaflet/dist/leaflet.js'
import * as csv from 'csvtojson'
import 'leaflet.control.layers.tree'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import 'leaflet-easybutton/src/easy-button'
import './node_modules/leaflet.markercluster/dist/MarkerCluster.css'
import './node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css'

import gemeenten from './data/gemeenten_simplified_joined.json'
import gemeentenPoint from './data/gemeenten_points.json'
import gemeentenBorders from './data-fixed/gemeenten_borders.json'
import gemeentenBordersOutside from './data-fixed/gemeenten_borders_outside.json'

import updated from './updated.json'

import './index.css'
import { legend } from './legend'
import * as d3 from 'd3'
import * as ss from './ss.js'

const MARKERCOLORS = ['#f1eef6', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#034e7b']
const CIRCLECOLORS = ['#f1eef6', '#bdc9e1', '#74a9cf', '#2b8cbe', '#045a8d']

// normalized size circles
const MAXSIZE = 125
const MINSIZE = 10

var CIRCLES
var MARKERS
const AANTALLEN = []

var MIN_AANTAL = Number.POSITIVE_INFINITY
var MAX_AANTAL = Number.NEGATIVE_INFINITY
var SUM_AANTAL = 0
var MARKERBREAKS

// eslint-disable-next-line no-extend-native
String.prototype.paddingLeft = function (paddingValue) {
  return String(paddingValue + this).slice(-paddingValue.length)
}

/* global L */
var MAP = L.map('mapid', {
  attributionControl: false,
  crs: L.CRS.EPSG3857,
  maxZoom: 18,
  minZoom: 5,
  maxBounds: [[43.634028, -4.262695],
    [58.378797, 13.886719]]
}).setView([52, 5.3], 7)
L.control.attribution({ prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="https://github.com/arbakker/corona-map-nl" title="Broncode kaart Corona Virus in Nederland">Broncode Kaart</a>' }).addTo(MAP)
const backgroundLayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartwater/EPSG:3857/{z}/{x}/{y}.png',
  {
    wmts: true,
    attribution: 'Achtergrondkaart: BRTA © <a href="http://www.kadaster.nl">Kadaster</a> (<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>)</span>'
  }
)

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
            AANTALLEN.push(parseInt(item.Aantal))
            if (parseInt(item.Gemnr) !== -1) {
              item.Gemnr = item.Gemnr.paddingLeft('0000')
            }
          })
          return result
        })
    })
}

getCSV().then((data) => {
  data.forEach(function (itemData) {
    if (parseInt(itemData.Gemnr) !== -1) {
      const tmp = parseInt(itemData.Aantal)
      if (tmp < MIN_AANTAL) MIN_AANTAL = tmp
      if (tmp > MAX_AANTAL) MAX_AANTAL = tmp
      SUM_AANTAL += tmp
    } else {
      SUM_AANTAL += sumString(itemData.Gemeente)
    }

    gemeentenPoint.features.forEach(function (item) {
      if (itemData.Gemnr === item.properties.code) {
        item.properties.aantal = itemData.Aantal
        item.properties.bev_aantal = itemData.BevAant
        item.properties.aantal_100k = itemData.Aant100k
      }
    })
  })
  const circleBreaks = ss.jenks(AANTALLEN, 5)

  MARKERBREAKS = getBreaks(SUM_AANTAL)
  MARKERS = L.markerClusterGroup({
    iconCreateFunction: function (cluster) {
      let count = 0
      const childs = cluster.getAllChildMarkers()
      for (let i = 0; i < childs.length; i++) {
        const child = childs[i]
        count += parseInt(child.feature.properties.aantal)
      }
      if (count === 0) {
        return
      }
      const color = getColor(count, MARKERBREAKS, MARKERCOLORS)
      const classIndex = MARKERCOLORS.indexOf(color) + 1

      cluster.getAllChildMarkers().forEach(function (el) { })
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
  CIRCLES = L.geoJSON(gemeentenPoint, {
    pointToLayer: function (feature, latlng) {
      if (feature.properties.aantal > 0) {
        return L.marker(latlng, { icon: getCircleIcon(feature, circleBreaks) })
      }
    }
  }).bindPopup(function (layer) {
    return '<p>Gemeente ' + layer.feature.properties.gemeentenaam + ': ' + layer.feature.properties.aantal + '<p>'
  })

  MARKERS.addLayers(geojsonMarkers)
  MAP.addLayer(MARKERS)
  MARKERS.refreshClusters(geojsonMarkers)
  backgroundLayer.addTo(MAP)
  gemBordersLayerOutside.addTo(MAP)
  gemLayer.addTo(MAP)

  // events
  MARKERS.on('click', function (a) {
    L.popup()
      .setLatLng([a.layer._latlng.lat, a.layer._latlng.lng])
      .setContent(getPopupHTML(a.layer.feature.properties.gemeentenaam, a.layer.feature.properties.aantal))
      .openOn(MAP)
  })
  Array.prototype.forEach.call(document.getElementsByClassName('leaflet-layer'), function (el) {
    el.classList.add('dark')
  })
  document.body.classList.add('dark')
  Array.prototype.forEach.call(document.getElementsByClassName('leaflet-container'), function (el) {
    el.classList.add('dark')
  })

  // register event listeners
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
        '<div class="pretty p-default p-round"><input id="cluster" type="radio" name="viz" value="cluster" checked><div class="state p-primary-o"><label>Cluster</label></div></div>' +
        '<div class="pretty p-default p-round"><input  id="circles" type="radio" name="viz" value="circles"><div class="state p-primary-o"><label>Cirkel</label></div></div></div>' +
        `<p class="full"><b>totaal aantal positieve tests: </b>${SUM_AANTAL}&nbsp;&nbsp;<span title="${comment}"><i class="fa fa-asterisk"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;<b>peildatum: </b> ${updated.date_data}&nbsp;&nbsp;<span title="data wordt dagelijks ververst"><i class="fa fa-asterisk"></i></span></p>` +
        '</div>' + `<span class="mobile" style="font-size: 9px;position:absolute; right:5px;bottom:5px;"><b>peildatum: </b>${updated.date_data}&nbsp;&nbsp;<span title="data wordt dagelijks ververst"><i class="fa fa-asterisk"></i></span></span>`
      return controlDiv
    }
  })
  L.control.command = function (options) {
    return new L.Control.Command(options)
  }
  L.control.command({}).addTo(MAP)
  const radiosViz = document.getElementsByName('viz')
  for (let i = 0, max = radiosViz.length; i < max; i++) {
    radiosViz[i].onclick = function () {
      let legend
      if (this.value === 'cluster') {
        MAP.removeLayer(CIRCLES)
        MAP.addLayer(MARKERS)
        const markerBreaksCp = [...MARKERBREAKS]
        markerBreaksCp.shift()
        legend = getLegend(markerBreaksCp, MARKERCOLORS)
      } else {
        MAP.removeLayer(MARKERS)
        MAP.addLayer(CIRCLES)
        const circleBreaksCp = [...circleBreaks]
        circleBreaksCp.shift()
        legend = getLegend(circleBreaksCp, CIRCLECOLORS)
      }
      const legendDiv = document.getElementById('legend')
      legendDiv.innerHTML = ''
      legendDiv.append(legend)
    }
  }
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
  const markerBreaksCp = [...MARKERBREAKS]
  markerBreaksCp.shift()
  const legendDiv = document.getElementById('legend')
  legendDiv.append(getLegend(markerBreaksCp, MARKERCOLORS))
})

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

function sumString (text, regex) {
  return (text.match(regex || /\d*(?:\.\d*)?/g) || [])
    .reduce(function (prev, curr) {
      return prev + +curr
    }, 0)
}

function getStyle (code = '') {
  var z = MAP.getZoom()

  if (code === '' || selectedGemeente !== code || (z < 9)) {
    return {
      fillColor: null,
      color: null,
      fillOpacity: 0
    }
  } else {
    return {
      fillColor: 'white',
      opacity: 1,
      fillOpacity: 0.3
    }
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

function getA () {
  return (MAXSIZE - MINSIZE) / (MAX_AANTAL - MIN_AANTAL)
}

function getCircleIcon (feature, breaks) {
  const aantal = parseInt(feature.properties.aantal)
  if (aantal > 0) {
    var calculatedSize = getA() * (aantal - MIN_AANTAL) + MINSIZE
    var CustomIcon = L.Icon.extend({
      options: {
        iconAnchor: [calculatedSize / 3, calculatedSize / 2]
      }
    })
    const color = getColor(aantal, breaks, CIRCLECOLORS)
    const strokeColor = 'black'
    const achenSvgString = `<svg xmlns='http://www.w3.org/2000/svg' width='${calculatedSize}' height='${calculatedSize}'><circle cx='${calculatedSize / 2}' cy='${calculatedSize / 2}' r='${(calculatedSize / 2) - calculatedSize * 0.1}' fill='${color}' opacity='0.8' stroke='${strokeColor}'  stroke-width="1"/></svg>`
    const myIconUrl = encodeURI('data:image/svg+xml,' + achenSvgString).replace('#', '%23')
    var rectIcon = new CustomIcon({ iconUrl: myIconUrl })
    return rectIcon
  }
}

var selectedGemeente = ''

const gemBordersLayer = L.geoJSON(gemeentenBorders, {
  style: function (feature) {
    return {
      fillColor: null,
      weight: 1,
      opacity: 1,
      color: '#878787',
      dashArray: '4',
      fillOpacity: 0
    }
  }
})

const gemBordersLayerOutside = L.geoJSON(gemeentenBordersOutside, {
  style: function (feature) {
    if (selectedGemeente === feature.properties.Code) {
      return {
        fillColor: '#878787',
        weight: 2,
        opacity: 1,
        color: '#878787',
        dashArray: '4',
        fillOpacity: 1
      }
    } else {
      return {
        fillColor: null,
        weight: 2,
        opacity: 1,
        color: '#878787',
        dashArray: '4',
        fillOpacity: 0
      }
    }
  }
})
const geojsonMarkers = L.geoJSON(gemeentenPoint)

const gemLayer = L.geoJSON(gemeenten, {
  // onEachFeature: onEachFeature,
  style: getStyle()
}).bindPopup(function (layer) {
  return getPopupHTML(layer.feature.properties.gemeentenaam, layer.feature.properties.aantal)
})

function getPopupHTML (naam, aantal) {
  return '<p>Gemeente ' + naam + ': ' + aantal + '<p>'
}

function getLegend (breaks, colors) {
  return legend({
    color: d3.scaleThreshold(breaks, colors),
    title: 'Aantal positieve tests Covid-19',
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

MAP.fitBounds(gemBordersLayerOutside.getBounds())

MAP.on('zoom', function () {
  var z = MAP.getZoom()
  if (z >= 9 && z < 18) {
    return gemBordersLayer.addTo(MAP)
  }
  return gemBordersLayer.removeFrom(MAP)
})
