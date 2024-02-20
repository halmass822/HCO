import placeholderImg from "../../assets/img_placeholder.png";
import "./PageOutPage.css"

export default function PageOutPage() {
    return <div className="PageOutPage">
        <h2 className="PageOutPage_header">
            PAGE OUT RESOURCES
        </h2>
        <div className="PageOutPage_unitSelector">
            <div className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>K9</h2>
            </div>
            <div className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>ERT</h2>
            </div>
            <div className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>CIB</h2>
            </div>
            <div className="PageOutPage_UnitSelectionButton">
                <img alt="K9 logo" src={placeholderImg}></img>
                <h2>CIC</h2>
            </div>
        </div>
    </div>
}