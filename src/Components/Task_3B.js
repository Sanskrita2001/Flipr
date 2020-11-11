import axios from "axios";
import React, { useEffect, useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function Task_3B() {
  const [dataList, setData] = useState([]);
  const getdata = async () => {
    const url = "https://api.rootnet.in/covid19-in/hospitals/medical-colleges";
    try {
      const response = await axios.get(url);
      console.log(response);
      await setData(response.data.data.medicalColleges);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>State Name</StyledTableCell>
            <StyledTableCell align="right">Institute Name</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Admission Capacity</StyledTableCell>
            <StyledTableCell align="right">Hospital Beds</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.state}
              </StyledTableCell>
              <StyledTableCell align="right">{row.city}</StyledTableCell>
              <StyledTableCell align="right">{row.ownership}</StyledTableCell>
              <StyledTableCell align="right">
                {row.admissionCapacity}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.hospitalBeds}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Task_3B;
