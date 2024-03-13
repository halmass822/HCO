import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import "./App.css"
import Modal from "./components/Modal/Modal";

export default function App() {
    return <div className="HCOAppMain">
        <TopBar />
        <main className="HCOAppContainer">
            <Outlet />
        </main>
        <Modal isOpen={true}>
            <h2>Hello world!</h2>
        </Modal>
    </div>
}