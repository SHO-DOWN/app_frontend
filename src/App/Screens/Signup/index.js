import React, { Component } from "react";
import { Helmet } from "react-helmet";
import logo1 from "../../Assets/img/logo.png";
import MyDesktop from "../../Components/MyComponents/MyDesktop";
export class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Signup</title>
        </Helmet>
        <div className="d-flex" style={{ height: "100vh" }}>
          <MyDesktop>
            <div className="col-lg-7 bg-primary-1 row justify-content-center align-items-center">
              <div className="fw-600 text-white text-center">
                <i className="fas fa-user-plus fs-100"></i>
                <div className="pt-3 fs-30">Signup to Awesomeness!!</div>
              </div>
            </div>
          </MyDesktop>
          <div className="col-lg-5 px-2 py-4">
            <div className="text-center mt-2">
              <img src={logo1} height="150px" />
              <div className="text-primary-2 fs-26">Login</div>
            </div>

            <div className="row mt-5 pt-2 justify-content-center ">
              <div className="col-md-12 row justify-content-center text-center">
                <input
                  className="form-control form-width"
                  placeholder="Email"
                  type="text"
                />
              </div>
              <div className="col-md-12 row mt-4 justify-content-center text-center">
                <input
                  className="form-control form-width"
                  placeholder="Password"
                  type="password"
                />
              </div>
              <div className="col-md-12 mt-4 justify-content-center text-center">
                <div className="button-primary px-5 py-2 bg-primary-2 fw-300 fs-14">
                  Signup
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
