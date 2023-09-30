import "./utils.css";
import { placeholder } from "./types";

type InputProps = {
  placeholder: placeholder;
  type: string;
  style: React.CSSProperties;
};

export default function Input({ placeholder, type, style }: InputProps) {
  return <input type={type} placeholder={placeholder} style={style} />;
}
