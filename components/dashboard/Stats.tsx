
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { EVICTION_DATA } from '../../constants';

const StatCard: React.FC<{
  value: number;
  label: string;
  trend?: string;
  trendColor?: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}> = ({ value, label, trend, trendColor, bgColor, textColor, borderColor }) => {
    const count = useCounter(value);
    return (
        <div className={`text-center data-card ${bgColor} p-6 rounded-xl border ${borderColor} transition transform hover:-translate-y-1`}>
            <div className={`text-4xl md:text-5xl font-bold ${textColor}`}>{count.toLocaleString()}</div>
            <div className="text-gray-700 mt-2 font-medium">{label}</div>
            {trend && <div className={`text-sm ${trendColor} mt-1`} dangerouslySetInnerHTML={{ __html: trend }}></div>}
        </div>
    );
};


const Stats: React.FC = () => {
    return (
        <section className="bg-white py-8 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        value={EVICTION_DATA.totalFilings}
                        label="Total Evictions (2020-2025)"
                        trend="<i class='fas fa-trending-up mr-1'></i>+15% this year"
                        trendColor="text-red-600"
                        bgColor="bg-gradient-to-br from-red-50 to-red-100"
                        textColor="text-red-600"
                        borderColor="border-red-200"
                    />
                    <StatCard
                        value={EVICTION_DATA.dailyRate}
                        label="Daily Filing Rate"
                        trend="<i class='fas fa-arrow-up mr-1'></i>+23 from yesterday"
                        trendColor="text-orange-600"
                        bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
                        textColor="text-orange-600"
                        borderColor="border-orange-200"
                    />
                    <StatCard
                        value={EVICTION_DATA.familiesAffected}
                        label="Families Affected"
                        trend="<i class='fas fa-users mr-1'></i>1 in 14 renters"
                        trendColor="text-blue-600"
                        bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
                        textColor="text-blue-600"
                        borderColor="border-blue-200"
                    />
                    <div className="text-center data-card bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 transition transform hover:-translate-y-1">
                      <div className="text-4xl md:text-5xl font-bold text-purple-600">3.8%</div>
                      <div className="text-gray-700 mt-2 font-medium">IN vs National Rate</div>
                      <div className="text-sm text-red-600 mt-1"><i className="fas fa-chart-line mr-1"></i>81% above avg</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
