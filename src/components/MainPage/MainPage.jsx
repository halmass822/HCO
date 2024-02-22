import handsetLogo from "../../assets/telephone_handset_clipart.png"
import syncLogo from "../../assets/sync_clipart.png"
import "./MainPage.css";
import { Link } from "react-router-dom";

export default function MainPage() {
    return <div className="MainPage">
        <h2 className="MainPage_header">OPP CALLOUT LIST</h2>
        <div className="MainPage_actionSelector">
            <Link to="pageout" className="MainPage_pageOutSelector">
                    <h2>PAGE OUT</h2>
                    <img src={handsetLogo} alt="handset logo"></img>
            </Link>
            <Link to="update" className="MainPage_updateSelector">
                    <h2>UPDATE</h2>
                    <img src={syncLogo} alt="sync clipart"></img>
            </Link>
        </div>
    </div>
}