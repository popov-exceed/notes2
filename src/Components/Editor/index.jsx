import { useEffect } from "react";
import "react-mde/lib/styles/css/react-mde-all.css";
import { useDebounce } from "@notes/hooks";
import "./styles.css";

function Editor({ initialValue = "", onChange }) {
  const { value, setValue, isLoading } = useDebounce(
    initialValue,
    1000,
    (value) => {
      if (onChange) {
        onChange(value);
      }
    }
  );

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <textarea
      className="Editor"
      value={value}
      onChange={(e) => setValue(e?.target?.value || "")}
    />
  );
}

export default Editor;
