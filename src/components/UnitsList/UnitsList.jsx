import { Link, Outlet } from "react-router-dom";
import placeholderImg from "../../assets/img_placeholder.png";
import "./UnitsList.css"

export default function UnitsList() {
    return <div className="UnitsList">
        <h2 className="UnitsList_header">
            PAGE OUT RESOURCES
        </h2>
        <div className="UnitsList_unitSelector">
            <Link to="K9" className="UnitsList_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>K9</h2>
            </Link>
            <Link to="ERT" className="UnitsList_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>ERT</h2>
            </Link>
            <Link to="CIB" className="UnitsList_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>CIB</h2>
            </Link>
            <Link to="CIC" className="UnitsList_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>CIC</h2>
            </Link>
        </div>
    </div>
}