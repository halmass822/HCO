import { Link } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import "./TopBar.css";

export default function TopBar() {
    return <header className="TopBarHeader">
        <Link to="/">
            <h2>HOME</h2>
        </Link>
        <Link to="unitslist">
            <h2>UNITS</h2>
        </Link>
        <Link to="unitslist/K9">
            <h2>K9</h2>
        </Link>
        <Link to="unitslist/ERT">
            <h2>ERT</h2>
        </Link>
        <Link to="unitslist/CIB">
            <h2>CIB</h2>
        </Link>
        <Link to="unitslist/CIC">
            <h2>CIC</h2>
        </Link>
    </header>
}