import React, { useState } from "react";

function LabeledAutoResizingTextarea(props) {
  const [height, setHeight] = useState(2);
  const { id, placeholder, defaultValue, labelText } = props;

  return (
    <label htmlFor={id} className="input-container">
      <span className="input-label-text">
        <b>{labelText}:</b>
      </span>
      <textarea
        id={id}
        rows={height}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="resizing-textarea"
        onChange={(e) => {
          if (e.target.clientHeight < e.target.scrollHeight)
            setHeight(height + 1);
        }}
        style={{ resize: "none" }}
      />
    </label>
  );
}

export default LabeledAutoResizingTextarea;
