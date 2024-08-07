import classNames from "classnames";
import React from "react";

import $ from "./Input.module.scss";

type Props = {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInput?: (e: React.FocusEvent<HTMLInputElement>) => void;
  type?: "text" | "email";
  id: string;
  name: string;
};

const Input: React.FC<Props> = ({
  placeholder,
  onChange,
  type,
  id,
  name,
  onBlur,
  onInput,
}) => (
  <input
    className={$.input}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    onInput={onInput}
    id={id}
    name={name}
    autoComplete="on"
  />
);

export default Input;
