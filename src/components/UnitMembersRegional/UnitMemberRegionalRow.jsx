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

    return <tr className={`UnitMemberRegionalRow UnitMemberRegionalRow_${props.selectionRef} UnitMemberRegionalRow_${isChecked}_state`}>
        <td>{props.details.region}</td>
        <td>{props.details.officer_name}</td>
        <td>{props.details.badge}</td>
        <td>{props.details.skillset.map((x) => `${x} `)}</td>
        <td>{props.details.phone_number}</td>
        <td className={"UnitMemberRegionalRow_td_notes"}>
            <p>{props.details.notes}</p>
            <button onClick={handleCheck} type="submit" className="UnitMemberRegionalRow_button">SELECT</button>
            </td>
    </tr>
}