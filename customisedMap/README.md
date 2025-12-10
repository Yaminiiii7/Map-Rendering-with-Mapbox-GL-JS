# 🌍 Mapbox Custom Style Demo

This project is a simple interactive web map built using **Mapbox GL JS**. It loads a custom Mapbox Studio style, centers the map on the United States, and demonstrates a minimal setup for rendering a styled map in the browser.

---

## 📁 Project Files

### **index.html**
Contains the main webpage structure, loads Mapbox scripts, and includes the map container.  
See file: index.html

### **main.js**
Initializes the Mapbox map, sets access token, custom style URL, center position, and zoom level.  
See file: main.js

---

## 🚀 Features
- Custom Mapbox Studio style integration  
- Smooth interactive map (pan, zoom, rotate)  
- Clean and minimal HTML + JavaScript structure  
- Easy starting point for more advanced mapping features  

---

## 🛠️ How to Run

### **Option 1 — Run by Opening index.html Directly**
Simply open the `index.html` file in a browser.

---

### **Option 2 — Run With a Local Server (Recommended)**

Start a local server from your project folder:

```bash
python3 -m http.server 8000
```

Then open this URL in a browser:

```
http://localhost:8000/index.html
```

This ensures all Mapbox assets load correctly.

---

## 🔑 Mapbox Access Token

Your token is stored in **main.js**:

```js
mapboxgl.accessToken = '<your-mapbox-token>';
```

Update the token if needed by replacing it with a new one from your Mapbox account.

---

## 🎨 Map Settings

The map uses this custom style:

```
mapbox://styles/yamini-mandadi/cmis0okeh000301subf7r4wny
```

Default map view:

- **Center:** USA → `[-98.585522, 39.833333]`
- **Zoom:** `4`

Modify these values in `main.js` to change the initial camera view.

---

## ✨ Possible Enhancements
- Add markers & popups  
- Add custom layers (GeoJSON, heatmaps, routes)  
- Add user location tracking  
- Build UI controls (buttons/toggles/layers)  

---


Enjoy customizing your map!  
