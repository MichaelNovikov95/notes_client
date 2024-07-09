import { iButtonProps } from "../interfaces/interfaces";

const Button = ({ onClick, text }: iButtonProps) => (
  <button onClick={onClick}>{text}</button>
);

export default Button;
