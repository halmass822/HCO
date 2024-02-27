import { WRCounties } from "../../utils";

export default function UnitMembersRegionalPanel(props) {
    function handleChange(e) {
        props.setSelectedRegionProp(e.target.value);
    };

    return <div className="UnitMembersRegionalPanel">
        <h2 className="UnitMembersRegionalPanel_header">K9 PAGE OUT</h2>
        <select className="UnitMembersRegionalPanel_select" onChange={handleChange} value={props.selectedRegionProp} title="region_select">
            {WRCounties.map((county, index) => {
                return <option key={index} value={county.slice(0,2)} id={county} >{county}</option>
            })}
        </select>
        <button className="UnitMembersRegionalPanel_button">Page Selected Units</button>
    </div>
}