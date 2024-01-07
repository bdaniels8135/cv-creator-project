import React, { useState } from "react";

function ResizingTextarea(props) {
  const [height, setHeight] = useState(1);
  const { id, placeholder } = props;

  return (
    <textarea
      id={id}
      rows={height}
      placeholder={placeholder}
      className="resizing-textarea"
      onChange={(e) => {
        if (e.target.clientHeight < e.target.scrollHeight)
          setHeight(height + 1);
      }}
      style={{ resize: "none" }}
    />
  );
}

export default ResizingTextarea;
