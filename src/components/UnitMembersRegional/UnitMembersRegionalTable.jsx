import { useEffect, useState } from "react"

export default function UnitMembersRegionalTable(props) {
    const [regionMembers, setRegionMembers] = useState([]);
    const [nearbyMembers, setNearbyMembers] = useState([]);
    
    useEffect(() => {
        setRegionMembers(props.members)
    }, [props.selectedRegion]);

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
            
        </tbody>
    </table>
}