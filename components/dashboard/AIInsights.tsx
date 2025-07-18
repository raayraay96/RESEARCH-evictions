import React from 'react';

const KeyFindings: React.FC = () => {
    return (
        <div className="bg-white pb-8">
            <div className="container mx-auto px-4">
                <div className="bg-primary text-white rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <i className="fas fa-lightbulb text-2xl text-yellow-300"></i>
                        <h3 className="text-xl font-bold">Key Statistical Findings</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                        <div className="bg-secondary/50 rounded-lg p-4">
                            <div className="font-semibold mb-2">Predictive Modeling</div>
                            <div className="text-sm opacity-90">Time-series analysis projects an 18% increase in filings in the next quarter based on economic and seasonal trends.</div>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4">
                            <div className="font-semibold mb-2">Judicial Disparities</div>
                            <div className="text-sm opacity-90">Analysis of case outcomes reveals statistically significant disparities in landlord-tenant decisions among certain judges.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KeyFindings;
