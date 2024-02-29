import UnitMemberRegionalRow from "./UnitMemberRegionalRow";

export default function UnitMembersRegionalTable(props) {
    return <table className="UnitMembers_table">
        <thead>
            <tr className="UnitMembersRegionalTable_tr">
                <th className="UnitMembersRegionalTable_header_Region">Region</th>
                <th className="UnitMembersRegionalTable_header_Name">Name</th>
                <th className="UnitMembersRegionalTable_header_Badge">Badge</th>
                <th className="UnitMembersRegionalTable_header_Skills">Skills</th>
                <th className="UnitMembersRegionalTable_header_Contact">Contact</th>
                <th className="UnitMembersRegionalTable_header_Notes" colspan="2">Notes</th>
            </tr>
        </thead>
        <tbody>
            {props.regionMembers.map((member, index) => <UnitMemberRegionalRow details={member} key= {index} selectionRef="region" selectedMembers={props.unitsSelectedForPageout} setSelectedMembers={props.pageoutSelectionMethod} selectedRegionProp2={props.selectedRegionProp}/>)}
            {props.nearbyMembers.map((member, index) => <UnitMemberRegionalRow details={member} key= {index} selectionRef="nearby" selectedMembers={props.unitsSelectedForPageout} setSelectedMembers={props.pageoutSelectionMethod} selectedRegionProp2={props.selectedRegionProp}/>)}
            {props.otherMembers.map((member, index) => <UnitMemberRegionalRow details={member} key= {index} selectionRef="" selectedMembers={props.unitsSelectedForPageout} setSelectedMembers={props.pageoutSelectionMethod} selectedRegionProp2={props.selectedRegionProp}/>)}
        </tbody>
    </table>
}