import * as C from "./style";

export function Input ({ type, placeholder, value, onChange }) {
  return (
    <C.Input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};