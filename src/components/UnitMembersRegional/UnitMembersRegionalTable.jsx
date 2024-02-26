import UnitMemberRegionalRow from "./UnitMemberRegionalRow";

export default function UnitMembersRegionalTable(props) {    
    return <table className="UnitMembers_table">
        <thead>
            <tr>
                <th>Region</th>
                <th>Name</th>
                <th>Quals</th>
                <th>Contact</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            {props.regionMembers.map((member, index) => <UnitMemberRegionalRow details={member} key= {index} selectionRef="region"/>)}
            {props.nearbyMembers.map((member, index) => <UnitMemberRegionalRow details={member} key= {index} selectionRef="nearby"/>)}
            {props.otherMembers.map((member, index) => <UnitMemberRegionalRow details={member} key= {index} selectionRef=""/>)}
        </tbody>
    </table>
}