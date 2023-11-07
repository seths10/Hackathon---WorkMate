import * as React from "react";
import { SelectComponentProp } from "./types";

const Select: React.FC<SelectComponentProp> = ({
  options,
  value,
  disabled,
  onChange,
  firstOptionSelectable
}) => (
  <select
    className="block w-full px-3 py-2 text-xs bg-white border rounded-md shadow-none appearance-none cursor-pointer focus:border-[#D65627] font-lato border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-0 lg:text-sm sm:text-xs"
    value={value}
    disabled={disabled}
    onChange={(event) => onChange(event.target.value)}
    title="Select an option"
  >
    {options.map((option, index) => (
      <option key={option.value} disabled={firstOptionSelectable ? false : index === 0} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default Select;
