import React from "react";
import './report.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Report() {
  return (
    <div class="CONTAINER">
      <div class="ps-4 pe-4 pt-4">지출</div>
      <hr width="90%"/>
      <div class="text-center">
        <div>
          <div class="my-3 fw-bold">
            Category
          </div>
          <div class="my-2">
            Content
          </div>
        </div>
        <div>
          <div class="my-3 fw-bold">
            Category
          </div>
          <div class="my-2">
            Content
          </div>
        </div>
        <div>
          <div class="my-3 fw-bold">
            Category
          </div>
          <div class="my-2">
            Content
          </div>
        </div>
      </div>
      <div class="ps-4 pe-4 pt-4">수익</div>
      <hr width="90%"/>
      <div class="container text-center">
        <div>
          <div class="my-3 fw-bold">
            Category
          </div>
          <div class="my-2">
            Content
          </div>
        </div>
        <div>
          <div class="my-3 fw-bold">
            Category
          </div>
          <div class="my-2">
            Content
          </div>
        </div>
        <div>
          <div class="my-3 fw-bold">
            Category
          </div>
          <div class="my-2">
            Content
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;