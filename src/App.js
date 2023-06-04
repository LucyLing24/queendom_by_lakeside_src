import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "./App.css";

import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";

function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);


    return (
        <Router basename="/">
            <div className="App" id={load ? "no-scroll" : "scroll"}>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
  );
}

export default App;
