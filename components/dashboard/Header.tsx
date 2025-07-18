import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-primary text-white shadow-lg">
            <div className="container mx-auto px-4 py-5">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold font-serif">Indiana Eviction Court Analysis</h1>
                        <p className="text-lg opacity-90">A Project by the Housing Justice Research Collaborative</p>
                    </div>
                    <div className="text-right text-sm hidden sm:block">
                        <div className="font-semibold">Last Updated: July 14, 2025</div>
                        <div className="text-gray-300">Data analysis ongoing</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;