import React from "react";
import logo from "../assets/logo.svg";
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";

const SidebarLeft = () => {
    return (
        <div>
            <div className="w-full h-[70px] py-[15px] pr-[25px] pl-7 flex justify-start items-center">
                <img src={logo} alt="logo" className="w-[120px] h-10" />
            </div>
            <div className="flex flex-col">
                {sidebarMenu.map((item) => (
                    <NavLink
                        to={item.path}
                        key={item.path}
                        end={item.end}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebarLeftActive"
                                : "sidebarLeftNotActive"
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
