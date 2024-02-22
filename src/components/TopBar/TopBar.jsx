import { Link } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import "./TopBar.css";

export default function TopBar() {
    return <div>

    <header className="TopBarHeader">
        <Link to="/">
            <h2>HOME</h2>
        </Link>
        <Link to="K9">
            <h2>K9</h2>
        </Link>
        <Link to="ERT">
            <h2>ERT</h2>
        </Link>
        <Link to="CIB">
            <h2>CIB</h2>
        </Link>
        <Link to="CIC">
            <h2>CIC</h2>
        </Link>
    </header>
    <MainPage />
    </div>
}