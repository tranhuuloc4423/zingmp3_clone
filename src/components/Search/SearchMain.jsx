import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { searchMenu } from '../../ultis/menu';
import { useSelector } from 'react-redux';
const SearchMain = () => {
    const { searchKeyword } = useSelector((state) => state.music);
    const location = useLocation();
    const locationPrefix = location?.pathname?.split('/').pop();
    const [active, setActive] = useState(locationPrefix);

    useEffect(() => {
        setActive(locationPrefix);
    }, [location?.pathname]);

    return (
        <div className="">
            <header className="flex border-b border-main items-center gap-8 px-[60px] fixed top-[67px] w-full bg-main-200 z-40">
                <span className="text-white text-2xl pr-8 border-r border-main font-bold">
                    Kết Quả Tìm Kiếm
                </span>
                {searchMenu?.map((item, index) => (
                    <NavLink
                        key={index}
                        to={`${item?.path}?q=${searchKeyword?.replace(' ', '+')}`}
                        className={`search-options ${
                            active === item?.path
                                ? 'border-b-2 border-hightlight-100 text-white'
                                : ''
                        }`}
                    >
                        {item?.text}
                    </NavLink>
                ))}
            </header>
            <div className="px-[60px] mt-[150px]">
                <Outlet />
            </div>
        </div>
    );
};

export default SearchMain;
