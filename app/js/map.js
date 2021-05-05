'use strict';

function runMap() {
 const btnView1 = document.getElementById('btn-view-1');
 const btnView2 = document.getElementById('btn-view-2');
 const map = document.getElementById('mapid');
 const myIcon = L.icon({
  iconUrl: '/assets/icons/icon-location.svg',
 });

 // Set map on page load
 const myMap = L.map('mapid').setView([33.7826352, -89.8882381], 5);
 L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicndpbnRlcjcxIiwiYSI6ImNrbjBoNnJ0ODBjbG0yb3BiaW54bzdobTUifQ.NTWRccBIgEerO4BIb96-AQ',
  {
   maxZoom: 18,
   id: 'mapbox/streets-v11',
   tileSize: 512,
   zoomOffset: -1,
  }
 ).addTo(myMap);

 // Fly to location on button click
 function goToLocation() {
  const coords = [
   [35.9613161, -84.0230739],
   [32.0756302, -96.5312545],
  ];
  const labels = ['Main Office', 'Office II'];
  const btns = [btnView1, btnView2];

  // Adds marker and label for each location
  for (let i = 0; i < coords.length; i++) {
   const marker = L.marker(coords[i], { icon: myIcon }).addTo(myMap);
   const tooltip = L.tooltip({ permanent: true }).setContent(labels[i]);
   marker.bindTooltip(tooltip);

   btns[i].addEventListener('click', (e) => {
    myMap.flyTo(coords[i], 12);

    map.scrollIntoView({
     behavior: 'smooth',
     block: 'center',
     inline: 'nearest',
    });
   });
  }
 }
 goToLocation();
}
runMap();
