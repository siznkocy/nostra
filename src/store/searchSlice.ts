import { Product } from "@/types";
import {createSlice } from "@reduxjs/toolkit"
import type {PayloadAction} from "@reduxjs/toolkit"

export interface SearchState {
    search: string;
    startupProduct: Product[]
}

const initialState: SearchState = {
    search: "",
    startupProduct: []
}
const searchSlice = createSlice({
    name: "search",
    initialState, 
    reducers: {
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload; 
        },
        setStartupProduct: (state, action: PayloadAction<Product[]> ) => {
            state.startupProduct = action.payload
        }
    }
})


export const {setSearch, setStartupProduct} = searchSlice.actions;
export default searchSlice.reducer;