import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import icon from "../../Assets/img/settings.gif";
import logo1 from "../../Assets/img/logo.png";
import logo2 from "../../Assets/img/logo2.png";
import MyDesktop from "../../Components/MyComponents/MyDesktop";
export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="d-flex" style={{ height: "100vh" }}>
          <MyDesktop>
            <div className="col-lg-7 bg-primary-1 row justify-content-center align-items-center">
              <div className="fs-26 fw-600 text-white text-center">
                <img src={icon} height="450px" />
              </div>
            </div>
          </MyDesktop>
          <div className="col-lg-5 px-2 py-4 row ">
            <div className="fs-20 text-primary-1 fw-700 mt-4 px-3">
              <div className="d-flex justify-content-center">
                <div className="pr-2 pt-3">
                  <img src={logo2} height="150px" />
                </div>
                <div className="pt-5">
                  <img src={logo1} height="40px" />
                </div>
              </div>
              <div className="fs-20 text-primary-2 fw-500 text-center">
                Services you wished to find at one place
              </div>
              <div className="pt-4 text-center ">
                <Link to="/signup">
                  <div className="button-primary px-5 py-2 fw-300 fs-14">
                    Signup
                  </div>
                </Link>
              </div>
              <div className="pt-4 text-center ">
                <Link to="/login">
                  <div className="button-primary px-5 py-2 bg-primary-1 fw-300 fs-14">
                    Login
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
