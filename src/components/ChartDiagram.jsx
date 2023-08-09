import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import _ from 'lodash';

const ChartDiagram = ({ width = '100%', height = '' }) => {
    const [data, setData] = useState(null);
    const { chart } = useSelector((state) => state.app);

    const options = {
        reponsive: true,
        pointRadius: 0,
        aspectRatio: 4,
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: { display: false },
                grid: { color: 'rgba(255,255,255, 0.2)', drawTicks: false },
                min: chart?.minScore,
                max: chart?.maxScore,
                border: { dash: [3, 4] },
            },
            x: {
                ticks: { color: 'white' },
                grid: { color: 'transparent' },
            },
        },
        plugins: {
            legend: false,
            tooltip: {
                enabled: false,
            },
        },
        hover: {
            mode: 'dataset',
            intersect: false,
        },
    };

    useEffect(() => {
        const labels = chart?.times
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => `${item.hour}:00`);
        const datasets = [];
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]
                        ?.filter((item) => +item.hour % 2 === 0)
                        ?.map((item) => item.counter),
                    borderColor: i === 0 ? '#4A90E2' : i === 1 ? '#27BD9C' : '#E35050',
                    tension: 0.2,
                    borderWidth: 4,
                    pointBackgroundColor: i === 0 ? '#4A90E2' : i === 1 ? '#27BD9C' : '#E35050',
                    pointHoverRadius: 4,
                    pointBorderColor: 'white',
                    pointHoverBorderWidth: 4,
                });
            }
            setData({ labels, datasets });
        }
    }, [chart]);
    return (
        <div className={`w-[${width}] h-[${height}] relative`}>
            {data && <Line data={data} options={options} />}
        </div>
    );
};

export default ChartDiagram;
