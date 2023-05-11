import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideNav from "./SideNav";

const Body = () => {
  const toggle = useSelector((store) => store.app.toggle);
  return (
    // <div className="border border-red-700 grid grid-flow-col m-2">
    <div className="grow flex overflow-hidden">
      {toggle && (
        // <div className="col-span-1">
        <div className="min-w-[240px]">
          <SideNav />
        </div>
      )}

      {/* <div className="col-span-11 ml-8"> */}
      <div className="flex w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
