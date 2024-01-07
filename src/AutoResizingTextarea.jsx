import React, { useState } from "react";

function AutoResizingTextarea(props) {
  const [height, setHeight] = useState(1);
  const { id, placeholder, defaultValue } = props;

  return (
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
  );
}

export default AutoResizingTextarea;
