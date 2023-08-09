import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/store/actions';
import { Button, ChartDiagram } from '../../components';
import { MediaItem, WeekChartSection } from '../../components';
import backgroundChart from '../../assets/zing-chart.jpg';

const ZingChart = () => {
    const { charthome } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const [rankMore, setRankMore] = useState(false);
    const songs = rankMore
        ? charthome?.RTChart?.items
        : charthome?.RTChart?.items?.filter((item, index) => index < 10);

    const getWeekChart = () => {
        const weekChart = [];
        let weekRank = charthome?.weekChart;
        for (const key in weekRank) {
            weekChart.push({ key, data: weekRank[key] });
        }
        return weekChart;
    };
    useEffect(() => {
        dispatch(actions.fetchDataChartHome());
        console.log(charthome);
    }, []);

    return (
        <div>
            <div className="zingchart inline-block text-4xl font-bold mb-8">#zingchart</div>
            <ChartDiagram height="350px" />
            <div className="mt-4">
                {songs?.map((item, index) => {
                    let rank = index + 1;
                    return (
                        <MediaItem
                            key={item?.encodeId}
                            data={item}
                            restInfo={{ duration: true, albumTitle: true }}
                            prefixInfo={
                                <>
                                    <div
                                        className={`${
                                            index < 3 ? `text-shadow-no-${rank}` : 'text-shadow'
                                        } w-10 mr-4`}
                                    >
                                        {rank}
                                    </div>
                                    <div className="h-[2px] w-4 bg-white mr-4"></div>
                                </>
                            }
                        />
                    );
                })}
            </div>
            <div className={`${rankMore && 'hidden'} flex justify-center my-4`}>
                <div onClick={() => setRankMore(true)}>
                    <Button children={'Xem top 100'} styles={`border-white py-2 px-4`} />
                </div>
            </div>
            <WeekChartSection data={getWeekChart()} />
        </div>
    );
};

export default ZingChart;
