import React, { ChangeEventHandler } from "react";
import "./Input.css";

interface Iinput {
  label: string;
  onChange: (e: Record<string, string>) => void;
  name: string;
}
const InputComponent = (props: Iinput) => {
  const { label, onChange, name } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    onChange({ [name]: e.target.value });

  return (
    <div className="inputWrapper">
      <label>{label}</label>
      <input
        onChange={handleChange}
        key={name}
        data-testid={`input_${name}`}
        maxLength={60}
      />
    </div>
  );
};

export default InputComponent;
