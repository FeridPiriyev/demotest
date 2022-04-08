import React from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";


export default function Arrow() {
    const navigate = useNavigate()
    return <div>
        <button onClick={() => {
            navigate({
                pathname: "/"
            })
        }}>Kec</button>

    </div>;
}
