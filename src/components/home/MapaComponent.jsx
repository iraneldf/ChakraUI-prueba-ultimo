// components/MapaComponent.jsx
'use client'
import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: '/leaflet/marker-icon-2x.png',
    iconUrl: '/leaflet/marker-icon.png',
    shadowUrl: '/leaflet/marker-shadow.png',
});

const MapaComponent = ({w, h}) => {
    const position = [51.505, -0.09]; // Coordenadas del centro del mapa
    const position2 = [51.504, -0.08]; // Coordenadas del centro del mapa

    return (
        <MapContainer center={position} zoom={13} style={{height: '526px', width: '1084px'}}>

            <Marker position={position}>
                <Popup>
                    Un marcador en Londres.
                </Popup>
            </Marker>

            <Marker position={position}>
                <Popup>
                    Un marcador en Londres.
                </Popup>
            </Marker>

        </MapContainer>
    );
};

export default MapaComponent;