import React from "react";

import { Img } from "components";

const Valiacc = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[100px] md:h-auto object-cover w-[100px]"
          src="images/img_verifiedaccount.png"
          alt="verifiedaccount"
        />
      </div>
    </>
  );
};

Valiacc.defaultProps = {};

export default Valiacc;
