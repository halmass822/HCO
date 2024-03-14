import { createSlice, configureStore } from "@reduxjs/toolkit";
import { initialK9Data } from "./utils";

const units = createSlice({
    name: "unitData",
    initialState: {
        "formData": {},
        "unitDataState": {
            "K9": initialK9Data
        }
    },
    reducers: {
        updateUnits: (state, action) => {
            state[action.payload.target] = action.payload
        },
        updateFormData: (state, action) => {
            state.formData = action.payload
        }
    }
});

export const unitSelector = (state) => state.unitData.unitDataState;
export const formDataSelector = (state) => state.unitData.formData;

export const { updateUnits, updateFormData } = createSlice.actions;

export default configureStore({
    reducer: {
        "unitData": unitData
    }
})