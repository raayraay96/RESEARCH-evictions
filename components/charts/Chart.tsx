import React, { useEffect, useRef } from 'react';

declare const Chart: any; // Using Chart.js from global scope

interface ChartProps {
    type: 'line' | 'bar' | 'doughnut' | 'pie' | 'scatter' | 'horizontalBar';
    data: any;
    options: any;
}

const ChartComponent: React.FC<ChartProps> = ({ type, data, options }) => {
    const chartContainer = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<any>(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        if (chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');
            if (ctx) {
                chartInstance.current = new Chart(ctx, {
                    type: type === 'horizontalBar' ? 'bar' : type, // horizontalBar is just bar with indexAxis: 'y'
                    data: data,
                    options: {
                        ...options,
                        indexAxis: type === 'horizontalBar' ? 'y' : 'x',
                    },
                });
            }
        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [type, data, options]);

    return (
        <div className="chart-container">
            <canvas ref={chartContainer} />
        </div>
    );
};

export default ChartComponent;
