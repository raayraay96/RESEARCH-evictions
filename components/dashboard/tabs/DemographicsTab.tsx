import React from 'react';
import Chart from '../../charts/Chart';
import { EVICTION_DATA } from '../../../constants';

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
};

const DemographicsTab: React.FC = () => {
    const racialChartData = {
        labels: ['White', 'Black', 'Hispanic', 'Other'],
        datasets: [{
            label: 'Filing Rate Disparity (vs White)',
            data: [
                EVICTION_DATA.racialData.white.disparity,
                EVICTION_DATA.racialData.black.disparity,
                EVICTION_DATA.racialData.hispanic.disparity,
                EVICTION_DATA.racialData.other.disparity
            ],
            backgroundColor: ['#3b82f6', '#dc2626', '#f59e0b', '#8b5cf6']
        }]
    };

    const incomeChartData = {
        labels: ['Under $30k', '$30k-$60k', 'Over $60k'],
        datasets: [{ data: [68, 25, 7], backgroundColor: ['#dc2626', '#f59e0b', '#10b981'] }]
    };
    
    const familyChartData = {
        labels: ['Single Parent', 'Multi-Generational', 'Couples', 'Single Person'],
        datasets: [{ data: [45, 30, 15, 10], backgroundColor: ['#dc2626', '#f59e0b', '#3b82f6', '#8b5cf6'] }]
    };

    const ageChartData = {
        labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
        datasets: [{ label: 'Percentage of Evictions', data: [15, 35, 25, 15, 8, 2], backgroundColor: '#3b82f6' }]
    };

    return (
        <div className="space-y-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center space-x-3">
                    <i className="fas fa-exclamation-triangle text-red-500 text-xl"></i>
                    <div>
                        <div className="font-bold text-red-800">Critical Racial Disparity Detected</div>
                        <div className="text-red-700">Black renters face eviction at {EVICTION_DATA.racialData.black.disparity}x the rate of White renters. Hispanic renters at {EVICTION_DATA.racialData.hispanic.disparity}x the rate.</div>
                    </div>
                </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Filter Demographics</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <select className="border border-gray-300 rounded-lg px-4 py-2"><option>All Races</option></select>
                    <select className="border border-gray-300 rounded-lg px-4 py-2"><option>All Incomes</option></select>
                    <select className="border border-gray-300 rounded-lg px-4 py-2"><option>All Family Types</option></select>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"><i className="fas fa-refresh mr-2"></i>Reset</button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Racial Filing Rate Disparities</h3>
                    <Chart type="bar" data={racialChartData} options={{...chartOptions, plugins: { legend: { display: true, position: 'bottom' } }}} />
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Income Level Impact</h3>
                    <Chart type="doughnut" data={incomeChartData} options={{...chartOptions, plugins: { legend: { display: true, position: 'bottom' } }}}/>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Family Composition</h3>
                    <Chart type="pie" data={familyChartData} options={{...chartOptions, plugins: { legend: { display: true, position: 'bottom' } }}}/>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Age Distribution</h3>
                    <Chart type="bar" data={ageChartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default DemographicsTab;
