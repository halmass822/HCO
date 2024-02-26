export default function UnitMemberRegionalRow(props) {
    return <tr className={`UnitMemberRegionalRow ${props.selectionRef}`}>
        <td>{props.details.region}</td>
        <td>{props.details.officer_name}</td>
        <td>{props.details.skillset}</td>
        <td>{props.details.phone_number}</td>
        <td>{props.details.notes}</td>
    </tr>
}