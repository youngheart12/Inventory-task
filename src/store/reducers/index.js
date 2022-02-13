import { combineReducers } from "@reduxjs/toolkit"
import inventoryReducer from '../features/inventory/inventorySlice';
import loginReducer from '../features/user/userSlice'
export default combineReducers({
   inventory:inventoryReducer,
   user:loginReducer
  })
  