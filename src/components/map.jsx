"use client";
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

// Replace with your Mapbox access token
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWFrYXNocGF0ZWxhaHBsIiwiYSI6ImNsbWF2MnpkejBkeW8zcGpyNnZsZGs1ancifQ.1CZK6EwQfroKMlUqn1yobA";

const MapboxMap = () => {
  const mapContainer = useRef(null); // Define the type of ref
  const map = useRef(null); // Define the type of ref as Map

  useEffect(() => {
    if (map.current) return; // initialize map only once
    const bounds = [
      [80.015821, 12.804149], // [west, south]
      [80.06602, 12.845688], // [east, north]
    ];
    map.current = new mapboxgl.Map({
      container: "map-container",
      style: "mapbox://styles/aakashpatelahpl/cluu5va0p004h01pj1rx4c8qi", // Replace with your desired map style
      center: [80.048764, 12.824337], // Initial map center
      zoom: 15, // Initial zoom level
    });

    // Set the map's max bounds.

    if (map.current !== null) {
      map.current.on("load", () => {
        // Define bounds that conform to the `LngLatBoundsLike` object.
        // Use map.flyTo() to smoothly animate the map to India's coordinates
        // setTimeout(async() => {
        //   await map.current.flyTo({
        //     center: [80.048764, 12.824337], // India's coordinates
        //     zoom: 14, // Adjust the zoom level as needed
        //     speed: 0.75, // The fly animation speed (0.1 to 1)
        //     essential: true,
        //   });
        //   // map.current.setMaxBounds(bounds);
        // }, 0);
      });
      const symbols = [
        // { coordinates: [80.015821,12.804149], text: "Symbol 1" },
        { coordinates: [80.06, 12.84], text: "Symbol 2" },
        // { coordinates: [12.823207, 80.043460], text: "Symbol 3" },

        // Add more symbols as needed
      ];

      // Add symbols to the map
      // symbols.forEach((symbol, index) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([80.06, 12.84])
        .addTo(map.current);

      // Create a popup with the associated text
      const popup = new mapboxgl.Popup()
        .setHTML(
          `   
          <div style="border: 1px solid #000; padding: 2px;">
          <div style="color: black; font-weight: 600;">
            <h3>SRM Blood Bank</h3>
            <div>Chennai, India</div>
          </div>
        </div>
        `
        )
        .setMaxWidth("300px");

      // Add popup to the marker
      marker.setPopup(popup);
      // });
    }
  });

  return (
    <div className=" w-full h-screen">
      <div
        ref={mapContainer}
        id="map-container"
        style={{ width: "100%", height: "100%" }}
      ></div>
    </div>
  );
};

export default MapboxMap;
