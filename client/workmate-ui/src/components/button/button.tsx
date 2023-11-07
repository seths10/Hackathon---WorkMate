import * as React from "react";
import { ButtonComponentProp } from "./types";
import { classNames } from "../className";
import { ButtonLoader } from "../loaders/Loaders";

const Button: React.FC<ButtonComponentProp> = ({
  label,
  onClick,
  color,
  backgroundColor,
  width,
  height,
  loading = false,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      style={{ backgroundColor, width, height }}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        disabled ? "cursor-not-allowed bg-black/40 flex flex-col items-center justify-center py-[6px] px-[6px] rounded-lg w-full hover:bg-homeButton" : "flex flex-col items-center justify-center py-[6px] px-[6px] bg-black rounded-lg cursor-pointer w-full",
      )}
      {...rest}
    >
      {loading ? (
        <ButtonLoader />
      ) : (
        <div
          style={{ color }}
          className="mx-2 font-semibold text-center text-white text-md"
        >
          {label}
        </div>
      )}
    </button>
  );
};

export default Button;
