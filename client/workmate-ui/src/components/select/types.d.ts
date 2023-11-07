export type SelectOption<T> = {
  value: T;
  label: string;
};

type ChangeHandler = (value: string) => void;

export type SelectComponentProp = {
  options: SelectOption[];
  firstOptionSelectable?: boolean;
  value: string;
  onChange: ChangeHandler;
  disabled?: boolean;
};
