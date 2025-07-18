import React, { useState, useMemo } from 'react';
import { CountyData } from '../../types';

type SortKey = keyof CountyData | 'name' | 'filings' | 'rate' | 'risk';

const getRiskColorClasses = (risk: string) => {
    switch(risk) {
        case 'Critical': return 'bg-red-100 text-red-800';
        case 'High': return 'bg-orange-100 text-orange-800';
        case 'Moderate': return 'bg-yellow-100 text-yellow-800';
        case 'Low': return 'bg-green-100 text-green-800';
        default: return 'bg-gray-100 text-gray-800';
    }
}

const riskSortOrder: { [key: string]: number } = {
    'Critical': 4,
    'High': 3,
    'Moderate': 2,
    'Low': 1,
};

const SortIcon: React.FC<{ sortKey: SortKey, currentSortKey: SortKey, direction: 'asc' | 'desc' }> = ({ sortKey, currentSortKey, direction }) => {
    if (sortKey !== currentSortKey) {
        return <i className="fas fa-sort ml-2 text-gray-400"></i>;
    }
    return direction === 'asc' ? <i className="fas fa-sort-up ml-2"></i> : <i className="fas fa-sort-down ml-2"></i>;
}

const DataTable: React.FC<{ data: CountyData[] }> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState<SortKey>('filings');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

    const handleSort = (key: SortKey) => {
        if (key === sortKey) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortDirection('desc');
        }
    };

    const sortedData = useMemo(() => {
        const filteredData = data.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return [...filteredData].sort((a, b) => {
            let valA: string | number, valB: string | number;

            if (sortKey === 'risk') {
                valA = riskSortOrder[a.risk] || 0;
                valB = riskSortOrder[b.risk] || 0;
            } else {
                valA = a[sortKey as keyof CountyData];
                valB = b[sortKey as keyof CountyData];
            }

            if (valA < valB) return sortDirection === 'asc' ? -1 : 1;
            if (valA > valB) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, searchTerm, sortKey, sortDirection]);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
            <h3 className="text-xl font-semibold mb-4">County-Level Breakdown</h3>
            <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <input
                    type="text"
                    id="table-search"
                    className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-crisis-red"
                    placeholder="Search Counties..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                 <div>
                    <button className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition" onClick={() => alert('Exporting CSV (simulated)...')}>
                        <i className="fas fa-file-csv mr-2"></i>Export CSV
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-gray-100">
                            {(['name', 'filings', 'rate', 'risk'] as SortKey[]).map(key => (
                                <th key={key} className="px-4 py-3 text-left cursor-pointer hover:bg-gray-200 font-bold" onClick={() => handleSort(key)}>
                                    <span className="capitalize">{key === 'name' ? 'County' : (key === 'rate' ? 'Filing Rate (%)' : key)}</span>
                                    <SortIcon sortKey={key} currentSortKey={sortKey} direction={sortDirection} />
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {sortedData.map((county) => (
                            <tr key={county.name} className="hover:bg-gray-50">
                                <td className="py-3 px-4 font-medium text-gray-900">{county.name}</td>
                                <td className="py-3 px-4 text-gray-600">{county.filings.toLocaleString()}</td>
                                <td className="py-3 px-4 text-gray-600">{county.rate}%</td>
                                <td className="py-3 px-4">
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getRiskColorClasses(county.risk)}`}>
                                        {county.risk}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;