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

function Task_3A() {
  const [dataList, setData] = useState([]);
  const getdata = async () => {
    const url = "https://api.rootnet.in/covid19-in/hospitals/beds";
    try {
      const response = await axios.get(url);
      console.log(response);
      await setData(response.data.data.regional);
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
            <StyledTableCell align="right">Rural hospitals</StyledTableCell>
            <StyledTableCell align="right">Rural Beds</StyledTableCell>
            <StyledTableCell align="right">Urban hospitals</StyledTableCell>
            <StyledTableCell align="right">Urban beds</StyledTableCell>
            <StyledTableCell align="right">Total hospitals</StyledTableCell>
            <StyledTableCell align="right">
              Total beds(State wise)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.state}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.ruralHospitals}
              </StyledTableCell>
              <StyledTableCell align="center">{row.ruralBeds}</StyledTableCell>
              <StyledTableCell align="center">
                {row.urbanHospitals}
              </StyledTableCell>
              <StyledTableCell align="center">{row.urbanBeds}</StyledTableCell>
              <StyledTableCell align="center">
                {row.totalHospitals}
              </StyledTableCell>
              <StyledTableCell align="center">{row.totalBeds}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Task_3A;
