import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import "./App.css"

export default function App() {
    return <div className="HCOAppMain">
        <TopBar />
        <main className="HCOAppContainer">
            <Outlet />
        </main>
    </div>
}