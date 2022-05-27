import React, { Component } from "react";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { TextField } from "@material-ui/core";
import moment from "moment";
import { connect } from "react-redux";

class BootstrapDateRangePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputStart: moment().subtract(29, "days").format("YYYY-MM-DD"),
      inputFinish: moment().format("YYYY-MM-DD"),
    };
    this.handleEvent = this.handleEvent.bind(this);
    this.inputRef = React.createRef();
  }
  handleChangeDate(event, type) {
    event.preventDefault();
    event.stopPropagation();
    if (type === "start") {
      this.setState({
        inputStart: event.target.value,
        inputFinish: this.state.inputFinish,
      });
      this.props.getDateRange({
        startDate: this.state.inputStart,
        endDate: this.state.inputFinish,
      });
    } else {
      this.setState({
        inputFinish: event.target.value,
        inputStart: this.state.inputStart,
      });
      this.props.getDateRange({
        startDate: this.state.inputStart,
        endDate: event.target.value,
      });
    }
  }
  handleChangeF = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      inputFinish: event.target.value,
      inputStart: this.state.inputStart,
    });
    this.props.getDateRange({
      startDate: moment(new Date(this.state.inputStart).format("YYYY-MM-DD")),
      endDate: moment(new Date(event.target.value)).format("YYYY-MM-DD"),
    });
  };
  handleEvent(event, picker) {
    this.setState({
      inputStart: picker.startDate.format("YYYY-MM-DD"),
      inputFinish: picker.endDate.format("YYYY-MM-DD"),
    });
    this.props.getDateRange({
      startDate: picker.startDate.format("YYYY-MM-DD"),
      endDate: picker.endDate.format("YYYY-MM-DD"),
    });
  }
  render() {
    return (
      <DateRangePicker
        autoUpdateInput={false}
        startDate={this.state.inputStart}
        endDate={this.state.inputFinish}
        locale={{ format: "YYYY-MM-DD" }}
        onApply={this.handleEvent}
        //   autoApply={true}
      >
        <TextField
          style={{ width: 90 }}
          type="text"
          value={this.state.inputStart}
          onChange={(e) => this.handleChangeDate(e, "start")}
          variant="outlined"
          size="small"
        />
        <span style={{ marginTop: 5, display: "inherit" }}>
          &nbsp;-&nbsp;&nbsp;
        </span>
        <TextField
          style={{ width: 90 }}
          type="text"
          value={this.state.inputFinish}
          onChange={(e) => this.handleChangeDate(e, "end")}
          variant="outlined"
          size="small"
        />
      </DateRangePicker>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BootstrapDateRangePicker);
