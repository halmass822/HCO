import { Link, Outlet } from "react-router-dom";
import placeholderImg from "../../assets/img_placeholder.png";
import "./UnitsList.css"

export default function PageOutPage() {
    return <div className="PageOutPage">
        <h2 className="PageOutPage_header">
            PAGE OUT RESOURCES
        </h2>
        {/* Link to="unitslist" className="MainPage_pageOutSelector" */}
        <div className="PageOutPage_unitSelector">
            <Link to="K9" className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>K9</h2>
            </Link>
            <Link to="ERT" className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>ERT</h2>
            </Link>
            <Link to="CIB" className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>CIB</h2>
            </Link>
            <Link to="CIC" className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>CIC</h2>
            </Link>
        </div>
    </div>
}