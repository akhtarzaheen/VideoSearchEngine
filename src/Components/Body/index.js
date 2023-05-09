import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideNav from "./SideNav";

const Body = () => {
  const toggle = useSelector((store) => store.app.toggle);
  return (
    <div className="grid grid-flow-col m-2">
      {toggle && (
        <div className="col-span-1">
          <SideNav />
        </div>
      )}

      <div className="col-span-11 ml-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
