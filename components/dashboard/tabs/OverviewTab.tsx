import React from 'react';
import EvictionMap from '../../ui/EvictionMap';
import Chart from '../../charts/Chart';
import DataTable from '../DataTable';
import { EVICTION_DATA } from '../../../constants';

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

const OverviewTab: React.FC = () => {
    const trendChartData = {
        labels: EVICTION_DATA.trendData.labels,
        datasets: [
            {
                label: 'Actual Filings',
                data: EVICTION_DATA.trendData.actual,
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.1)',
                tension: 0.4,
                fill: true
            },
            {
                label: 'AI Predictions',
                data: EVICTION_DATA.trendData.predicted,
                borderColor: '#7c3aed',
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                borderDash: [5, 5],
                tension: 0.4,
                fill: false
            }
        ]
    };
    
    const countyChartData = {
        labels: EVICTION_DATA.countyData.map(c => c.name),
        datasets: [{
            label: 'Total Filings',
            data: EVICTION_DATA.countyData.map(c => c.filings),
            backgroundColor: EVICTION_DATA.countyData.map(c => {
                switch(c.risk) {
                    case 'Critical': return '#dc2626';
                    case 'High': return '#ea580c';
                    case 'Moderate': return '#d97706';
                    case 'Low': return '#16a34a';
                    default: return '#6b7280';
                }
            })
        }]
    };
    
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Interactive Eviction Hotspot Map</h3>
                <EvictionMap counties={EVICTION_DATA.countyData} />
                <div className="mt-4 text-sm text-gray-600"><i className="fas fa-info-circle mr-1"></i>Click counties for detailed breakdown. Red intensity indicates higher eviction rates.</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Filing Trends & Predictions</h3>
                    <Chart type="line" data={trendChartData} options={{...chartOptions, plugins: { legend: { position: 'top'}}}} />
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Top Counties by Filing Volume</h3>
                    <Chart type="bar" data={countyChartData} options={{...chartOptions, plugins: { legend: { display: false }}}} />
                </div>
            </div>
            
            <DataTable data={EVICTION_DATA.countyData} />
        </div>
    );
};

export default OverviewTab;
