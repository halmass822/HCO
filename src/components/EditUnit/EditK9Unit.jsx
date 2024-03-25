import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUnit, formDataSelector, setFormModalState, unitSelector, updateFormData } from '../../store';
import "./EditK9Unit.css";
import { WRCounties } from '../../utils';

export default function EditK9Unit() {

  const dispatch = useDispatch();
  
  const unitInfo = useSelector(formDataSelector)
  const unitMembers = useSelector(unitSelector).K9

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
    const targetIndex = unitMembers.findIndex(x => x.badge === badge);
    const updatedUnitInfo = {
      "badge": badge,
        "officer_name": officerName,
        "k9_name": k9Name,
        "regionLong": regionLong,
        "region": regionLong.slice(0,2),
        "skillset": skillset,
        "phone_number": phoneNumber,
        "page_at": pageAt,
        "notes": notes
    }
    dispatch(editUnit({
      targetUnit: "K9",
      targetIndex: targetIndex,
      info: updatedUnitInfo
    }));
    dispatch(updateFormData(updatedUnitInfo));
  }

  function resetChanges(e) {
    e.preventDefault();
    setBadge(unitInfo.badge);
    setOfficerName(unitInfo.officer_name);
    setK9Name(unitInfo.k9_name);
    setRegionLong(unitInfo.regionLong);
    setSkillset(unitInfo.skillset);
    setPhoneNumber(unitInfo.phone_number);
    setPageAt(unitInfo.page_at);
    setNotes(unitInfo.notes);
  }

  function closeForm(e) {
    e.preventDefault();
    dispatch(setFormModalState(false));
    dispatch(updateFormData({}))
  }

  return (
      <form className="EditK9Unit_form" onSubmit={handleSubmit}>
        <div className="EditK9Unit_form_row">
          <label>Badge: </label>
          <input type="text" value={badge} disabled />
        </div>
        <div className="EditK9Unit_form_row">
          <label>Officer Name:</label>
          <input type="text" value={officerName} onChange={(e) => setOfficerName(e.target.value)} />
        </div>
        <div className="EditK9Unit_form_row">
          <label>Region:</label>
          <select value={regionLong} onChange={(e) => setRegionLong(e.target.value)}>
            {WRCounties.map((x, i) => {
              return <option value={x} key={i}>{x}</option>
            })}
          </select>
        </div>
        <div className="EditK9Unit_form_row">
          <label>K9 Name:</label> 
          <input type="text" value={k9Name} onChange={(e) => setK9Name(e.target.value)} />
        </div>
        <div className="EditK9Unit_form_row">
          <label>Skillset:</label> 
          <input type="text" value={skillset} onChange={(e) => setSkillset(e.target.value)} />
        </div>
        <div className="EditK9Unit_form_row">
          <label>Phone Number:</label> 
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className="EditK9Unit_form_row">
          <label>Email for paging:</label>
          <input type="text" value={pageAt} onChange={(e) => setPageAt(e.target.value)} pattern=".+@.+\..+"/>
        </div>
        <div className="EditK9Unit_form_row">
          <label>Notes:</label> 
          <textarea type="text" value={notes} rows="4" onChange={(e) => setNotes(e.target.value)} />
        </div>
        <div className="EditK9Unit_form_row">
          <button onClick={resetChanges} className="EditK9Unit_button_undo">UNDO ALL CHANGES</button>
          <button onClick={closeForm} className="EditK9Unit_button_undo">CLOSE FORM</button>
          <button className="EditK9Unit_button_submit" type="submit">UPDATE UNIT</button>
        </div>
      </form>
  )
}
