import React from 'react';

const CrisisAlertBanner: React.FC = () => {
    return (
        <div className="bg-red-50 border-l-4 border-accent p-3 text-center sticky top-0 z-50">
            <div className="flex items-center justify-center space-x-2">
                <i className="fas fa-exclamation-triangle text-accent"></i>
                <span className="font-bold text-accent">Key Finding:</span>
                <span className="text-secondary">Analysis indicates a 23% increase in eviction filings this quarter compared to the historical average.</span>
            </div>
        </div>
    );
};

export default CrisisAlertBanner;