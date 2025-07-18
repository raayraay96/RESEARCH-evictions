
import React from 'react';
import Chart from '../../charts/Chart';
import { EVICTION_DATA } from '../../../constants';

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
};

const LegalTab: React.FC = () => {
    const repData = {
        labels: ['Landlords w/ Attorney', 'Tenants w/ Attorney', 'Unrepresented'],
        datasets: [{ data: [69.7, 1.1, 29.2], backgroundColor: ['#dc2626', '#10b981', '#6b7280'] }]
    };

    const outcomeData = {
        labels: ['Tenant Wins', 'Landlord Wins', 'Settlements'],
        datasets: [
            { label: 'With Attorney', data: [45, 35, 20], backgroundColor: '#10b981' },
            { label: 'Without Attorney', data: [8, 82, 10], backgroundColor: '#dc2626' }
        ]
    };

    const corporateData = {
        labels: EVICTION_DATA.corporateLandlords.map(c => c.name),
        datasets: [{ label: 'Filings This Year', data: EVICTION_DATA.corporateLandlords.map(c => c.filings), backgroundColor: '#dc2626' }]
    };

    const biasData = {
        datasets: [{
            label: 'Judge Decision Patterns',
            data: [
                {x: 85, y: 12, r: 8}, {x: 92, y: 15, r: 12}, {x: 78, y: 8, r: 6},
                {x: 95, y: 18, r: 14}, {x: 88, y: 10, r: 7}, {x: 91, y: 16, r: 11}
            ],
            backgroundColor: (context: any) => context.raw.x > 90 && context.raw.y > 14 ? '#dc2626' : '#3b82f6'
        }]
    };

    return (
        <div className="space-y-8">
             <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center space-x-3">
                    <i className="fas fa-balance-scale text-red-500 text-2xl"></i>
                    <div>
                        <div className="font-bold text-red-800 text-lg">Massive Justice Gap Identified</div>
                        <div className="text-red-700">69.7% of landlords have attorneys vs. only 1.1% of tenants - a 63x disparity.</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Legal Representation Gap</h3>
                    <Chart type="doughnut" data={repData} options={{...chartOptions, plugins: { legend: { position: 'bottom' }}}}/>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Case Outcomes by Representation</h3>
                    <Chart type="bar" data={outcomeData} options={{...chartOptions, plugins: { legend: { position: 'bottom' }}}}/>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Top Corporate Filers</h3>
                    <Chart type="horizontalBar" data={corporateData} options={{...chartOptions, plugins: { legend: { display: false }}}}/>
                </div>
                 <div className="bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Judicial Bias Detection</h3>
                    <Chart type="scatter" data={biasData} options={{...chartOptions, plugins: { legend: { display: true, position: 'bottom' } }, scales: { x: { title: { display: true, text: 'Landlord Win Rate (%)' }}, y: { title: { display: true, text: 'Statistical Deviation' }} }}}/>
                    <div className="mt-4 text-sm text-gray-700">
                        <p className="text-red-600"><i className="fas fa-exclamation-triangle mr-1"></i>AI analysis flagged 3 judges with statistical anomalies.</p>
                        <p className="mt-2">See the <span className="font-bold">Judicial Analysis</span> tab for detailed, evidence-based profiles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalTab;
