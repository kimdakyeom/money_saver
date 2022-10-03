import React from 'react'
import './calendar.css'
import CalendarPicker from '../components/CalendarPicker'
import Goal from '../components/Goal'
import Point from '../components/Point'
import Report from '../components/Report'
import Diary from '../components/Diary'

export default function Calendar() {
  return (
    <div class="font container my-5">
      <div class="ROW row mx-auto">
        <div class="col-6 my-auto">
          <Goal />
          <Point />
          <CalendarPicker />
        </div>
        <div class="col-6 bg-light">
          <Report />
        </div>
      </div>
    </div>
  )
}