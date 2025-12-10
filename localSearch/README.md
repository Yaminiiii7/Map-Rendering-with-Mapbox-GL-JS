# 🔎 Local Search Map App (Mapbox GL JS + Search JS)

This project is a simple **local search application** built using Mapbox GL JS and the Mapbox Search JS SDK.  
It displays an interactive map centered on UC Berkeley, draws a bounding box polygon, and allows users to search for places **within Berkeley** using a search widget.

---

## 📁 Project Files

- **index.html** — Loads Mapbox GL JS, Search JS, stylesheets, and initializes the map container.
- **script.js** — Handles map setup, renders bounding box, places markers, and configures the Mapbox SearchBox component.

---

## 🚀 Features

- Interactive Mapbox map  
- SearchBox for place lookup  
- Automatic marker placement  
- Search restricted to a Berkeley bounding box  
- Polygon overlay representing allowed search area  
- Map centered at UC Berkeley coordinates  

---

## 🛠️ Getting Started

### 1️⃣ Clone the project
```bash
git clone <your-repo-url>
cd <your-folder>
```

## 🔑 Mapbox Access Token

Update the token inside `script.js`:

```js
const ACCESS_TOKEN = '<your-mapbox-token>';
```

Get a token from: https://account.mapbox.com/

---

## 🗺️ How It Works

### ✔️ Map Initialization
- Uses `mapbox://styles/mapbox/standard`
- Centers on Berkeley: `[-122.25948, 37.87221]`
- Zoom level: `12`

### ✔️ Bounding Box Layer  
A polygon representing the search boundary is drawn on map load.

### ✔️ SearchBox Setup  
Configured with:
- A bounding box (Berkeley region)
- Proximity bias toward UC Berkeley
- Automatic marker drop on search selection

### ✔️ Default Marker  
A marker is placed at the map center when the map loads.

---

## 📌 Technologies Used

- **Mapbox GL JS**
- **Mapbox Search JS SDK**
- HTML5 / CSS3
- JavaScript (ES6)

---

Enjoy exploring and customizing your local search app!
