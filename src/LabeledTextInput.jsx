import React from "react";

function LabeledTextInput(props) {
  const { labelText, id, defaultValue, placeholder } = props;
  return (
    <label className="input-container" htmlFor={id}>
      <span className="input-label-text">
        <b>{labelText}:</b>
      </span>
      <input
        className="text-input"
        id={id}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
    </label>
  );
}

export default LabeledTextInput;
