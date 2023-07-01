import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight } from "../../components/";

const Public = () => {
    return (
        <div className="w-full flex">
            <div className="w-[240px] h-screen bg-[#1b2639]">
                <SidebarLeft />
            </div>
            <div className="flex-1 bg-[#0f1a2e]">
                <Outlet />
            </div>
            <div className="w-[239px]">
                <SidebarRight />
            </div>
        </div>
    );
};

export default Public;
