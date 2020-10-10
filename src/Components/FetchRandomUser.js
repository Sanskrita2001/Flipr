import axios from "axios";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function FetchRandomUser() {
  const [dataList, setData] = useState([]);
  const getdata = async () => {
    const url = "https://api.rootnet.in/covid19-in/contacts";
    try {
      const response = await axios.get(url);
      console.log(response);
      await setData(response.data.data.contacts.regional);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  return (
    // <Table data={dataList} style={{ width: "100%" }}>
    //   <Column width={100}>
    //     <HeaderCell>Location:</HeaderCell>
    //     <Cell dataKey="loc" />
    //   </Column>

    //   <Column width={100}>
    //     <HeaderCell>Number:</HeaderCell>
    //     <Cell dataKey="number" />
    //   </Column>
    // </Table>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="right">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.loc}
              </TableCell>
              <TableCell align="right">{row.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default FetchRandomUser;

// {/*export default class FetchRandomUser extends React.Component{
//     state ={
//         loading: true
//     }
//     async componentDidUpdate(){
//         const url="https://api.rootnet.in/covid19-in/contacts";
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     }
//     render(){
//         return <div>
//             {this.state.loading?<div>loading...</div>: <div>person...</div>}
//         </div>
//     }
// }
// */}
