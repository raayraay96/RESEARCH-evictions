import React, { useState } from 'react';

const ActionCard: React.FC<{ icon: string; title: string; children: React.ReactNode; color: string }> = ({ icon, title, children, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 transition transform hover:-translate-y-1">
        <div className="text-center mb-4">
            <i className={`fas ${icon} text-4xl ${color} mb-2`}></i>
            <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <ul className="space-y-3">
            {children}
        </ul>
    </div>
);

const ActionTab: React.FC = () => {
    const [riskResult, setRiskResult] = useState<string | null>(null);

    const calculateRisk = () => {
        setRiskResult("Based on your inputs, your estimated eviction risk is Moderate. This is higher than the state average for your area. We recommend reviewing your tenant rights and identifying local rental assistance programs.");
    };

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Personal Eviction Risk Calculator</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <input type="text" placeholder="Your ZIP code" className="border border-gray-300 rounded-lg px-4 py-2"/>
                    <select className="border border-gray-300 rounded-lg px-4 py-2">
                        <option value="">Select income level</option>
                        <option value="low">Under $30,000</option>
                        <option value="medium">$30,000 - $60,000</option>
                        <option value="high">Over $60,000</option>
                    </select>
                    <button onClick={calculateRisk} className="bg-crisis-red text-white px-4 py-2 rounded-lg hover:bg-red-700">
                        <i className="fas fa-calculator mr-2"></i>Calculate Risk
                    </button>
                </div>
                {riskResult && (
                    <div className="mt-4 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 rounded-lg p-4">
                        <div className="font-semibold text-orange-800 mb-2">Your Eviction Risk Assessment</div>
                        <div className="text-orange-700">{riskResult}</div>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ActionCard icon="fa-hands-helping" title="Get Immediate Help" color="text-blue-600">
                    <li><a href="#" className="text-blue-600 hover:underline flex items-center"><i className="fas fa-phone mr-2 w-4"></i>Emergency Rental Assistance</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline flex items-center"><i className="fas fa-gavel mr-2 w-4"></i>Free Legal Aid Services</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline flex items-center"><i className="fas fa-shield-alt mr-2 w-4"></i>Tenant Rights Guide</a></li>
                </ActionCard>
                <ActionCard icon="fa-bullhorn" title="Advocate for Change" color="text-green-600">
                    <li><button onClick={() => alert("Opening email template...")} className="text-green-600 hover:underline flex items-center"><i className="fas fa-envelope mr-2 w-4"></i>Contact Representatives</button></li>
                    <li><a href="#" className="text-green-600 hover:underline flex items-center"><i className="fas fa-users mr-2 w-4"></i>Join Advocacy Groups</a></li>
                    <li><button onClick={() => alert("Dashboard URL copied!")} className="text-green-600 hover:underline flex items-center"><i className="fas fa-share mr-2 w-4"></i>Share This Data</button></li>
                </ActionCard>
                <ActionCard icon="fa-chart-bar" title="Use This Data" color="text-purple-600">
                     <li><button onClick={() => alert("Downloading full dataset...")} className="text-purple-600 hover:underline flex items-center"><i className="fas fa-download mr-2 w-4"></i>Download Full Dataset</button></li>
                    <li><a href="#" className="text-purple-600 hover:underline flex items-center"><i className="fas fa-code mr-2 w-4"></i>Access API</a></li>
                    <li><a href="#" className="text-purple-600 hover:underline flex items-center"><i className="fas fa-book mr-2 w-4"></i>Methodology Guide</a></li>
                </ActionCard>
            </div>
        </div>
    );
};

export default ActionTab;
