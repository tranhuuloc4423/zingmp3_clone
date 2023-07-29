import React from 'react';
import icons from '../ultis/icons';
import { Search } from './';

const { HiArrowLongRight, HiArrowLongLeft } = icons;

const Header = () => {
    return (
        <div className="h-[70px] py-[10px] flex items-center justify-between w-full gap-8 bg-[#170f23cc] px-[59px]">
            <div className="flex items-center flex-1 gap-4">
                <div className="flex items-center gap-6 text-gray-500">
                    <HiArrowLongLeft size={24} />
                    <HiArrowLongRight size={24} />
                </div>
                <div className="w-[50%]">
                    <Search />
                </div>
            </div>
            <div>dang nhap</div>
        </div>
    );
};

export default Header;
