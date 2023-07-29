import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import paths from '../../ultis/paths';
const SearchMain = () => {
    const location = useLocation();
    const locationPrefix = location?.pathname?.split('/').pop();
    const [active, setActive] = useState(locationPrefix);
    const optionName = ['Tất cả', 'Bài hát'];
    const pathsName = [paths.ALL, paths.SONG];

    useEffect(() => {
        setActive(locationPrefix);
    }, [location?.pathname]);

    return (
        <div className="">
            <header className="flex border-b border-main items-center gap-8 px-[59px]">
                <span className="text-white text-2xl pr-8 border-r border-main font-bold">
                    Kết Quả Tìm Kiếm
                </span>
                {optionName.map((item, index) => (
                    <Link
                        key={item}
                        to={pathsName[index]}
                        className={`search-options ${
                            active === pathsName[index]
                                ? 'border-b-2 border-hightlight-100 text-white'
                                : ''
                        }`}
                    >
                        {item}
                    </Link>
                ))}
                {/* <Link to={paths.}>playlist/album</Link>
                <Link to={paths.ALL}>nghệ sĩ</Link> */}
            </header>
            <Outlet />
        </div>
    );
};

export default SearchMain;
