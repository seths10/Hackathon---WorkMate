import * as React from "react";
import { InputComponentProp } from "./types";
import { classNames } from "../className";

const TextInput = React.forwardRef(
  (
    {
      placeholder,
      value,
      onChange,
      errors,
      id,
      type,
      name,
      defaultValue,
      minimum,
      disabled,
      step,
      lowerCase,
      label,
      required,
    }: InputComponentProp,
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    return (
      <>
        <div className="flex flex-col">
          <div className="flex mb-1 text-xs">
            <p>{label}</p>
            {required ? <p className="text-red-500 ml-[2px]"> *</p> : ""}
          </div>
          <input
            id={id}
            name={name}
            ref={ref}
            autoComplete="off"
            value={value}
            defaultValue={defaultValue}
            min={minimum}
            className={classNames(
              errors
                ? "focus:ring-red-500 focus:border-red-500"
                : "focus:ring-[#D65627] focus:border-[#D65627] ",
              lowerCase ? "lowercase" : "",
              "appearance-none block font-lato bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-none placeholder-gray-400  focus:outline-none focus:ring-0 lg:text-sm text-xs sm:text-xs"
            )}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            disabled={disabled}
            step={step}
          />
        </div>
      </>
    );
  }
);

TextInput.defaultProps = {
  disabled: false,
  lowerCase: false,
};

export { TextInput };
