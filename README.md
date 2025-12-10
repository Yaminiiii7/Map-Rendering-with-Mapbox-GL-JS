# 🌍 Mapbox Projects Collection

This repository contains two independent Mapbox-based web demos built using **Mapbox GL JS** and Mapbox Web APIs. Each project showcases different mapping capabilities — including custom map styling and GPS route correction using the Map Matching API.

---

## 📁 Project Structure

```
/
├── customisedMap/        # Demo using a custom Mapbox style
├── mapMatchingAPI/       # Demo using the Mapbox Map Matching API
└── styles.css            # Shared styling for both demos
```

---

## ▶️ How to Run the Projects

You can run **customisedMap** and **mapMatchingAPI** using either of the two methods below.

---

## 🔹 Option 1 — Open HTML Files Directly (Simple Method)

You can open each project manually in your browser:

### **Customised Map**
```
customisedMap/index.html
```

### **Map Matching API**
```
mapMatchingAPI/index.html
```
### **Local Search**
```
localSearch/index.html
```


## 🔹 Option 2 — Run Using a Local Server (Recommended)

This method ensures Mapbox loads correctly and avoids browser security restrictions.

### **Step 1 — Start a Local Server From the Repo Root**
```bash
python3 -m http.server 8000
```

### **Step 2 — Open Each Project in Your Browser**

#### **Customised Map**
```
http://localhost:8000/customisedMap/index.html
```

#### **Map Matching API**
```
http://localhost:8000/mapMatchingAPI/index.html
```

✔️ This method guarantees that all scripts, styles, and Mapbox resources load successfully.

---

## 🔧 Requirements

- A valid Mapbox access token  
- Python 3 (for local server)  
- Internet connection to load Mapbox assets  

Update the Mapbox token inside each `main.js`:

```js
mapboxgl.accessToken = '<your-mapbox-token>';
```

---

## 🛠️ Technologies Used
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Mapbox GL JS  
- Mapbox Web APIs  

---

Enjoy exploring and customizing these Mapbox demos!
