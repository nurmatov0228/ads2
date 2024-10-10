import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customIconUrl from "../../../img/ingreen.png"; // Ikkita import qilingan faylni to'g'ri yo'l bilan olish
import "./map.scss";

// Custom Icon for Marker
const customIcon = new L.Icon({
  iconUrl: customIconUrl,
  iconSize: [38, 38],
});

const Map = () => {
  return (
    <div className="map">
      <div className="container">
        <div className="map__container">
          <h1 className="map__title">
            Sizning reklamangiz uchun <span className="text-btn">joylar</span>
            ...
          </h1>
          <div className="map__map">
            <MapContainer
              center={[41.2995, 69.2401]} // Toshkent koordinatalari
              zoom={13}
              scrollWheelZoom={false}
              className="leaflet-container"
              style={{ height: "650px", width: "100%" }} // Yuqoridagi o'lchovni qo'shdik
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[41.2995, 69.2401]} icon={customIcon}>
                <Popup>Toshkent, O'zbekiston</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
