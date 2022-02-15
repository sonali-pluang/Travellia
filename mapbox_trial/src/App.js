import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import parkDate from "./data/coordinates.json"
import axios from "axios"

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect (()=>{
    const fetchData = async()=>{
      const res = await axios.get("https://api.mapbox.com/directions/v5/mapbox/driving/-73.99075114991716%2C40.73477716503521%3B-73.98997023874493%2C40.7344787724343%3B-73.98987012192798%2C40.73532337175325%3B-73.99077117328038%2C40.734827739919865")
      console.log(res)
    }
    fetchData()
  }, [])

  return (
    <div>
      {/* <ReactMapGL
        {...viewport}
        mapboxAccessToken="pk.eyJ1Ijoic29uYWxpLXBsdWFuZyIsImEiOiJja3ptZmlrcXgxMDJtMm90YXowemw4ZjM2In0.MXFtpFB3CUVf3WdgI2mljw"
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="/skateboarding.svg" alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.properties.NAME}</h2>
              <p>{selectedPark.properties.DESCRIPTIO}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL> */}

      <ReactMapGL
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
  />
    </div>
  );
}
