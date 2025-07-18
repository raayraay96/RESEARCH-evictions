import React from 'react';
import Chart from '../../charts/Chart';
import DataTable from '../DataTable';
import { EVICTION_DATA } from '../../../constants';

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom' as const } },
};

const GeographyTab: React.FC = () => {
    const urbanRuralData = {
        labels: ['Urban Centers', 'Suburban Areas', 'Rural Counties'],
        datasets: [{ label: 'Eviction Filing Rate', data: [4.2, 2.1, 1.5], backgroundColor: ['#dc2626', '#f59e0b', '#10b981'] }]
    };

    const accessData = {
        labels: ['< 5 miles', '5-15 miles', '15-30 miles', '> 30 miles'],
        datasets: [{ label: '% of Tenants', data: [25, 45, 20, 10], backgroundColor: ['#10b981', '#f59e0b', '#ea580c', '#dc2626'] }]
    };

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Search Your Area</h3>
                <div className="flex gap-4">
                    <input type="text" id="locationSearch" placeholder="Enter ZIP code, city, or address..."
                           className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-crisis-red focus:border-transparent"/>
                    <button onClick={() => alert('Searching...')} className="bg-crisis-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                        <i className="fas fa-search mr-2"></i>Search
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Urban vs Rural Comparison</h3>
                    <Chart type="bar" data={urbanRuralData} options={{...chartOptions, plugins: { legend: { display: false }}}} />
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Distance to Legal Resources</h3>
                    <Chart type="bar" data={accessData} options={{...chartOptions, plugins: { legend: { display: false }}}}/>
                </div>
            </div>

            <DataTable data={EVICTION_DATA.countyData} />
        </div>
    );
};

export default GeographyTab;
