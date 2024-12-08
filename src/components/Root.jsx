import React from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import './Root.scss';

function Root() {
    return (
        <div className="Root">
            <Navbar className="header" />
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    )
};

export default Root;