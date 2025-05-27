import { createSlice } from '@reduxjs/toolkit'

import toast from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")?
    JSON.parse(localStorage.getItem("pastes")):
    []
}

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    AddToPaste: (state,action) => {
      const pasteContent = action.payload;

      state.pastes.push(pasteContent);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast('Added Successfully');
    },      
    updateToPaste: (state,action) => {
        const paste=action.payload;
        const index=state.pastes.findIndex((item)=>item.PasteId===paste.PasteId);
        if(index!==-1){
          state.pastes[index]=paste;
          localStorage.setItem("pastes", JSON.stringify(state.pastes));
          toast('Updated Successfully');
        }
    },
    ResetPaste: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
      toast('All pastes have been reset');
    },
    RemoveFromPaste:(state,action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item)=>item.PasteId===paste.PasteId);
      if(index!==-1){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast('Paste removed successfully');
      }
  },
}})

// Action creators are generated for each case reducer function
export const { AddToPaste, updateToPaste, ResetPaste,RemoveFromPaste } = PasteSlice.actions

export default PasteSlice.reducer