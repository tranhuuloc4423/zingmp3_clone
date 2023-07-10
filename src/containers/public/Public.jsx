import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarLeft, SidebarRight, Player, Header } from "../../components/";

const Public = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full flex flex-auto">
        <div className="w-[240px] bg-main-100">
          <SidebarLeft />
        </div>
        <div className="flex-1 bg-main-200 px-[59px]">
          <Header />
          <Outlet />
        </div>
        <div className="w-[330px] hidden 1600:block animate-slide-left">
          <SidebarRight />
        </div>
      </div>
      <div className="flex-none">
        <Player />
      </div>
    </div>
  );
};

export default Public;
