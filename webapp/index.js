
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
import gemeentenBorders from './data/gemeenten_borders_simplified.json'
import gemeentenBordersOutside from './data/gemeenten_borders_outside.json'
import updated from './updated.json'

/* global L */

var map = L.map('mapid', {
  crs: L.CRS.EPSG3857,
  maxZoom: 18,
  minZoom: 5,
  maxBounds: [[43.934028,-4.262695],
    [58.378797, 13.886719]]
}).setView([52.505, 5], 8)

var backgroundLayer = L.tileLayer('https://geodata.nationaalgeoregister.nl/tiles/service/wmts/brtachtergrondkaart/EPSG:3857/{z}/{x}/{y}.png',
  {
    wmts: true,
    attribution: 'BRT-Achtergrondkaart: © <a href="http://www.kadaster.nl">Kadaster</a> (<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>)</span>'
  }
)

const gemBordersLayer = L.geoJSON(gemeentenBorders, {
  style: function (feature) {
    return {
      fillColor: null,
      weight: 0.5,
      opacity: 1,
      color: '#454f4e',
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
      weight: 1,
      opacity: 1,
      color: 'darkgray',
      dashArray: '4',
      fillOpacity: 0
    }
  }
})

// markers layer
var markers = L.markerClusterGroup({
  polygonOptions:{
      fillColor: '#e7e1ef',
      weight: 1,
      opacity: 1,
      color: '#dd1c77',
      fillOpacity: 0.5
  },
  singleMarkerMode: true,
  attribution: `<a href="${updated.url}">Data coronavirus besmettingen - ${updated.date_data}</a>: <a href="https://www.volksgezondheidenzorg.info/onderwerp/infectieziekten/regionaal-internationaal/coronavirus-covid-19">RIVM</a>`
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
