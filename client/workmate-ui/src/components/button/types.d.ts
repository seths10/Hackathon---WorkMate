import * as React from "react";

export interface ButtonComponentProp
  extends React.HTMLAttributes<React.ButtonHTMLAttributes> {
  label: string;
  onClick: () => void;
  backgroundColor?: string;
  color?: string;
  width?: number;
  height?: number;
  loading?: boolean;
  disabled?: boolean;
}
