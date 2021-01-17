import React from "react";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

function Loading() {
  const loading = true;

  return (
    <div style={{margin: '0 auto', marginTop: '200px'}}>
        <HashLoader
          css={override}
          size={35}
          color={"#34b7eb"}
          loading={loading}
        />
        <center>
          <div style={{marginTop: 40, marginLeft: 35}}>Please Wait...</div>
        </center>
      </div>
  );
}

export default Loading;
