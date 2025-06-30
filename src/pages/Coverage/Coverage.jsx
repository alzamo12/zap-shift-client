import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';

const Coverage = ({ initialPosition = [23.8103, 90.4125] }) => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);
    const [lat, setLat] = useState(initialPosition[0]);
    const [lng, setLng] = useState(initialPosition[1]);

    const handleLocation = ({ lat, lng }) => {
        // send to backend or state
        console.log('Location saved:', lat, lng);
    };
    useEffect(() => {
        if (!mapRef.current) {
            // Initialize map
            mapRef.current = L.map('coverage-map', {
                center: initialPosition,
                zoom: 12,
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors',
            }).addTo(mapRef.current);

            // Add draggable marker
            markerRef.current = L.marker(initialPosition, { draggable: true }).addTo(mapRef.current);
            markerRef.current.on('dragend', () => {
                const { lat, lng } = markerRef.current.getLatLng();
                setLat(lat);
                setLng(lng);
                handleLocation && handleLocation({ lat, lng });
            });

            // Add geocoder
            const geocoder = L.Control.geocoder({
                defaultMarkGeocode: false,
                placeholder: 'Search location...'
            })
                .on('markgeocode', e => {
                    const { center } = e.geocode;
                    mapRef.current.setView(center, 14);
                    markerRef.current.setLatLng(center);
                    setLat(center.lat);
                    setLng(center.lng);
                    handleLocation && handleLocation({ lat: center.lat, lng: center.lng });
                })
                .addTo(mapRef.current);
        }

        // Cleanup on unmount
        return () => {
            mapRef.current && mapRef.current.remove();
            mapRef.current = null;
        };
    }, []);

    return (
        <div className="w-full max-w-screen-lg mx-auto p-4">
            <div id="coverage-map" className="w-full h-96 rounded-lg shadow-md mb-4"></div>
            <form className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Latitude</span>
                    </label>
                    <input
                        type="text"
                        readOnly
                        value={lat.toFixed(6)}
                        className="input input-bordered"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Longitude</span>
                    </label>
                    <input
                        type="text"
                        readOnly
                        value={lng.toFixed(6)}
                        className="input input-bordered"
                    />
                </div>

                <button
                    type="button"
                    className="btn btn-primary w-full"
                    onClick={() => handleLocation && handleLocation({ lat, lng })}
                >
                    Save Location
                </button>
            </form>
        </div>
    )
}

export default Coverage;