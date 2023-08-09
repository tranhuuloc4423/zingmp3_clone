import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { MediaItem } from '../../components';
import { useSelector } from 'react-redux';

const WeekRank = () => {
    const { id } = useParams();
    const [active, setActive] = useState(id);
    const { charthome } = useSelector((state) => state.app);
    const getWeekChart = () => {
        const weekChart = [];
        let weekRank = charthome?.weekChart;
        for (const key in weekRank) {
            weekChart.push({ key, data: weekRank[key] });
        }
        return weekChart;
    };
    const weekChart = getWeekChart();
    const activeWeekChart = weekChart?.find((item) => item?.data?.link?.includes(id))?.data;
    return (
        <div className="text-white">
            <div className="text-4xl font-bold">Bảng Xếp Hạng Tuần</div>
            <div className="flex gap-8 uppercase mt-10 mb-6 text-2xl font-bold">
                {weekChart?.map((item, index) => {
                    let url = item?.data?.link?.split('.')[0];
                    let id = url?.split('/')?.pop();
                    return (
                        <NavLink
                            to={url}
                            className={`${
                                active === id && 'border-b-[3px] border-hightlight-100'
                            } pb-3`}
                            onClick={() => setActive(id)}
                        >
                            {item?.key === 'vn'
                                ? 'Việt Nam'
                                : item?.key === 'us'
                                ? 'US-UK'
                                : 'K-POP'}
                        </NavLink>
                    );
                })}
            </div>
            {activeWeekChart?.items?.map((item, index) => (
                <MediaItem
                    key={item?.encodeId}
                    data={item}
                    restInfo={{ duration: true, albumTitle: true }}
                    prefixInfo={
                        <>
                            <div className={`text-shadow w-10`}>{index + 1}</div>
                            <div className="h-[2px] w-4 bg-white mr-4"></div>
                        </>
                    }
                />
            ))}
        </div>
    );
};

export default WeekRank;
