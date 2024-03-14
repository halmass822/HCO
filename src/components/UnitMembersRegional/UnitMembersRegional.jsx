import { useEffect, useState } from "react";
import UnitMembersRegionalTable from "./UnitMembersRegionalTable";
import { initialK9Data, neighbouringCounties, parseCounty } from "../../utils";
import UnitMembersRegionalPanel from "./UnitMembersRegionalPanel";
import "./UnitMembersRegional.css"
import { unitSelector } from "../../store";
import { useSelector } from "react-redux";

export default function UnitMembersRegional(props) {
    const [selectedRegion, setSelectedRegion] = useState("6J Middlesex");
    const unitMembers = useSelector(unitSelector)[props.team]
    const [regionMembers, setRegionMembers] = useState([]);
    const [nearbyMembers, setNearbyMembers] = useState([]);
    const [otherMembers, setOtherMembers] = useState([]);
    const [unitsSelectedForPageout, setUnitsSelectedForPageout] = useState([]);

    useEffect(() => {
        setRegionMembers(unitMembers.filter((member) => member.regionLong === selectedRegion));
        let nearbyRegions = neighbouringCounties.hasOwnProperty(selectedRegion) ? neighbouringCounties[selectedRegion] : "";
        setNearbyMembers(
            unitMembers.filter((member) => {
                return nearbyRegions.includes(member.regionLong);
            }))
        setOtherMembers(
            unitMembers.filter((member) => {
                return !nearbyRegions.includes(member.regionLong) && !(selectedRegion === member.regionLong)
            })
        )
    }, [selectedRegion])

    function sendPageout() {
        if(unitsSelectedForPageout.length === 0) return;
        const targetEmails = unitsSelectedForPageout.join("; ");
        const subject = `${parseCounty(selectedRegion)} ${props.team} Page`;
        const body = `[INCIDENT NUMBER]\n[OPS CHANNEL]\n\n[DETAILS]\n\n[NUMBER REQUIRED]\n\n[LOCATION & ADDRESS]\n\n[NCO DETAILS & CONTACT]\n\n\n\nThis electronic transmission, including any accompanying attachments, contains information that is privileged and confidential and is intended only for the use of the recipient(s) named above. Any distribution, review, dissemination, or copying of the contents of this communication by anyone other than the intended recipient(s) is strictly prohibited `
        window.location.href = 
            "mailto:"   + encodeURIComponent(targetEmails) + 
            "?subject=" + encodeURIComponent(subject) + 
            "&body="    + encodeURIComponent(body);
    }

    return <div className="UnitMembers">
        <UnitMembersRegionalPanel 
            teamProps={props.team}
            selectedRegionProp={selectedRegion} 
            setSelectedRegionProp={setSelectedRegion}
            sendPageoutProp={sendPageout} 
            />
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