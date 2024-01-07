import React from "react";

function LabeledInput(props) {
  const { labelText, id, type, value, placeholder, onChange } = props;
  return (
    <label className="input-label-container" htmlFor={id}>
      <span className="input-label-text">{labelText}:</span>
      <input
        className={`${type}-input`}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
}

export default LabeledInput;
