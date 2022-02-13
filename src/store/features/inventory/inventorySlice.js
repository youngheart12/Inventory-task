import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageState,
  updateLocalStorage,
} from "../../../utility/utils";

const inventorySlice = createSlice({
  name: "inventory",
  initialState: {
    inventoryList: [],
  },
  reducers: {
    initializeInventory: (state) => {
      state.inventoryList = getLocalStorageState("inventoryList");
    },
    addItemToInventory: (state, action) => {
      const inventoryListImprint = state.inventoryList.slice();
      inventoryListImprint.push(action.payload);
      state.inventoryList = inventoryListImprint;
      updateLocalStorage("inventoryList", state.inventoryList);
    },
    deleteItemFromInventory: (state, action) => {
      const { id } = action.payload;
      const inventoryListImprint = state.inventoryList.slice();
      const indexOfItemToBeDeleted = inventoryListImprint.findIndex(
        (data) => data.id === id
      );
      if (indexOfItemToBeDeleted >= 0) {
        inventoryListImprint.splice(indexOfItemToBeDeleted, 1);
      }
      state.inventoryList = inventoryListImprint;
      updateLocalStorage("inventoryList", state.inventoryList);
    },
    updateItemInInventory: (state, action) => {
      const { id } = action.payload;
      const inventoryListImprint = state.inventoryList.slice();
      const indexOfItemToBeUpdated = inventoryListImprint.findIndex(
        (data) => data.id === id
      );
      if (indexOfItemToBeUpdated >= 0) {
        inventoryListImprint[indexOfItemToBeUpdated] = action.payload;
      }
      state.inventoryList = inventoryListImprint;
      updateLocalStorage("inventoryList", state.inventoryList);
    },
  },
});

export const {
  addItemToInventory,
  deleteItemFromInventory,
  initializeInventory,
  updateItemInInventory,
} = inventorySlice.actions;

export default inventorySlice.reducer;
