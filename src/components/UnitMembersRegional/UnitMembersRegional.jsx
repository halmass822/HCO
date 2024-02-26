import { useParams } from "react-router-dom";
import { useState } from "react";
import UnitMembersRegionalTable from "./UnitMembersRegionalTable";
import { initialK9Data, neighbouringCounties } from "../../utils";
import UnitMembersRegionalPanel from "./UnitMembersRegionalPanel";

export default function UnitMembersRegional() {
    const [selectedRegion, setSelectedRegion] = useState("6J");
    const [unitMembers, setUnitMembers] = useState(initialK9Data);
    const [regionMembers, setRegionMembers] = useState([]);
    const [nearbyMembers, setNearbyMembers] = useState([]);
    const [otherMembers, setOtherMembers] = useState([]);
    const [unitsSelectedForPageout, setUnitsSelectedForPageout] = useState([]);

    useState(() => {
        setRegionMembers(unitMembers.filter((member) => member.region === selectedRegion));
        const nearbyRegions = neighbouringCounties.hasOwnProperty(selectedRegion) ? neighbouringCounties[selectedRegion] : "";
        setNearbyMembers(
            unitMembers.filter((member) => {
                return nearbyRegions.includes(member.region);
            }))
        setOtherMembers(
            unitMembers.filter((member) => {
                return !nearbyRegions.includes(member.region) && !(selectedRegion === member.region)
            })
        )
    }, [selectedRegion, neighbouringCounties])



    return <div className="UnitMembers">
        <UnitMembersRegionalPanel selectedRegionProp={selectedRegion} setSelectedRegionProp={setSelectedRegion} />
        <UnitMembersRegionalTable 
            regionMembers={regionMembers} 
            nearbyMembers={nearbyMembers}
            otherMembers={otherMembers}
            pageoutSelectionMethod={setUnitsSelectedForPageout}
            unitsSelectedForPageout={unitsSelectedForPageout}
            />
    </div>
}