import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ChartBanner = () => {
    const { weekChart } = useSelector((state) => state.app);
    return (
        <div className="flex items-center w-full mt-12 gap-8">
            {weekChart?.map((item) => (
                <Link to={item?.link?.split('.')[0]} key={item?.link} className="flex-1">
                    <img src={item?.cover} alt="cover" className="w-full rounded-md object-cover" />
                </Link>
            ))}
        </div>
    );
};

export default ChartBanner;
