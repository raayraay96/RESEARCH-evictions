import React from 'react';

const AppFooter: React.FC = () => {
    return (
        <footer className="bg-secondary text-white py-12 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="font-bold text-lg mb-4">Housing Justice Research Collaborative</h4>
                        <p className="text-gray-300 text-sm">
                            An independent research initiative focused on housing policy and judicial accountability in Indiana.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Primary Data Sources</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a href="#" className="hover:underline">Indiana Courts Online</a></li>
                            <li><a href="#" className="hover:underline">U.S. Census Bureau ACS</a></li>
                            <li><a href="#" className="hover:underline">HUD Fair Market Rent Data</a></li>
                            <li><a href="#" className="hover:underline">County Assessor Records</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact & Information</h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                            <li><a href="mailto:research@housingjustice-in.org" className="hover:underline">research@housingjustice-in.org</a></li>
                            <li><a href="#" className="hover:underline">Methodology Appendix</a></li>
                            <li><a href="#" className="hover:underline">Request Data</a></li>
                            <li><a href="#" className="hover:underline">Report an Issue</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-bold text-lg mb-4">Follow Our Research</h4>
                        <div className="flex space-x-4 mb-4">
                            <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-white text-2xl"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="GitHub" className="text-gray-300 hover:text-white text-2xl"><i className="fab fa-github"></i></a>
                        </div>
                         <p className="text-xs text-gray-400">
                           1350 Pennsylvania Street, Indianapolis, IN 46202
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; 2025 Housing Justice Research Collaborative</p>
                    <p className="mt-1">This analysis is based on public records obtained under the Indiana Access to Public Records Act. It is intended for informational and advocacy purposes only.</p>
                </div>
            </div>
        </footer>
    );
};

export default AppFooter;