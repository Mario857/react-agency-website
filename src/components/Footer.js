import React from "react";
import * as moment from "moment";

const Footer = () => {
  return (
    <footer>
      <div className="container text-white">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <p className="mt-4 mb-4 title-font-2">
              @{moment().format("YYYY")} A. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
