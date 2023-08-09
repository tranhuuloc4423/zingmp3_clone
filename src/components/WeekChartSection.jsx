import React from 'react';
import icons from '../ultis/icons';
import { Button, MediaItem } from './';
import backgroundChart from '../assets/zing-chart.jpg';
import { useNavigate } from 'react-router-dom';

const { AiFillPlayCircle } = icons;

const WeekChartSection = ({ data }) => {
    const navigate = useNavigate();
    console.log(data);
    return (
        <div className="absolute w-full h-[570px] mx-[-60px] mt-[60px] overflow-hidden">
            <img
                src={backgroundChart}
                alt="weekchart"
                className="absolute z-10 w-full object-center"
            />
            <div className="absolute inset-0 bg-overlay-700 z-20 px-[60px] text-white">
                <div className=" text-4xl font-bold mt-6 mb-4">Bảng Xếp Hạng Tuần</div>
                <div className="flex gap-8">
                    {data?.map((item, index) => (
                        <div key={item?.key} className="p-4 bg-overlay-600 rounded-3xl flex-1">
                            <span className="flex gap-2 items-center text-2xl font-bold">
                                <span className="py-4 pl-8">
                                    {item?.key === 'vn'
                                        ? 'Việt Nam'
                                        : item?.key === 'korea'
                                        ? 'K-Pop'
                                        : 'US-UK'}
                                </span>
                                <span>
                                    <AiFillPlayCircle />
                                </span>
                            </span>
                            <div>
                                {item?.data?.items
                                    ?.filter((item, index) => index < 5)
                                    ?.map((item, index) => (
                                        <MediaItem
                                            key={item?.encodeId}
                                            data={item}
                                            restInfo={{ duration: true }}
                                            prefixInfo={
                                                <>
                                                    <div className={`text-shadow w-10`}>
                                                        {index + 1}
                                                    </div>
                                                    <div className="h-[2px] w-4 bg-white mr-4"></div>
                                                </>
                                            }
                                        />
                                    ))}
                            </div>
                            <div className="flex justify-center mt-4">
                                <span
                                    onClick={() => {
                                        console.log(item?.data?.link?.split('.')[0]);
                                        navigate(item?.data?.link?.split('.')[0], {
                                            state: { weekChart: data },
                                        });
                                    }}
                                >
                                    <Button
                                        children={'Xem thêm'}
                                        styles={`border-white py-2 px-4`}
                                    />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeekChartSection;
