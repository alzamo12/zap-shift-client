import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L, { marker } from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';
import 'leaflet-control-geocoder';
import { useLoaderData } from 'react-router';

const Coverage = ({ initialPosition = [23.8103, 90.4125] }) => {
    const mapRef = useRef(null);
    const branchMarkersRef = useRef([]);
    const [lat, setLat] = useState(initialPosition[0]);
    const [lng, setLng] = useState(initialPosition[1]);
    const [searchDistrict, setSearchDistrict] = useState('');
    const branches = useLoaderData();

    const handleLocation = ({ lat, lng }) => {
        console.log('location saved', lat, lng)
    }

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map('coverage-map', { center: initialPosition, zoom: 7 })
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }).addTo(mapRef.current);

            // branch markers
            branches.forEach(branch => {
                const m = L.marker([branch.latitude, branch.longitude])
                    .bindPopup(`<strong>${branch.city}</strong><br/>${branch.district}`)
                    .addTo(mapRef.current);
                    branchMarkersRef.current.push({district: branch.district.toLowerCase(), marker:m})
            });

        }

    //    cleanup or unmount
    return () => {
        mapRef.current && mapRef.current.remove();
        mapRef.current = null;
        branchMarkersRef.current = []
    }
    }, [branches, initialPosition]);

    const handleDistrictSearch = () => {
        const query = searchDistrict.trim().toLocaleLowerCase();
        const found = branchMarkersRef.current.find(b => b.district === query);
        if(found){
            const {marker}  =found;
            const latlng = marker.getLatLng();
            mapRef.current.setView(latlng, 12);
            marker.openPopup()
        }
        else{
            alert("No branch found for this district")
        }
    }


    return (
        <div className="w-full max-w-screen-lg mx-auto p-4 z-0 min-h-screen grid items-center gap-0">
            {/* District search box */}
            <div className="flex gap-2 mb-4 h-0">
                <input
                    type="text"
                    placeholder="Search your district"
                    value={searchDistrict}
                    onChange={e => setSearchDistrict(e.target.value)}
                    className="input input-bordered flex-grow"
                />
                <button onClick={handleDistrictSearch} className="btn btn-secondary">
                    Go
                </button>
            </div>

            <div id="coverage-map" className="w-full h-96 rounded-lg shadow-md mb-4"></div>

        </div>
    )
}

export default Coverage;