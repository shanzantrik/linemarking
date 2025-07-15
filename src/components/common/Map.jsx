import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Default marker icon fix for leaflet in React
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const Map = ({ center = [-33.8688, 151.2093], zoom = 12, marker = null, popup = null, height = '250px' }) => (
  <div style={{ width: '100%', height, borderRadius: '12px', overflow: 'hidden' }}>
    <MapContainer center={center} zoom={zoom} style={{ width: '100%', height: '100%' }} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker && (
        <Marker position={marker} icon={markerIcon}>
          {popup && <Popup>{popup}</Popup>}
        </Marker>
      )}
    </MapContainer>
  </div>
);

export default Map;
