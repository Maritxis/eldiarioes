
var map = new ol.Map({ 
   layers: [ 
     new ol.layer.Tile({ 
        source: new ol.source.OSM() 
     }) 
   ], 
   target: 'map', 
   view: new ol.View({ 
     center: ol.proj.fromLonLat([-3.41, 40.25]), 
     zoom: 5
   }) 
});

document.getElementById("map").addEventListener("click", clickHandler);

function clickHandler(ev) {
  ol.interaction.DoubleClickZoom();
  console.log(ev);
}
document.getElementById("map").addEventListener("dblclick", doubleclickHandler);

function doubleclickHandler(ev) {
  console.log('map',map);
}