import React from "react";

import $ from "./Tags.module.scss";

type Props = {
  tagCollection: Array<string>;
};

const Tags: React.FC<Props> = ({ tagCollection }) => {
  return (
    <div className={$.tags}>
      {tagCollection &&
        tagCollection.map((tag) => {
          return (
            <div className={$.tag} key={tag}>
              {tag}
            </div>
          );
        })}
    </div>
  );
};

export default Tags;
