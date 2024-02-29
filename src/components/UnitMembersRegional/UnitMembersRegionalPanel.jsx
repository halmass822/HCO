import { WRCounties } from "../../utils";

export default function UnitMembersRegionalPanel(props) {
    function handleChange(e) {
        props.setSelectedRegionProp(e.target.value);
    };

    function handleSendPageout(e) {
        e.preventDefault()
        props.sendPageoutProp()
    }

    return <div className="UnitMembersRegionalPanel">
        <h2 className="UnitMembersRegionalPanel_header">{props.teamProps} PAGE OUT</h2>
        <select className="UnitMembersRegionalPanel_select" onChange={handleChange} value={props.selectedRegionProp} title="region_select">
            {WRCounties.map((county, index) => {
                return <option key={index} value={county} id={county} >{county}</option>
            })}
        </select>
        <button className="UnitMembersRegionalPanel_button" type="submit" onClick={handleSendPageout}>Page Selected Units</button>
    </div>
}