import React from 'react'
import './save.css'
import CategoryChart from '../components/CategoryChart'
import CostChart from '../components/CostChart'

export default function Analystics() {
  return (
    <div className="font container my-5 text-center">
      <p className="fw-bold">이번달 총 소비 금액</p>
      <p>500,000원</p>
      <div className="justify-content-center">
        {<CategoryChart />}
        {<CostChart />}
      </div>
    </div>
  )
}