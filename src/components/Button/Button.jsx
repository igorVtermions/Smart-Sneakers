import * as C from "./style";

export function Button ({ Text, onClick, Type = "button" })  {
  return (
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>
  );
};