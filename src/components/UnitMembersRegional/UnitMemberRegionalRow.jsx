import { useEffect, useState } from "react";

export default function UnitMemberRegionalRow(props) {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if(props.selectedMembers.find((x) => x === props.details.page_at)) {
            setIsChecked(true);
        } else {
            setIsChecked(false);
        }
    }, [props.selectedMembers, isChecked])

    function handleCheck(e) {
        e.preventDefault();
        if(!isChecked) {
            props.setSelectedMembers((prev) => [...prev, props.details.page_at]);
        } else {
            props.setSelectedMembers((prev) => prev.filter((x) => x !== props.details.page_at));
        }
    }

    return <tr className={`UnitMemberRegionalRow ${props.selectionRef}`}>
        <td>{props.details.region}</td>
        <td>{props.details.officer_name}</td>
        <td>{props.details.badge}</td>
        <td>{props.details.skillset.map((x) => `${x} `)}</td>
        <td>{props.details.phone_number}</td>
        <td>{props.details.notes}</td>
        <td>
            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        </td>
    </tr>
}