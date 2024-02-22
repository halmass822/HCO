import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";

export default function App() {
    return <div className="HCOAppMain">
        <TopBar />
        <main>
            <Outlet />
        </main>
    </div>
}