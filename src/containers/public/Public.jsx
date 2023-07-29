import React from 'react';
import { Outlet } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player, Header } from '../../components/';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';

const Public = () => {
    const { closeSidebar } = useSelector((state) => state.app);
    return (
        <div className="flex flex-col h-screen bg-main-200">
            <div className="w-full flex flex-1">
                <SidebarLeft />
                <div className="flex-1 flex flex-col bg-main-200">
                    <Header />
                    <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
                        <Outlet />
                    </Scrollbars>
                </div>
                {!closeSidebar && <SidebarRight />}
            </div>
            <Player />
        </div>
    );
};

export default Public;
