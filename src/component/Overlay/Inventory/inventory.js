import React, { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import { TextField } from "@mui/material";
import classes from "./styles.module.css";
import {
  discountLabel,
  inventoryTitle,
  manufacturerLabel,
  medicineNameLabel,
  priceLabel,
  stockLabel,
} from "./constant";
import {
  addItemToInventory,
  updateItemInInventory,
} from "../../../store/features/inventory/inventorySlice";
import { v4 as uuidv4 } from "uuid";

function SimpleDialog(props) {
  const { open, setOpen, editMode, closeEditMode, editData } = props;
  const initData =
    editMode && Object.keys(editData).length > 0
      ? editData
      : {
          medicineName: "",
          manufacturer: "",
          price: 0,
          stock: 0,
          discount: "",
        };
  const dispatch = useDispatch();
  const [data, setData] = useState(initData);

  const handleChange = (name, e) => {
    const {
      target: { value },
    } = e;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    const dataToUpdated = {
      id: editMode ? data.id : uuidv4(),
      medicineName: data.medicineName,
      manufacturer: data.manufacturer,
      price: parseInt(data.price),
      stock: parseInt(data.stock),
      discount: parseInt(data.discount),
    };
    setOpen(false);
    if (editMode) {
      dispatch(updateItemInInventory(dataToUpdated));
      closeEditMode();
    } else {
      dispatch(addItemToInventory(dataToUpdated));
    }
  };

  return (
    <Dialog
      onClose={() => setOpen((prev) => !prev)}
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle>{inventoryTitle}</DialogTitle>
      <div className={classes.inputBoxWrapper}>
        <TextField
          id="outlined-basic"
          label={medicineNameLabel}
          variant="outlined"
          value={data.medicineName}
          type="text"
          fullWidth
          onChange={(e) => handleChange("medicineName", e)}
        />
      </div>
      <div className={classes.inputBoxWrapper}>
        <TextField
          id="outlined-basic"
          label={manufacturerLabel}
          value={data.manufacturer}
          variant="outlined"
          type="text"
          fullWidth
          onChange={(e) => handleChange("manufacturer", e)}
        />
      </div>
      <div className={classes.inputBoxWrapper}>
        <TextField
          id="outlined-basic"
          label={priceLabel}
          variant="outlined"
          type="text"
          value={data.price}
          fullWidth
          onChange={(e) => handleChange("price", e)}
        />
      </div>

      <div className={classes.inputBoxWrapper}>
        <TextField
          id="outlined-basic"
          label={stockLabel}
          variant="outlined"
          type="text"
          fullWidth
          value={data.stock}
          onChange={(e) => handleChange("stock", e)}
        />
      </div>
      <div className={classes.inputBoxWrapper}>
        <TextField
          id="outlined-basic"
          label={discountLabel}
          variant="outlined"
          type="text"
          value={data.discount}
          fullWidth
          onChange={(e) => handleChange("discount", e)}
        />
      </div>
      <DialogActions>
        <Button autoFocus onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button autoFocus onClick={handleSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function InventoryOverlay({
  open,
  setOpen,
  editMode,
  editData,
  closeEditMode,
}) {
  return (
    <SimpleDialog
      open={open}
      setOpen={setOpen}
      editMode={editMode}
      editData={editData}
      closeEditMode={closeEditMode}
    />
  );
}
