import React, { useEffect, useRef, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { SidebarLeft, SidebarRight, Player, Header } from '../../components/';
import { useDispatch, useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars-2';
import * as actions from '../../redux/store/actions';

const Public = () => {
    const { closeSidebar } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const { singer } = useParams();
    // const contentRef = useRef();

    // useEffect(() => {
    //     const handleScroll = () => {
    //         console.log(1);
    //     };
    //     console.log(contentRef.current.offsetTop);
    //     contentRef.current.addEventListener('scroll', handleScroll);

    //     return () => contentRef.current.removeEventListener('scroll', handleScroll);
    // }, [contentRef.current.clientTop]);

    return (
        <div className="flex flex-col h-screen bg-main-200">
            <div className="w-full flex flex-1">
                <SidebarLeft />
                <div className="flex-1 flex flex-col bg-main-200">
                    <Header />
                    <Scrollbars style={{ width: '100%', height: '100%' }} autoHide>
                        <div className="mt-[100px] px-[60px]">
                            <Outlet />
                        </div>
                    </Scrollbars>
                </div>
                {!closeSidebar && <SidebarRight />}
            </div>
            <div className="h-[90px]"></div>
            <Player />
        </div>
    );
};

export default Public;
