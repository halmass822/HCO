import { Link } from "react-router-dom";
import placeholderImg from "../../assets/img_placeholder.png";
import ERTLogo from "../../assets/ERTLogo.png"
import K9Logo from "../../assets/K9logo.jpg"
import "./UnitsList.css"

export default function UnitsList() {
    return <div className="UnitsList">
        <h2 className="UnitsList_header">
            PAGE OUT RESOURCES
        </h2>
        <div className="UnitsList_unitSelector">
            <Link to="K9" className="UnitsList_UnitSelectionButton">
                <img alt="K9 logo" src={K9Logo}></img>
                <h2>K9</h2>
            </Link>
            <Link to="ERT" className="UnitsList_UnitSelectionButton">
                <img alt="ERT logo" src={ERTLogo}></img>
                <h2>ERT</h2>
            </Link>
            <Link to="CIB" className="UnitsList_UnitSelectionButton">
                <img alt="CIB logo" src={placeholderImg}></img>
                <h2>CIB</h2>
            </Link>
            <Link to="CIC" className="UnitsList_UnitSelectionButton">
                <img alt="CIC logo" src={placeholderImg}></img>
                <h2>CIC</h2>
            </Link>
        </div>
    </div>
}