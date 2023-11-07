import * as React from "react";
import { FieldError } from "react-hook-form";

export interface InputComponentProp {
  value?: string;
  type: InputType;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  errors?: FieldError;
  id: string;
  name: string;
  defaultValue?: string;
  minimum?: string;
  disabled?: boolean;
  step?: string;
  lowerCase?: boolean;
  required?:boolean;
  label?: string;
}

declare enum InputEnum {
  text,
  email,
  password,
  number,
  date,

}

export type InputType = keyof typeof InputEnum;
