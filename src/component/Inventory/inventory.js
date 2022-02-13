import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import classes from "./styles.module.css";
import InventoryOverlay from "../Overlay/Inventory/inventory";
import { useSelector, useDispatch } from "react-redux";
import InventoryTable from "./inventoryTable";
import {
  deleteItemFromInventory,
  initializeInventory,
} from "../../store/features/inventory/inventorySlice";
export default function Inventory() {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();
  const inventoryList = useSelector((state) => state.inventory.inventoryList);

  const editHandler = (id) => {
    setEditMode(true);
    setShow(true);
    const inventoryListImprint = inventoryList.slice();
    const dataToBeEdited = inventoryListImprint.find((data) => data.id === id);
    setEditData(dataToBeEdited);
  };

  const deleteHandler = (id) => {
    dispatch(deleteItemFromInventory({ id }));
  };

  useEffect(() => {
    dispatch(initializeInventory());
  }, []);

  const clearEditMode = () => {
    setEditMode(false);
    setEditData({});
  };

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.headWrapper}>Inventory</div>
      <Button
        startIcon={<AddIcon />}
        onClick={() => setShow(true)}
        variant="contained"
      >
        ADD NEW MEDICINE
      </Button>
      {show && (
        <InventoryOverlay
          open={show}
          setOpen={setShow}
          editMode={editMode}
          editData={editData}
          closeEditMode={clearEditMode}
        />
      )}
      <InventoryTable
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        rows={inventoryList}
      />
    </div>
  );
}
