import React, { useState } from 'react'

export default function EditK9Unit(props) {
  
  const [badge, setBadge] = useState(props.unitInfo.badge);
  const [officerName, setOfficerName] = useState(props.unitInfo.officer_name);
  const [k9Name, setK9Name] = useState(props.unitInfo.k9_name);
  const [regionLong, setRegionLong] = useState(props.unitInfo.regionLong);
  const [skillset, setSkillset] = useState(props.unitInfo.skillset);
  const [phoneNumber, setPhoneNumber] = useState(props.unitInfo.phone_number);
  const [pageAt, setPageAt] = useState(props.unitInfo.page_at);
  const [notes, setNotes] = useState(props.unitInfo.notes);

  function handleSubmit(e) {
    e.preventDefault();
    const region = regionLong.slice(0,2);
  }

  return (
      <form className="EditUnit_form">
        <label>Badge: 
          <input type="text" value={badge} onChange={(e) => setBadge(e.target.value)} />
        </label>
        <label>Officer Name: 
          <input type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} />
        </label>
        <label>K9 Name: 
          <input type="text" value={k9Name} onChange={(e) => setK9Name(e.target.value)} />
        </label>
        <label>Skillset: 
          {/* TODO - implement skillset array selection */}
        </label>
        <label>Phone Number: 
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>
        <label>Email for paging:
          <input type="text" value={pageAt} onChange={(e) => setPageAt(e.target.value)} />
        </label>
        <label>Notes: 
          <textarea type="text" value={notes} rows="4" onChange={(e) => setNotes(e.target.value)} />
        </label>
      </form>
  )
}
