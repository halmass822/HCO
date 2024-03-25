import { Link } from "react-router-dom";
import placeholderImg from "../../assets/img_placeholder 125.png";
import ERTLogo from "../../assets/ert logo 125.png";
import K9Logo from "../../assets/k9 logo 125.png";
import CIBLogo from "../../assets/cib logo 125.png";
import CICLogo from "../../assets/cic logo 125.png";
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
            <Link to="/" className="UnitsList_UnitSelectionButton disabledLink">
                <img alt="ERT logo" src={ERTLogo}></img>
                <h2>ERT</h2>
            </Link>
            <Link to="/" className="UnitsList_UnitSelectionButton disabledLink">
                <img alt="CIB logo" src={CIBLogo}></img>
                <h2>CIB</h2>
            </Link>
            <Link to="/" className="UnitsList_UnitSelectionButton disabledLink">
                <img alt="CIC logo" src={CICLogo}></img>
                <h2>CIC</h2>
            </Link>
        </div>
    </div>
}