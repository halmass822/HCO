import { useParams } from "react-router-dom";
import { useState } from "react";
import UnitMembersRegionalTable from "./UnitMembersRegionalTable";
import { initialK9Data, neighbouringCounties } from "../../utils";

export default function UnitMembersRegional() {
    const [selectedRegion, setSelectedRegion] = useState("6j");
    const [unitMembers, setUnitMembers] = useState(initialK9Data);
    const [regionMembers, setRegionMembers] = useState([]);
    const [nearbyMembers, setNearbyMembers] = useState([]);
    const [otherMembers, setOtherMembers] = useState([]);
    const [unitsSelectedForPageout, setUnitsSelectedForPageout] = useState([]);

    useState(() => {
        setRegionMembers(unitMembers.filter((member) => member.region === selectedRegion));
        const nearbyRegions = neighbouringCounties[selectedRegion];
        setNearbyMembers(
            unitMembers.filter((member) => {
                return nearbyRegions.includes(member.region);
            }))
        setOtherMembers(
            unitMembers.filter((member) => {
                return !nearbyRegions.includes(member.region) && !(selectedRegion === member.region)
            })
        )
    }, [selectedRegion])



    return <div className="UnitMembers">
        <UnitMembersRegionalTable 
            regionMembers={regionMembers} 
            nearbyMembers={nearbyMembers}
            otherMembers={otherMembers}
            pageoutSelectionMethod={setUnitsSelectedForPageout}
            unitsSelectedForPageout={unitsSelectedForPageout}
            />
    </div>
}