import "./styles.css";

import { useCallback } from "react";

function Input({
  value,
  onChange,
  style = {},
  className = "",
  clearStyles = false,
  placeholder = "",
}) {
  const handleChange = useCallback(
    (e) => {
      if (e?.target && onChange) {
        onChange(e.target?.value || "");
      }
    },
    [onChange]
  );

  return (
    <input
      style={style}
      className={clearStyles ? ["Input", className].join(" ") : className}
      value={value || ""}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
