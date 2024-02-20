import handsetLogo from "../../assets/telephone_handset_clipart.png"
import syncLogo from "../../assets/sync_clipart.png"
import "./MainPage.css";

export default function MainPage() {
    return <div className="MainPage">
        <h2 className="MainPage_header">OPP CALLOUT LIST</h2>
        <div className="MainPage_actionSelector">
            <div className="MainPage_pageOutSelector">
                <h2>PAGE OUT</h2>
                <img src={handsetLogo} alt="handset logo"></img>
            </div>
            <div className="MainPage_updateSelector">
                <h2>UPDATE</h2>
                <img src={syncLogo} alt="sync clipart"></img>
            </div>
        </div>
    </div>
}