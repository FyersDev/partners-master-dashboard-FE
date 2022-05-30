import React, { useState } from "react";
import Title from "../common/title";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHeaders from "../common/tableHeaders";
import TextField from "@material-ui/core/TextField/TextField";
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import "./list.css";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import DateRangePicker from "../common/dateRangePickr";
import moment from "moment";

const rows = [
  { id: "added_at", numeric: false, disablePadding: false, label: "Date" },
  { id: "bundle_id", numeric: false, disablePadding: false, label: "AP ID" },
  { id: "station", numeric: false, disablePadding: false, label: `Email` },
  { id: "created_by", numeric: false, disablePadding: false, label: "Mobile" },
  { id: "packages", numeric: false, disablePadding: false, label: "Status" },
];

const data = [1, 12, 3, 4, 5, 6, 7];

function TableComponent(props) {
  const [search, setSearchValue] = useState("")
  const [status, setStatus] = useState("")
  return (
    <div>
      <Title
        title={"AP List"}
        // RefreshAPI={() => props.ListAPI(props.details.page, props.details.limit, props.details.search, props.details.bundle_id, props.details.station, props.details.package_status, props.details.attempt, props.details.startDate, props.details.endDate, props.details.partner)}
      />
      <div className="actions-row row col-lg-12">
          <div className="col-lg-3">
            <TextField
              placeholder="Search by AP ID"
              // className="mr-20"
              variant="outlined"
              size="small"
              value={search}
              onChange={e => setSearchValue(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className="col-lg-3">
            <select
              id="demo-simple-select"
              value={status}
              size="small"
              onChange={e => setStatus(e.target.value)}
            >
              <option value="">Select Status - All</option>
              <option value={10}>Active</option>
              <option value={20}>Inactive</option>
            </select>
          </div>
          <div className="col-lg-4">
          <DateRangePicker startDate={new Date(moment().startOf('month'))} endDate={new Date()} maxDate={new Date()} />
          </div>
      </div>
      {/* <div style={{ height: 5 }}>
        <LinearProgress className={"progressbar"} />
      </div> */}
      <Paper className={"root"}>
        <div className={"tableWrapper"}>
          <Table className={"table"} aria-labelledby="tableTitle">
            <TableHeaders headers={rows} numSelected={100} rowCount={100} />
            <TableBody style={{ background: "#fff" }}>
              {data.map((n) => {
                return (
                  <TableRow key={n}>
                    <TableCell>25 May 2022</TableCell>
                    <TableCell>AP0120</TableCell>
                    <TableCell>chytra.kr@gmail.com</TableCell>
                    <TableCell>1234567890</TableCell>
                    <TableCell>
                      <span className="badgef badgef-pill badgef-success">
                        Active
                      </span>
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={8} />
                                </TableRow>
                            )} */}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[10]}
          // showFirstButton={true}
          // showLastButton={true}
          component="div"
          count={100}
          rowsPerPage={10}
          page={0}
          backIconButtonProps={{
            "aria-label": "Previous Page",
          }}
          nextIconButtonProps={{
            "aria-label": "Next Page",
          }}
          // onChangePage={(event, page)=>props.updateQuery({page: page + 1})}
          // onChangeRowsPerPage={(event)=>props.updateQuery({limit: event.target.value, page: 1})}
        />
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
