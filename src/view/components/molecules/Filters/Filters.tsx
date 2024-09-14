import React, { useState } from "react";
import { Logo } from "@src/view/components";
import classnames from "classnames";

import $ from "./Header.module.scss";

type Props = {
  //   onChangeCallback?: (value: string) => void;
};

const Filters: React.FC<Props> = ({}) => {
  const [filterSetActive, setFilterSetActive] = useState(false);
  const fitlerBlock = classnames([
    $.filterWrapper,
    filterSetActive && $.filterBlockActive,
  ]);

  return (
    <div className={fitlerBlock}>
      <p>filter state is now active. ADD FILTERS HERE </p>
      <form>
        <fieldset>
          <label>
            <input type="checkbox" value="Ingredient 1" />
            Ingredient 1
          </label>

          <label>
            <input type="checkbox" value="Ingredient 2" />
            Ingredient 2
          </label>

          <label>
            <input type="checkbox" value="Ingredient 3" />
            Ingredient 3
          </label>

          <label>
            <input type="checkbox" value="Ingredient 4" />
            Ingredient 4
          </label>
        </fieldset>
      </form>
    </div>
  );
};

export default Filters;
