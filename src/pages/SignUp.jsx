import React from "react";
import './signUp.css'
import "bootstrap/dist/css/bootstrap.min.css";

function SignUp() {
  return (
    <div class="vh-100 bg">
      <div class="main-content p-5">
        <div class="font container">
          <div class="row justify-content-center">
            <div class="col-12 align-items-center justify-content-center col-lg-6 col-md-8">
              <div class="card bg-light border border-soft mb-0">
                <div class="card-body p-5">
                  <div class="text-center text-gray mb-4">
                    <h1 class="font mb-0 h3">회원가입</h1>
                  </div>
                  <form role="form mt-4">
                    <div class=" form-group mb-3">
                      <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="이메일" aria-describedby="basic-addon1"></input>
                      </div>
                    </div>
                    <div class=" form-group mb-3">
                      <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="비밀번호" aria-describedby="basic-addon1"></input>
                      </div>
                    </div>
                    <div class=" form-group mb-3">
                      <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="비밀번호 재확인" aria-describedby="basic-addon1"></input>
                      </div>
                    </div>
                    <div class=" form-group mb-3">
                      <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="성명" aria-describedby="basic-addon1"></input>
                      </div>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-primary my-3">회원가입</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;