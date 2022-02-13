import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  discountLabel,
  manufacturerLabel,
  medicineNameLabel,
  priceLabel,
  stockLabel,
} from "../Overlay/Inventory/constant";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function InventoryTable({ rows, editHandler, deleteHandler }) {
  return (
    <TableContainer component={Paper} sx={{ marginTop: "50px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{medicineNameLabel}</StyledTableCell>
            <StyledTableCell align="center">
              {manufacturerLabel}
            </StyledTableCell>
            <StyledTableCell align="center">{priceLabel}</StyledTableCell>
            <StyledTableCell align="center">{stockLabel}</StyledTableCell>
            <StyledTableCell align="center">{discountLabel}(%)</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 &&
            rows.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.medicineName}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.manufacturer}
                </StyledTableCell>
                <StyledTableCell align="center">{row.price}</StyledTableCell>
                <StyledTableCell align="center">{row.stock}</StyledTableCell>
                <StyledTableCell align="center">{row.discount}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  onClick={() => editHandler(row.id)}
                >
                  <EditIcon />
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  onClick={() => deleteHandler(row.id)}
                >
                  <DeleteIcon />
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
