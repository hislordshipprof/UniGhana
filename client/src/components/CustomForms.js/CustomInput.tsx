import React, { ChangeEventHandler, useState } from "react";

interface CustomInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

function CustomInput({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: CustomInputProps) {
  const [hasValue, setHasValue] = useState(Boolean(value));

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setHasValue(Boolean(event.target.value));
    onChange(event);
  };
  return (
    <div className="form-floating mb-5 col-lg-12">
      <input
        id={id}
        type={type}
        placeholder={hasValue ? "" : placeholder}
        value={value}
        onChange={handleInputChange}
        className="form-control input"
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default CustomInput;
