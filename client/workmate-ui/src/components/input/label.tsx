type Props = {
  label: string;
  htmlFor: string;
  required?: boolean;
};

export const TextInputLabel = ({ label, htmlFor, required }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="flex flex-row items-center space-x-1 text-xs font-normal lg:text-left font-lato sm:text-xs lg:text-sm text-black"
    >
      <span> {label}</span>{" "}
      {required ? <span className="pt-2 text-red-600">*</span> : null}
    </label>
  );
};
