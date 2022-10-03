import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./calendarPicker.css";

function CalendarPicker() {
  const [value, onChange] = useState(new Date());

  return (
    <div className='font'>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalendarPicker;