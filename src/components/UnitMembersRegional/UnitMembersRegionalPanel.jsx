import { WRCounties } from "../../utils";

export default function UnitMembersRegionalPanel(props) {
    function handleChange(e) {
        e.preventDefault();
        props.setSelectedRegionProp(e.target.value)
    };

    return <div className="UnitMembersRegionalPanel">
        <h2>K9 PAGE OUT</h2>
        <select className="UnitMembersRegionalPanel_select" onChange={handleChange} value={props.selectedRegionProp}>
            {WRCounties.map((county, index) => {
                return <option key={index} value={county.slice(0,2)} id={county} >{county}</option>
            })}
        </select>
    </div>
}