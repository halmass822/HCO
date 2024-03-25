import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialK9Data } from "./utils";

const units = createSlice({
    name: "unitData",
    initialState: {
        "formData": {},
        "unitDataState": {
            "K9": initialK9Data
        },
        "formModalState": false,
    },
    reducers: {
        updateUnits: (state, action) => {
            state.unitDataState[action.payload.target] = action.payload.data
        },
        updateFormData: (state, action) => {
            state.formData = action.payload
        },
        editUnit: (state, action) => {
            state.unitDataState[action.payload.targetUnit][action.payload.targetIndex] = action.payload.info;
        },
        setFormModalState: (state, action) => {
            state.formModalState = action.payload
        }
    }
});

export const unitSelector = (state) => state.unitData.unitDataState;
export const formDataSelector = (state) => state.unitData.formData;
export const formModalStateSelector = (state) => state.unitData.formModalState;

export const { updateUnits, updateFormData, editUnit, setFormModalState } = units.actions;

export default configureStore({
    reducer: {
        "unitData": units.reducer
    }
})