import React from "react";

import $ from "./Method.module.scss";

interface Props {
  method: string;
}

const Method: React.FC<Props> = ({ method }) => {
  return (
    <div className={$.methodWrapper}>
      <div className={$.methodHeader}>
        <h3>Method</h3>
      </div>

      <div className={$.methodContent}>
        <ol>
          {method}

          {/* TODO: Fix method in steps of an ordered list.         */}

          {/* {method &&
            method.map((step) => {
              return <li key={step}>{step}</li>;
            })} */}
        </ol>
      </div>
    </div>
  );
};

export default Method;
