import { useEffect, useState } from "react";
import UnitMembersRegionalTable from "./UnitMembersRegionalTable";
import { initialK9Data, neighbouringCounties } from "../../utils";
import UnitMembersRegionalPanel from "./UnitMembersRegionalPanel";
import "./UnitMembersRegional.css"

export default function UnitMembersRegional() {
    const [selectedRegion, setSelectedRegion] = useState("6J");
    const [unitMembers, setUnitMembers] = useState(initialK9Data);
    const [regionMembers, setRegionMembers] = useState([]);
    const [nearbyMembers, setNearbyMembers] = useState([]);
    const [otherMembers, setOtherMembers] = useState([]);
    const [unitsSelectedForPageout, setUnitsSelectedForPageout] = useState([]);

    useEffect(() => {
        setRegionMembers(unitMembers.filter((member) => member.region === selectedRegion));
        let nearbyRegions = neighbouringCounties.hasOwnProperty(selectedRegion) ? neighbouringCounties[selectedRegion] : "";
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
        <UnitMembersRegionalPanel selectedRegionProp={selectedRegion} setSelectedRegionProp={setSelectedRegion} />
        <UnitMembersRegionalTable 
            regionMembers={regionMembers} 
            nearbyMembers={nearbyMembers}
            otherMembers={otherMembers}
            pageoutSelectionMethod={setUnitsSelectedForPageout}
            unitsSelectedForPageout={unitsSelectedForPageout}
            selectedRegionProp={selectedRegion}
            />
    </div>
}