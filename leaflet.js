let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
      attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 18
    });
tileLayer.addTo(firstMap);
firstMap.setView([40.730833, -73.9975], 16);
//adding markers below here//
let bobstLibrary;
bobstLibrary = L.marker([40.729444, -73.997222]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library.");
//
let bobstCoords;
bobstCoords = L.latLng(40.729444, -73.997222);
firstMap.panTo(bobstCoords);
//
let washingtonSquarePark, washingtonSquareParkMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
washingtonSquarePark = L.latLng(40.730833, -73.9975);
washingtonSquareParkMarker = L.marker(washingtonSquarePark).addTo(firstMap);
tenThousandth = [[40.7307, -73.9976], [40.7307, -73.9974], 
                 [40.7309, -73.9974], [40.7309, -73.9976]];
tenThousandthPolygon = L.polygon(tenThousandth, {
                                  color: "#268bd2",
                                  fillColor: "#fdf6e3"
                                }
                        ).addTo(firstMap);
//
let circle;
circle = L.circle(waverlyPlace, {radius: 100,
                                         color: "#859900",
                                         fillColor: "#cb4b16",
                                         opacity: 0.9,
                                         fillOpacity: 0.25}
          ).addTo(firstMap);
//
let waverlyPlace;
waverlyPlace = L.marker([41.079104, -73.7783911]);
waverlyPlace.addTo(firstMap);
waverlyPlace.bindPopup("Now looking at Waverly Place!");
//
let waverlyPlaceCoords;
waverlyPlaceCoords = L.latLng(41.079104, -73.7783911);
firstMap.panTo(waverlyPlace);
//
