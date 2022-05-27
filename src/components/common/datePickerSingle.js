import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from "moment";

export default class DatePickerSingle extends React.Component {
    constructor(props) {
        super(props);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.state = {
            selectedDay: undefined,
        };
    }
    handleDayChange(day) {
        this.setState({ selectedDay: day });
        this.props.getDate(day, this.props.label)
    }
    formatDate(date, format = 'L', locale = 'en') {
        return moment(date)
            .locale(locale)
            .format(Array.isArray(format) ? format[0] : format);
    }
    render() {
        // const { selectedDay } = this.state;
        return (
            <DayPickerInput
                onDayChange={this.handleDayChange}
                dayPickerProps={{
                    modifiers: {
                        disabled: [
                            {
                                before: this.props.diableFrom,
                            }
                        ]
                    }
                }}
                value={this.props.selectedDate ? new Date(this.props.selectedDate) : ''}
                inputProps={{
                    readOnly: true,
                    placeholder: 'YYYY-MM-DD',
                    className: this.props.className,
                    style:
                        {
                            //width: 500,
                            width: this.props.width,
                            fontSize: 15,
                            borderTop: 'none',
                            borderLeft: 'none',
                            borderRight: 'none',
                            borderBottom: 'solid 1px',
                            borderColor: 'grey',
                            outline: 'none'
                        }
                }}
            />
        );
    }
}
