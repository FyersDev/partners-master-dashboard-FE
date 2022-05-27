import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import moment from "moment";

export default class DateRange extends React.Component {

  constructor(props) {
    super(props);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.state = {
      startDate: new Date(moment().subtract(29, 'days')),
      endDate: new Date()
    };
  }
  handleDayChange(day, type) {
    if(type === 'start') {
      this.setState({ startDate: day });
    } else {
      this.setState({ endDate: day });
    }
  }
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          clearable
          label="Start Date"
          value={this.state.startDate}
          onChange={(date)=> {this.handleDayChange(date, 'start');this.props.updateQuery(date, 'start')}}
          format="dd-MM-yyyy"
          disableFuture
          style={{width: 150}}
          autoOk
          id="date-picker-dialog"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          placeholder={moment().format('DD-MM-YYYY')}
          fullWidth={false}
          animateYearScrolling
          mask="__-__-____"
        />
        <KeyboardDatePicker
          clearable
          label="End Date"
          value={this.state.endDate}
          onChange={(date)=>{this.handleDayChange(date, 'end');this.props.updateQuery(date, 'end')}}
          format="dd-MM-yyyy" 
          disableFuture
          style={{width: 150}}
          autoOk
          id="date-picker-dialog"
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          fullWidth={false}
          placeholder={moment().format('DD-MM-YYYY')}
          animateYearScrolling
          mask="__-__-____"
        />
      </MuiPickersUtilsProvider>
    );
  }
}