import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const SearchResults = (props) => {
  console.log(props);
  const classes = useStyles();
  return (
    <div style={{ margin: "10px" }}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.users[0] &&
                Object.keys(props.users[0]).map((key) => {
                  if (!key.includes("id")) {
                    return (
                      <TableCell align="left" style={{ fontWeight: "bold" }}>
                        {key[0].toLocaleUpperCase() + key.slice(1)}
                      </TableCell>
                    );
                  } else {
                    return null;
                  }
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.users.map((user) => (
              <TableRow key={user.id}>
                {Object.keys(user).map((key) => {
                  if (!key.includes("id")) {
                    return <TableCell component="th">{user[key]}</TableCell>;
                  }
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SearchResults;
