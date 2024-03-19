import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
    return <header className="TopBarHeader">
        <Link to="/">
            <h2>HOME</h2>
        </Link>
        <Link to="K9">
            <h2>K9</h2>
        </Link>
        <Link to="/">
            <h2>ERT</h2>
        </Link>
        <Link to="/">
            <h2>CIB</h2>
        </Link>
        <Link to="/">
            <h2>CIC</h2>
        </Link>
    </header>
}