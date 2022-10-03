import React from "react";
import './login.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div class="vh-100 bg">
      <div class="main-content p-5">
        <div class="font container">
          <div class="row justify-content-center">
            <div class="col-12 align-items-center justify-content-center col-lg-6 col-md-8">
              <div class="card bg-light border border-soft mb-0">
                <div class="card-body p-5">
                  <div class="text-center text-gray mb-4">
                    <h1 class="font mb-0 h3">로그인</h1>
                  </div>
                  <form role="form mt-4">
                    <div class="form-group mb-3">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                          </svg>
                        </span>
                        <input type="email" class="form-control" placeholder="Email" aria-label="이메일" aria-describedby="basic-addon1"></input>
                      </div>
                    </div>
                    <div class=" form-group mb-3">
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock-fill" viewBox="0 0 16 16">
                            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
                          </svg>
                        </span>
                        <input type="password" class="form-control" placeholder="Password" aria-label="비밀번호" aria-describedby="basic-addon1"></input>
                      </div>
                    </div>
                    <div class="custom-control custom-control-alternative custom-checkbox my-3">
                      <input class="custom-control-input" id="customCheckLogin" type="checkbox"></input>
                      <label class="custom-control-label" for="customCheckLogin">
                        <span class="text-muted mx-1">이메일 기억하기</span>
                      </label>
                    </div>
                    <div class="text-center">
                      <button type="button" class="btn btn-primary my-3">로그인</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-6">
                  <a href="#" class="text-muted text-decoration-none">
                    <small>비밀번호 찾기</small>
                  </a>
                </div>
                <div class="col-6 text-end">
                  <a href="/signup" class="text-muted text-decoration-none">
                    <small>회원가입</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;