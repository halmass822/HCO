import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formDataSelector, setFormModalState, updateFormData } from "../../store";

export default function UnitMemberRegionalRow(props) {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsChecked(props.selectedMembers.includes(props.details.page_at))
    }, [props.selectedMembers, props.details.page_at, props.selectedRegionProp2])

    function handleUnitCheck() {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        if(newChecked) {
            props.setSelectedMembers((prev) => [...prev, props.details.page_at]);
        } else {
            props.setSelectedMembers((prev) => prev.filter((x) => x !== props.details.page_at));
        }
    }

    function handleUnitUpdate() {
        dispatch(setFormModalState(true));
        dispatch(updateFormData(props.details));
    }

    return <tr className={`UnitMemberRegionalRow UnitMemberRegionalRow_${props.selectionRef} UnitMemberRegionalRow_${isChecked}_state`}>
        <td className="UnitMemberRegionalRow_td_region">{props.details.region}</td>
        <td className="UnitMemberRegionalRow_td_officer_name">{props.details.officer_name}</td>
        <td className="UnitMemberRegionalRow_td_badge">{props.details.badge}</td>
        <td className="UnitMemberRegionalRow_td_skillset">{props.details.skillset.map((x) => `${x} `)}</td>
        <td className="UnitMemberRegionalRow_td_phone_number">{props.details.phone_number}</td>
        <td className={"UnitMemberRegionalRow_td_notes"}>
            <p>{props.details.notes}</p>
            <div className="UnitMemeberRegionalRow_button_div">
                <button onClick={handleUnitUpdate} className="UnitMemberRegionalRow_button">UPDATE</button> 
                <button onClick={handleUnitCheck} className="UnitMemberRegionalRow_button">SELECT</button>
            </div>
            </td>
    </tr>
}