import React from "react";

function LabeledInput(props) {
  const { labelText, id, type, defaultValue, placeholder } = props;
  return (
    <label className="input-label-container" htmlFor={id}>
      <span className="input-label-text">{labelText}:</span>
      <input
        className={`${type}-input`}
        id={id}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </label>
  );
}

export default LabeledInput;
