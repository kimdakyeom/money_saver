import React from "react";
import './cardRec.css'
import "bootstrap/dist/css/bootstrap.min.css";

function CardRec() {
  return (
    <div className="font container my-5 text-center">
      <h1 className="font">OOO님 맞춤 추천 카드</h1>
      <div className="row m-5">
        <div className="col-12 col-lg-6 p-5">
          <img className="image" src="https://cdn.ftoday.co.kr/news/photo/202008/205554_205575_2334.jpg" />
        </div>
        <div className="col-12 col-lg-6 position-relative p-5 border rounded-3">
          <h2 className="fw-bold">카드의 자세한 혜택</h2>
          <div className="align-items-center">
            <p>
              연회비
            </p>
            <p>
              ● MASTER 10,000원
            </p>
            <p>
              ● 국내전용 10,000원
            </p>
            <p>
              휴대폰요금 :  10% 할인
            </p>
            <p>
              대중교통 :  10% 할인
            </p>
            <p>
              영화 :  5000원 할인
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardRec;