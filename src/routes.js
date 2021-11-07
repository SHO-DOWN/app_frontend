import React from "react";
import ScrollToTop from "./App/Components/MyComponents/ScrollToTop.js";

// import ScrollToTop from "./global/ScrollToTop";
import App from "./App/index.js";

const Router = ({ history }) => {
  return (
    <ScrollToTop>
      <App />
    </ScrollToTop>
  );
};

export default Router;
