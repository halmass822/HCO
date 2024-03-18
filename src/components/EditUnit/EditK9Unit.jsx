import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { formDataSelector } from '../../store';

export default function EditK9Unit() {
  
  const unitInfo = useSelector(formDataSelector)

  const [badge, setBadge] = useState(unitInfo.badge);
  const [officerName, setOfficerName] = useState(unitInfo.officer_name);
  const [k9Name, setK9Name] = useState(unitInfo.k9_name);
  const [regionLong, setRegionLong] = useState(unitInfo.regionLong);
  const [skillset, setSkillset] = useState(unitInfo.skillset);
  const [phoneNumber, setPhoneNumber] = useState(unitInfo.phone_number);
  const [pageAt, setPageAt] = useState(unitInfo.page_at);
  const [notes, setNotes] = useState(unitInfo.notes);

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
          <input type="text" value={skillset} onChange={(e) => setSkillset(e.target.value)} />
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
