# 🚗 Map Matching API Demo (Mapbox GL JS)

This project demonstrates how to use the **Mapbox Map Matching API** with interactive drawing tools. Users can draw a route on the map, and the API will snap the route to the most accurate real-world road geometry.

---

## 📁 Project Files

- **mymap.html** — Main HTML structure, loads Mapbox GL JS, Mapbox Draw tools, and includes the map container.
- **script.js** — Initializes the map, enables drawing, sends routes to the Map Matching API, and renders matched routes with turn-by-turn instructions.

---

## 🎯 Features

- Draw custom routes directly on the map  
- Snaps drawn paths to real-world road networks  
- Renders matched route visually  
- Provides turn-by-turn navigation instructions  
- Delete tool to remove routes  
- Auto-updates matched route when drawing changes  

---

## 🔑 Mapbox Access Token
Update the token in `script.js`:

```js
mapboxgl.accessToken = '<your-mapbox-token>';
```

Get a new token here:  
https://account.mapbox.com/

---

## 🗺️ How the Map Matching Flow Works

1. Draw a **LineString** using Mapbox Draw  
2. Extract coordinates  
3. Send coordinates → Map Matching API  
4. Receive snapped route + instructions  
5. Display:
   - Green matched route  
   - Turn-by-turn instructions  

---

## 🛠️ Technologies Used
- Mapbox GL JS  
- Mapbox Map Matching API  
- Mapbox Draw Plugin  
- HTML5, CSS3, JavaScript  

---

## 📌 Future Enhancements
- Save/export GPX routes  
- Add start/end markers  
- Add walking/cycling routing profiles  
- Animate route playback  
- Support editing of drawn lines  

---

