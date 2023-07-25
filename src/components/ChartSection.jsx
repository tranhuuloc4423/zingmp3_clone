import { useState, useEffect, useRef, memo } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { SongInfo } from './';
import icons from '../ultis/icons';
import path from '../ultis/paths';

const { AiFillPlayCircle } = icons;

const ChartSection = () => {
    const [data, setData] = useState(null);
    const { chart, rank } = useSelector((state) => state.app);

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
            ?.filter((item) => +item.hour % 2 !== 0)
            ?.map((item) => `${item.hour}:00`);
        const datasets = [];
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]
                        ?.filter((item) => +item.hour % 2 !== 0)
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
        <div className="p-5 mt-12 bg-[#4D1F6D] rounded-md h-[400px]">
            <Link to={path.ZING__CHART} className="flex items-center gap-3 mb-4">
                <div className="zingchart inline-block text-3xl font-bold hover:brightness-125">
                    #zingchart
                </div>
                <AiFillPlayCircle size={26} color="white" className="hover:opacity-75" />
            </Link>
            <div className="flex w-full gap-4 flex-auto">
                <div className="w-[40%] h-full flex flex-col gap-3 items-center">
                    {rank
                        ?.filter((item, index) => index < 3)
                        ?.map((song, index) => {
                            const percent = Math.round((song?.score * 100) / chart?.totalScore);
                            const idx = index + 1;
                            return (
                                <div className="flex items-center w-full bg-[#4d2967] px-[10px] rounded-md hover:bg-[#755989] cursor-pointer">
                                    <div className={`text-shadow-no-${idx}`}>{idx}</div>
                                    <SongInfo
                                        key={song?.encodeId}
                                        data={song}
                                        styles={'flex flex-auto gap-[10px] items-center'}
                                    />
                                    <div className="text-base text-white font-bold">{`${percent}%`}</div>
                                </div>
                            );
                        })}
                    <Link
                        to={path.ZING__CHART}
                        className="py-1 px-5 text-white border border-white rounded-full hover:bg-hightlight-100"
                    >
                        Xem Thêm
                    </Link>
                </div>
                <div className="w-[60%] relative">
                    {data && <Line data={data} options={options} />}
                </div>
            </div>
        </div>
    );
};

export default memo(ChartSection);
