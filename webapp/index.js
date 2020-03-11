
import 'leaflet/dist/leaflet'
import 'leaflet.control.layers.tree'
import 'leaflet.control.layers.tree/L.Control.Layers.Tree.css'
import 'leaflet.markercluster/dist/leaflet.markercluster'
import './node_modules/leaflet/dist/leaflet.css'
import './node_modules/leaflet.markercluster/dist/MarkerCluster.css'
import './node_modules/leaflet.markercluster/dist/MarkerCluster.Default.css'
import './index.css'
import coronaMarkers from './data/corona_markers.json'
import gemeenten from './data/gemeenten_simplified.json'
import gemeentenPoint from './data/gemeenten_simplified_point.json'
import gemeentenBorders from './data/gemeenten_borders_simplified.json'
import gemeentenBordersOutside from './data/gemeenten_borders_outside.json'
import updated from './updated.json'
import classes from './classes.json'

/* global L */
var map = L.map('mapid', {
  crs: L.CRS.EPSG3857,
  maxZoom: 18,
  minZoom: 5,
  maxBounds: [[43.934028, -4.262695],
    [58.378797, 13.886719]]
}).setView([52.505, 5], 8)

var backgroundLayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaartwater/EPSG:3857/{z}/{x}/{y}.png',
  {
    wmts: true,
    attribution: 'BRT-Achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a> (<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>)</span>'
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

const gemLayer = L.geoJSON(gemeenten, {
  style: function (feature) {
    return {
      fillColor: null,
      color: null,
      fillOpacity: 0
    }
  }
}).bindPopup(function (layer) {
  console.log(layer.feature)
  return '<p><b>Gemeente: </b>' + layer.feature.properties.Gemeentenaam + '</p>' +
    '<p><b>Aantal gevallen: </b>' + layer.feature.properties.aantal + '</p>'
})

const gemBordersLayerOutside = L.geoJSON(gemeentenBordersOutside, {
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

// markers layer
var markers = L.markerClusterGroup({
  polygonOptions: {
    fillColor: '#e7e1ef',
    weight: 1,
    opacity: 1,
    color: '#dd1c77',
    fillOpacity: 0.5
  },
  singleMarkerMode: true,
  attribution: 'Data coronavirus besmettingen: <a href="https://www.volksgezondheidenzorg.info/onderwerp/infectieziekten/regionaal-internationaal/coronavirus-covid-19">RIVM</a>'
})
const geojsonMarkers = L.geoJSON(coronaMarkers)
markers.addLayers(geojsonMarkers)
map.addLayer(markers)
markers.refreshClusters(geojsonMarkers)

backgroundLayer.addTo(map)
gemBordersLayer.addTo(map)
gemBordersLayerOutside.addTo(map)
gemLayer.addTo(map)

// events
markers.on('click', function (a) {
  L.popup()
    .setLatLng([a.layer._latlng.lat, a.layer._latlng.lng])
    .setContent('<p><b>Gemeente: </b>' + a.layer.feature.properties.gemeentenaam + '</p>')
    .openOn(map)
})

function getColor (value) {
  const colors = ['#ffffcc', '#a1dab4', '#41b6c4', '#2c7fb8', '#253494']
  const breaks = classes.gemeenten_corona.aantal
  let color

  for (let i = 1; i < breaks.length; i++) {
    if (i === 1) {
      if (value > breaks[0] && value <= breaks[i]) {
        color = colors[i - 1]
        break
      }
    } else {
      if (value <= breaks[i]) {
        color = colors[i - 1]
        break
      }
    }
  }
  return color
}
function iconByStations (feature) {
  if (feature.properties.aantal > 0) {
    var calculatedSize = (8 + (feature.properties.aantal * 3))
    var CustomIcon = L.Icon.extend({
      options: {
        iconSize: [calculatedSize, calculatedSize],
        iconAnchor: [calculatedSize / 3, calculatedSize / 2]
      }
    })
    const color = getColor(feature.properties.aantal)
    const achenSvgString = `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><circle cx='50' cy='50' r='40' stroke='gray' stroke-width='2' fill='${color}' /></svg>`
    const myIconUrl = encodeURI('data:image/svg+xml,' + achenSvgString).replace('#', '%23')
    var rectIcon = new CustomIcon({ iconUrl: myIconUrl })
    return rectIcon
  }
}

function getLegend () {
  if (map.hasLayer(metroLayer)) {
    return '<div class="legend-div"><div style="background-color:#ffffcc;" class="marker-cluster legend-item"></div>1 Besmettingen</div>' +
    '<div class="legend-div"><div style="background-color:#a1dab4;" class="marker-cluster legend-item"></div>1-4 Besmettingen</div>' +
    '<div class="legend-div"><div style="background-color:#41b6c4;" class="marker-cluster legend-item"></div>5-11 Besmettingen</div>' +
    '<div class="legend-div"><div style="background-color:#2c7fb8;" class="marker-cluster legend-item"></div>12-27 Besmettingen</div>' +
    '<div class="legend-div"><div style="background-color:#253494;" class="marker-cluster legend-item"></div>28-29 Besmettingen</div>'
  } else {
    return '<div class="legend-div"><div class="marker-cluster-small legend-item"></div>0-9 Besmettingen</div>' +
     '<div class="legend-div"><div class="marker-cluster-medium legend-item"></div>10-99 Besmettingen</div>' +
     '<div class="legend-div"><div class="marker-cluster-large legend-item"></div>>99 Besmettingen</div>'
  }
}

// create the GeoJSON layer and call the styling function with each marker
var metroLayer = L.geoJSON(gemeentenPoint, {
  pointToLayer: function (feature, latlng) {
    if (feature.properties.aantal > 0) {
      return L.marker(latlng, { icon: iconByStations(feature) })
    }
  }
}).bindPopup(function (layer) {
  return '<p><b>Gemeente: </b>' + layer.feature.properties.Gemeentenaam + '</p>' +
    '<p><b>Aantal gevallen: </b>' + layer.feature.properties.aantal + '</p>'
})

L.Control.Command = L.Control.extend({
  options: {
    position: 'topright'
  },

  onAdd: function (map) {
    console.log(this)
    var controlDiv = L.DomUtil.create('div', 'leaflet-control-command')
    var controlUI = L.DomUtil.create('div', 'leaflet-control-command-interior', controlDiv)
    controlUI.innerHTML = '<h1 style="margin-bottom:5px;">Corona Besmettingen in Nederland</h1><div id="legend">' + getLegend() +
     '</div><button id="testButton">Style</button>' +
     `<p>Totaal aantal besmettingen: ${updated.total_infections}&nbsp;&nbsp;|&nbsp;&nbsp;publicatie datum van de <a href="${updated.url}">data</a>: ${updated.date_data}&nbsp;&nbsp;|&nbsp;&nbsp;<a href="https://github.com/arbakker/corona-kaart">broncode</a></p>`
    return controlDiv
  }
})

L.control.command = function (options) {
  return new L.Control.Command(options)
}

L.control.command({}).addTo(map)

document.getElementById('testButton').addEventListener('click', function () {
  if (map.hasLayer(metroLayer)) {
    map.removeLayer(metroLayer)
    map.addLayer(markers)
  } else if (map.hasLayer(markers)) {
    map.removeLayer(markers)
    map.addLayer(metroLayer)
  }
  document.getElementById('legend').innerHTML = getLegend()
})
