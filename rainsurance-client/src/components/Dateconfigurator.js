import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars'

class DateConfigurator extends Component {
  state = {
    markedDates: {},
    startingDate: null,
    endingDate: null,
  };

  _firstDayPress = (day) => ({
    startingDate: new Date(day.timestamp),
    endingDate: null,
    markedDates: {
      [day.dateString]: {startingDay: true, color: 'blue', textColor: 'white'}
    }
  });

  _seonDayPress = (day) => {
    const { startingDate } = this.state;  
    const newMarkedDates = [];

    newEndingDate = new Date(day.timestamp);
    
    for (let d = new Date(startingDate); d <= newEndingDate; d.setDate(d.getDate() + 1)) {
      newMarkedDates.push(new Date(d));
    }
    
    return {
      endingDate: new Date(day.timestamp),
      startingDate,
      markedDates: newMarkedDates.reduce((marked, date, ind) => ({
        ...marked,
        [date.yyyymmdd()]: {
          color: 'blue',
          textColor: 'white',
          startingDay: ind === 0,
          endingDay: ind === newMarkedDates.length - 1,
        }
      }), {}),
    }
  };
  
  onDayPress = (day) => {
    let newState = {};
    const { startingDate, endingDate } = this.state;
    
    if (!startingDate || (startingDate && endingDate)) {
      newState = this._firstDayPress(day);
    } else {
      newState = this._seonDayPress(day);
    }
    
    this.setState(newState);
  }
  
  render() {
    return (
      <Calendar
        current={Date()}
        minDate={'2012-05-10'}
        onDayPress={this.onDayPress}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {console.log('month changed', month)}}
        hideExtraDays={true}
        firstDay={1}  
        markedDates={this.state.markedDates}
        markingType="period"
        />
      );
    }
  }
  
  export default DateConfigurator;
  