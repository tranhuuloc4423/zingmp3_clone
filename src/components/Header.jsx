import React from "react";
import icons from "../ultis/icons";
import { Search } from "./";

const { HiArrowLongRight, HiArrowLongLeft } = icons;

const Header = () => {
    return (
        <div className="h-[70px] py-[10px] mb-8 flex items-center justify-between w-full gap-8">
            <div className="flex items-center flex-1 gap-4">
                <div className="flex items-center gap-6 text-gray-500">
                    <span>
                        <HiArrowLongLeft size={24} />
                    </span>
                    <span>
                        <HiArrowLongRight size={24} />
                    </span>
                </div>
                <div className="w-full">
                    <Search />
                </div>
            </div>
            <div>dang nhap</div>
        </div>
    );
};

export default Header;
