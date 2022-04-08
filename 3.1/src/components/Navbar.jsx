import React from "react";
import { Link, NavLink } from "react-router-dom"



export default function Navbar() {
    return <div className="h-[75px] bg-red-200 flex space-x-4 justify-center items-center text-white">
        <Link to="/">Home</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <NavLink
            style={({ isActive }) =>
                isActive ? {
                    color: "red"
                } : undefined
            }
            to="/contact">Contact</NavLink>

        <NavLink
            style={({ isActive }) =>
                isActive ? {
                    color: "red"
                } : undefined
            }
            to="/team">Team</NavLink>
    </div>;
}