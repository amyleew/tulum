mapboxgl.accessToken = 'pk.eyJ1IjoibXNsZWUiLCJhIjoiclpiTWV5SSJ9.P_h8r37vD8jpIH1A6i1VRg';
var start = [-87.171499,20.361846];
var startZoom = 8.64;
var startPitch = 0;
var startBearing = -30;
var speed = 2.4;
var next = [
  {
    name: "Tulum Archeological Site",
    place: [-87.4291,20.2164],
    zoom: 15,
    speed: 3,
    bearing: -90,
    pitch: 0
  },
  {
    name: "Cobá Archeological Site",
    place: [-87.7335924,20.4901021],
    zoom: 14,
    speed: speed,
    bearing: 20,
    pitch: 0
  },
  {
    name: "Temple of Kukulcan, Chichen Itza, Mexico",
    place: [-88.5683,20.6831],
    zoom: 16.5,
    speed: speed,
    bearing: 50,
    pitch: 0
  },
  {
    name: "Cozumel, Mexico",
    place: [-86.9746,20.4761],
    zoom: 15.4,
    speed: speed,
    bearing: 60,
    pitch: 0
  },
  {
    name: "Playa Ballenas, Cancun, Mexico",
    place: [-86.771047,21.086656],
    zoom: 15,
    speed: speed,
    bearing: 70,
    pitch: 0
  },
  {
    name: "Xplorer",
    place: [-87.1167,20.5849],
    zoom: 15.82,
    speed: speed,
    bearing: -90,
    pitch: 0
  },
  {
    name: "Playa del Carmen, Quintana Roo, Mexico",
    place: [-87.074644,20.627316],
    zoom: 13.7,
    speed: speed,
    bearing: -10,
    pitch: 0
  },
  {
    name: "Xpu Ha Beach",
    place: [-87.2604832,20.474303],
    zoom: 13,
    speed: speed,
    bearing: 60,
    pitch: 0
  },
  {
    name: "Parque Fundadores (Fundadores Park)",
    place: [-87.07487,20.62179],
    zoom: 15,
    speed: speed,
    bearing: 60,
    pitch: 0
  }
];

var geocoder = new mapboxgl.Geocoder({
    container: 'geocoder-container' // Optional. Specify a unique container for the control to be added to.
});

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mslee/cipq5ro8m001bbfm6vok5bcl6',
  center: start,
  zoom: startZoom,
  pitch: startPitch,
  bearingSnap: startBearing,
  maxzoom: 17,
  hash: true
});

map.addControl(new mapboxgl.Navigation({position: 'top-left'}));
map.addControl(geocoder);

var isAtStart = true;
var go = 0;
var speed = 1.5;
var slope;

function resetView(e) {
  map.setBearing(newBearing);
  map.setPitch(newPitch);
}


// button animation

function fly(e) {

  var target = isAtStart ? next : start;
  var newZoom;
  isAtStart = !isAtStart;
  slope = e;

  if (slope=='bre') {
    target = next[0].place;
    newZoom = next[0].zoom;
    newSpeed = next[0].speed;
    newBearing = next[0].bearing;
    newPitch = next[0].pitch;
  } else if (slope=='key') {
    target = next[1].place;
    newZoom = next[1].zoom;
    newSpeed = next[1].speed;
    newBearing = next[1].bearing;
    newPitch = next[1].pitch;
  } else if (slope=='aft') {
    target = next[2].place;
    newZoom = next[2].zoom;
    newSpeed = next[2].speed;
    newBearing = next[2].bearing;
    newPitch = next[2].pitch;
  } else if (slope=='mtb') {
    target = next[3].place;
    newZoom = next[3].zoom;
    newSpeed = next[3].speed;
    newBearing = next[3].bearing;
    newPitch = next[3].pitch;
  } else if (slope=='ara') {
    target = next[4].place;
    newZoom = next[4].zoom;
    newSpeed = next[4].speed;
    newBearing = next[4].bearing;
    newPitch = next[4].pitch;
  } else if (slope=='hea') {
    target = next[5].place;
    newZoom = next[5].zoom;
    newSpeed = next[5].speed;
    newBearing = next[5].bearing;
    newPitch = next[5].pitch;
  } else if (slope=='whi') {
    target = next[6].place;
    newZoom = next[6].zoom;
    newSpeed = next[6].speed;
    newBearing = next[6].bearing;
    newPitch = next[6].pitch;
  } else if (slope=='han') {
    target = next[7].place;
    newZoom = next[7].zoom;
    newSpeed = next[7].speed;
    newBearing = next[7].bearing;
    newPitch = next[7].pitch;
  } else if (slope=='bir') {
    target = next[8].place;
    newZoom = next[8].zoom;
    newSpeed = next[8].speed;
    newBearing = next[8].bearing;
    newPitch = next[8].pitch;
  }

  map.flyTo({
    center: target,
    zoom: newZoom,
    speed: newSpeed, // make the flying slow
    curve: 0.8, // change the speed at which it zooms out
    easing: function (t) {
      return t;
    }
  },
  console.log('pitch: '+newPitch+', bearing: '+newBearing),
  map.jumpTo({
      pitch: newPitch,
      bearing: newBearing
    })
  );
}