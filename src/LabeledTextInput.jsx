import React from "react";

function LabeledTextInput(props) {
  const { labelText, id, defaultValue, placeholder, autocomplete } = props;

  return (
    <>
      <label className="input-label" htmlFor={id}>
        <b>{labelText}:</b>
      </label>

      <input
        className="text-input"
        id={id}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={autocomplete}
      />
    </>
  );
}

export default LabeledTextInput;
