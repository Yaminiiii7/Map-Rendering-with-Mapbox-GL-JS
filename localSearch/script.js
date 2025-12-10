const ACCESS_TOKEN = 'pk.eyJ1IjoieWFtaW5pLW1hbmRhZGkiLCJhIjoiY21pcnplMjEwMHh4MjNkcHdhN3l5amZnaCJ9.jribJH1wYoyGOri34V21pg';

mapboxgl.accessToken = ACCESS_TOKEN;

const map = new mapboxgl.Map({
        container: 'map', // Container ID
        style: 'mapbox://styles/mapbox/standard', // Map style to use
        center:  [-122.25948, 37.87221], // Starting position [lng, lat]
        zoom: 12 // Starting zoom level
      });

map.on('load', () => {
    map.addSource('bbox', {
      "type": "geojson",
      "data": {
          "type": "Feature",
          "properties": {},
          "geometry": {
              "coordinates": [
              [
                  [-122.24560, 37.88466],
                  [-122.24539, 37.85240],
                  [-122.30337, 37.85251],
                  [-122.30332, 37.88483],
                  [-122.24560, 37.88466] // closing the polygon
              ]
              ],
              "type": "Polygon"
          }
      }
  });

map.addLayer({
      "id": "bbox",
      "type": "fill",
      "source": "bbox",
      "layout": {},
      "paint": {
          "fill-color": "#088",
          "fill-opacity": 0.2
      }
  });
})

const marker = new mapboxgl.Marker() // initialize a new marker
        .setLngLat( [-122.25948, 37.87221]) // Marker [lng, lat] coordinates
        .addTo(map);

window.addEventListener('load', () => {
            const searchBox = new MapboxSearchBox(); // creates a new SearchBox instance
            searchBox.accessToken = ACCESS_TOKEN; // provides your accessToken to Searchbox for requests
            searchBox.options = {
          proximity: [-122.25948, 37.87221], // Coordinates of UC Berkeley campus
          bbox: [
            [-122.30331, 37.85247], // bounding box southwest corner
            [-122.24538, 37.88487] // bounding box northeast corner
          ]
        };



        searchBox.placeholder = 'Search for places in Berkeley';
            searchBox.marker = true; // Adds a marker to the map after clicking a search result
            
            searchBox.mapboxgl = mapboxgl; // connects
            searchBox.componentOptions = { allowReverse: true, flipCoordinates: true };
            map.addControl(searchBox); // Adds searchBox to the Mapbox GL JS control area (top right)
        });

        