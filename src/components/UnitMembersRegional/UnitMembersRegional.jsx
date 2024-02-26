import { useParams } from "react-router-dom";
import { useState } from "react";
import UnitMembersRegionalTable from "./UnitMembersRegionalTable";

export default function UnitMembersRegional() {
    const [selectedRegion, setSelectedRegion] = useState("6j_middlesex")
    
    const selectedUnit = useParams().unit

    useState(() => {
        
    }, [selectedRegion])


    return <div className="UnitMembers">
        <UnitMembersRegionalTable selectedUnit={selectedUnit} selectedRegion={selectedRegion}/>
    </div>
}