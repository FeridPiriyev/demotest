import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Team from "./components/Team";

function App (){
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <div className="p-3">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/team" element={<Team />} />
                        </Routes>
                    </div>
                </div>

            </BrowserRouter>
        </>
    );
}

export default App;    