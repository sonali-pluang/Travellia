import React, { useState, useEffect } from "react";
const MapComponent = () => {
  const [map, setMap] = useState("");
  useEffect(() => {
      console.log("outside window load")
        console.log("inside window load")
      var centre = new window.L.LatLng(27.1762781, 77.9728989);
      let mapObj = new window.MapmyIndia.Map("map", {
        center: centre,
        zoomControl: true,
        hybrid: true,
      });
      setMap(mapObj);
  }, []);
  
  useEffect(() => {
    if (map) {
      window.MapmyIndia.direction({
        map,
        start: "27.1762781,77.9728989",
        end: { label: "India Gate, Delhi", geoposition: "1T182A" },
        via: [
          { label: "mathura", geoposition: "28.544,77.4541" },
          { label: "Koshi", geoposition: "28.144,77.4541" },
        ],
        routeColor: "#0000FF",
        strokeWidth: 10,
        callback: () => console.log,
      });
    }
  }, [map]);
  return <div id="map"></div>;
};
export default MapComponent;