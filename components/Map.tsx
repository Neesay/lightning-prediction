'use client';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Props {
  tileUrl?: string | null;
}

export default function Map({ tileUrl }: Props) {
  return (
    <MapContainer center={[39.8283, -98.5795]} zoom={4} className="flex-1">
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {tileUrl && <TileLayer url={tileUrl} opacity={0.75} />}
    </MapContainer>
  );
}
