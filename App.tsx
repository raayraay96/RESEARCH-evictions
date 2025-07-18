

import React, { useState } from 'react';
import ResearchAssistant from './components/ai/AIAnalyst';
import Header from './components/dashboard/Header';
import CrisisAlertBanner from './components/dashboard/CrisisAlertBanner';
import Stats from './components/dashboard/Stats';
import KeyFindings from './components/dashboard/AIInsights';
import AppFooter from './components/dashboard/AIFooter';
import OverviewTab from './components/dashboard/tabs/OverviewTab';
import DemographicsTab from './components/dashboard/tabs/DemographicsTab';
import GeographyTab from './components/dashboard/tabs/GeographyTab';
import LegalTab from './components/dashboard/tabs/LegalTab';
import ActionTab from './components/dashboard/tabs/ActionTab';
import JudicialTab from './components/dashboard/tabs/JudicialTab';


type ActiveTab = 'overview' | 'demographics' | 'geography' | 'legal' | 'judicial' | 'action';

const TABS: { id: ActiveTab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Dashboard Overview', icon: 'fa-chart-line' },
    { id: 'demographics', label: 'Demographic Analysis', icon: 'fa-users' },
    { id: 'geography', label: 'Geographic Analysis', icon: 'fa-map-marked-alt' },
    { id: 'legal', label: 'Legal System', icon: 'fa-gavel' },
    { id: 'judicial', label: 'Judicial Accountability', icon: 'fa-balance-scale' },
    { id: 'action', label: 'Policy & Action', icon: 'fa-bullhorn' },
];

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ActiveTab>('overview');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewTab />;
            case 'demographics': return <DemographicsTab />;
            case 'geography': return <GeographyTab />;
            case 'legal': return <LegalTab />;
            case 'judicial': return <JudicialTab />;
            case 'action': return <ActionTab />;
            default: return null;
        }
    };
    
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <CrisisAlertBanner />
            <Header />

            <div className="flex-grow">
                <Stats />
                <KeyFindings />
                
                <nav className="bg-white shadow-md sticky top-0 z-40">
                    <div className="container mx-auto px-4">
                        <div className="flex overflow-x-auto" aria-label="Tabs">
                            {TABS.map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-shrink-0 flex items-center px-3 sm:px-4 py-3 font-semibold whitespace-nowrap transition-colors duration-200 border-b-4 ${
                                        activeTab === tab.id
                                            ? 'border-accent text-accent'
                                            : 'border-transparent text-text-muted hover:text-secondary hover:border-gray-300'
                                    }`}
                                >
                                    <i className={`fas ${tab.icon} mr-2 hidden md:inline-block`}></i>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </nav>

                <main className="container mx-auto px-4 py-8">
                    <div className="tab-content active">
                        {renderTabContent()}
                    </div>
                </main>
            </div>
            
            <AppFooter />
            <ResearchAssistant />
        </div>
    );
};

export default App;