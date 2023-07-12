import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player, Header } from '../../components/';
import { useSelector } from 'react-redux';

const Public = () => {
    const { closeSidebar } = useSelector((state) => state.app);
    return (
        <div className="flex flex-col h-screen bg-main-200">
            <div className="w-full flex flex-1">
                <SidebarLeft />
                <div className="flex-1 bg-main-200 px-[59px] ml-[240px]">
                    <Header />
                    <Outlet />
                </div>
                {!closeSidebar && <SidebarRight />}
            </div>
            <Player />
        </div>
    );
};

export default Public;
