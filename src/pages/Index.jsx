import React from 'react'
import './index.css'
import Slide from '../components/Slide'

export default function Index() {
  return (
    <div>
      <div>
        {<Slide />}
      </div>
      <div className='container my-3'>
        <div class="font banner-text-top">
          <h1 class="font text-center">나만의 소비일기</h1>
          <h1 class="font text-center">머니세이버에서 쉽고 간편하게</h1>
        </div>
        <div class="font banner-text-bottom">
          <p class="text-center">내 돈 관리,</p>
          <p class="text-center">합리적 소비부터 절약까지</p>
          <p class="text-center">똑똑하게</p>
        </div>
      </div>
    </div>
  )
}