import React, { useEffect, useRef, useState } from 'react';
import { CountyData } from '../../types';

declare const L: any;

interface EvictionMapProps {
    counties: CountyData[];
}

const getRiskColor = (risk: string) => {
    switch(risk) {
        case 'Critical': return '#dc2626';
        case 'High': return '#ea580c';
        case 'Moderate': return '#d97706';
        case 'Low': return '#16a34a';
        default: return '#6b7280';
    }
}

const EvictionMap: React.FC<EvictionMapProps> = ({ counties }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<any>(null);
    const [layers, setLayers] = useState<any>({});

    useEffect(() => {
        if (mapContainerRef.current && !mapRef.current) {
            mapRef.current = L.map(mapContainerRef.current).setView([39.9, -86.15], 7);

            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            }).addTo(mapRef.current);
        }

        // Clear existing markers
        if (layers.countyMarkers) {
            mapRef.current.removeLayer(layers.countyMarkers);
        }
        
        const markerGroup = L.layerGroup();
        counties.forEach(county => {
            const color = getRiskColor(county.risk);
            const radius = Math.log2(county.filings) * 1.5;
            
            const marker = L.circleMarker([county.lat, county.lng], {
                color: color,
                fillColor: color,
                fillOpacity: 0.7,
                radius: radius,
                weight: 2
            }).addTo(markerGroup);
            
            marker.bindPopup(`
                <div class="font-semibold text-lg mb-2">${county.name} County</div>
                <div class="space-y-1 text-sm">
                    <div><strong>Total Filings:</strong> ${county.filings.toLocaleString()}</div>
                    <div><strong>Filing Rate:</strong> ${county.rate}%</div>
                    <div><strong>Risk Level:</strong> <span class="font-semibold" style="color: white">${county.risk}</span></div>
                    <div><strong>Population:</strong> ${county.population.toLocaleString()}</div>
                </div>
            `);
            
            marker.bindTooltip(`${county.name}: ${county.rate}% (${county.risk})`, {
                permanent: false,
                direction: 'top'
            });
        });
        
        markerGroup.addTo(mapRef.current);
        setLayers((prev: any) => ({ ...prev, countyMarkers: markerGroup }));

    }, [counties]);

    return <div ref={mapContainerRef} id="map" className="h-[500px] w-full rounded-lg border border-gray-300 shadow-inner"></div>;
};

export default EvictionMap;
