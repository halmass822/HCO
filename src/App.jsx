import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar/TopBar";
import "./App.css"
import Modal from "./components/Modal/Modal";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { formModalStateSelector } from "./store";

export const FormDataContext = React.createContext();

export default function App() {

    const [editFormData, setEditFormData] = useState("");
    const modalOpenState = useSelector(formModalStateSelector)

    function handleEditUnit(targetUnitData) {
        setEditFormData(targetUnitData);
        setModalOpenState(true);
    }

    function changeUnitInfo(targetUnit, details) {
        
    }

    return <div className="HCOAppMain">
        <TopBar />
        <main className="HCOAppContainer">
            <FormDataContext.Provider value={{handleEditUnit, changeUnitInfo}}>
                <Outlet />
            </FormDataContext.Provider>
        </main>
        <Modal closeModalProp={() => setModalOpenState(false)} openStateProp={modalOpenState} editFormDataProp={editFormData}>
            <h2>Hello world!</h2>
        </Modal>
    </div>
}