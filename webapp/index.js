
import 'leaflet/dist/leaflet.js'
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
import classes from './classes.json'
import './index.css'
import { legend } from './legend'
import * as d3 from 'd3'

const markerBreaks = getBreaks(updated.total_infections)
const markerColors = ['#feebe2', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177']

const circlecolors = ['#feebe2', '#fbb4b9', '#f768a1', '#c51b8a', '#7a0177']

const circleBreaks = classes.gemeenten_points.aantal

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
  var z = map.getZoom()

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

// normalized size circles
const max = 125
const min = 10
function getA () {
  return (max - min) / (updated.max - updated.min)
}
var A = getA()

function getCircleIcon (feature) {
  const aantal = feature.properties.aantal
  if (aantal > 0) {
    var calculatedSize = A * (aantal - updated.min) + min
    var CustomIcon = L.Icon.extend({
      options: {
        iconAnchor: [calculatedSize / 3, calculatedSize / 2]
      }
    })
    const color = getColor(feature.properties.aantal, circleBreaks, circlecolors)
    const strokeColor = 'black'
    const achenSvgString = `<svg xmlns='http://www.w3.org/2000/svg' width='${calculatedSize}' height='${calculatedSize}'><circle cx='${calculatedSize / 2}' cy='${calculatedSize / 2}' r='${(calculatedSize / 2) - calculatedSize * 0.1}' fill='${color}' opacity='0.8' stroke='${strokeColor}'  stroke-width="1"/></svg>`
    const myIconUrl = encodeURI('data:image/svg+xml,' + achenSvgString).replace('#', '%23')
    var rectIcon = new CustomIcon({ iconUrl: myIconUrl })
    return rectIcon
  }
}

var selectedGemeente = ''

/* global L */
var map = L.map('mapid', {
  attributionControl: false,
  crs: L.CRS.EPSG3857,
  maxZoom: 18,
  minZoom: 5,
  maxBounds: [[43.634028, -4.262695],
    [58.378797, 13.886719]]
}).setView([52, 5.3], 7)
L.control.attribution({ prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="https://github.com/arbakker/corona-map-nl" title="Broncode kaart Corona Virus in Nederland">Broncode Kaart</a>' }).addTo(map)

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

const gemLayer = L.geoJSON(gemeenten, {
  // onEachFeature: onEachFeature,
  style: getStyle()
}).bindPopup(function (layer) {
  return getPopupHTML(layer.feature.properties.gemeentenaam, layer.feature.properties.aantal)
})

function getPopupHTML (naam, aantal) {
  return '<p>Gemeente ' + naam + ': ' + aantal + '<p>'
}

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

const geojsonMarkers = L.geoJSON(gemeentenPoint)

// create the GeoJSON layer and call the styling function with each marker
var circles = L.geoJSON(gemeentenPoint, {
  pointToLayer: function (feature, latlng) {
    if (feature.properties.aantal > 0) {
      return L.marker(latlng, { icon: getCircleIcon(feature) })
    }
  }
}).bindPopup(function (layer) {
  return '<p>Gemeente ' + layer.feature.properties.gemeentenaam + ': ' + layer.feature.properties.aantal + '<p>'
})

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
    .setContent(getPopupHTML(a.layer.feature.properties.gemeentenaam, a.layer.feature.properties.aantal))
    .openOn(map)
})

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
      `<p class="full"><b>totaal aantal positieve tests: </b>${updated.total_infections}&nbsp;&nbsp;<span title="${updated.comment}"><i class="fa fa-asterisk"></i></span>&nbsp;&nbsp;&nbsp;&nbsp;<b>peildatum: </b> ${updated.date_data}&nbsp;&nbsp;<span title="data wordt dagelijks ververst"><i class="fa fa-asterisk"></i></span></p>` +
      '</div>' + `<span class="mobile" style="font-size: 9px;position:absolute; right:5px;bottom:5px;"><b>peildatum: </b>${updated.date_data}&nbsp;&nbsp;<span title="data wordt dagelijks ververst"><i class="fa fa-asterisk"></i></span></span>`
    return controlDiv
  }
})

L.control.command = function (options) {
  return new L.Control.Command(options)
}

L.control.command({}).addTo(map)

// register event listeners
const radiosViz = document.getElementsByName('viz')
for (let i = 0, max = radiosViz.length; i < max; i++) {
  radiosViz[i].onclick = function () {
    let legend
    if (this.value === 'cluster') {
      map.removeLayer(circles)
      map.addLayer(markers)
      const markerBreaksCp = [...markerBreaks]
      markerBreaksCp.shift()
      legend = getLegend(markerBreaksCp, markerColors)
    } else {
      map.removeLayer(markers)
      map.addLayer(circles)
      const circleBreaksCp = [...circleBreaks]
      circleBreaksCp.shift()
      legend = getLegend(circleBreaksCp, circlecolors)
    }
    const legendDiv = document.getElementById('legend')
    legendDiv.innerHTML = ''
    legendDiv.append(legend)
  }
}

Array.prototype.forEach.call(document.getElementsByClassName('leaflet-layer'), function (el) {
  el.classList.add('dark')
})
document.body.classList.add('dark')
Array.prototype.forEach.call(document.getElementsByClassName('leaflet-container'), function (el) {
  el.classList.add('dark')
})

function getLegend (breaks, colors) {
  return legend({
    color: d3.scaleThreshold(breaks, colors),
    title: 'Aantal positieve tests Covid-19',
    tickSize: 0
  })
}

const markerBreaksCp = [...markerBreaks]
markerBreaksCp.shift()
const legendDiv = document.getElementById('legend')
legendDiv.append(getLegend(markerBreaksCp, markerColors))

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

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
const vh = window.innerHeight * 0.01
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

window.addEventListener('resize', () => {
  // We execute the same script as before
  const vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
})

map.fitBounds(gemBordersLayerOutside.getBounds())

map.on('zoom', function () {
  var z = map.getZoom()

  if (z >= 9 && z < 18) {
    return gemBordersLayer.addTo(map)
  }
  return gemBordersLayer.removeFrom(map)
})
