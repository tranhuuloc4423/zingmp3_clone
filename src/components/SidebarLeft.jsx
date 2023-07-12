import React from 'react';
import logo from '../assets/logo.svg';
import { sidebarMenu } from '../ultis/menu';
import { NavLink, useNavigate } from 'react-router-dom';
import path from '../ultis/paths';

const SidebarLeft = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed h-screen bg-main-100 w-[12%]">
            <div
                onClick={() => navigate(path.HOME)}
                className="w-full h-[70px] py-[15px] pr-[25px] pl-7 flex justify-start items-center"
            >
                <img src={logo} alt="logo" className="w-[120px] h-10" />
            </div>
            <div className="flex flex-col">
                {sidebarMenu.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({ isActive }) =>
                            isActive ? 'sidebarLeftActive' : 'sidebarLeftNotActive'
                        }
                    >
                        {item.icon}
                        <span>{item.text}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default SidebarLeft;
