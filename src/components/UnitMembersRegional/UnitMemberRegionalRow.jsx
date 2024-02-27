import { useEffect, useState } from "react";

export default function UnitMemberRegionalRow(props) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(props.selectedMembers.includes(props.details.page_at))
    }, [props.selectedMembers, props.details.page_at, props.selectedRegionProp2])

    function handleCheck(e) {
        e.preventDefault();
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        if(newChecked) {
            props.setSelectedMembers((prev) => [...prev, props.details.page_at]);
        } else {
            props.setSelectedMembers((prev) => prev.filter((x) => x !== props.details.page_at));
        }
    }

    return <tr className={`UnitMemberRegionalRow ${props.selectionRef} ${isChecked}_state`} onClick={handleCheck}>
        <td>{props.details.region}</td>
        <td>{props.details.officer_name}</td>
        <td>{props.details.badge}</td>
        <td>{props.details.skillset.map((x) => `${x} `)}</td>
        <td>{props.details.phone_number}</td>
        <td>{props.details.notes}</td>
        <td>
            <button onChange={handleCheck}>SELECT</button>
        </td>
    </tr>
}