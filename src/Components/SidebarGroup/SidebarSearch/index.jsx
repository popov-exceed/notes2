import "./styles.css";
import Input from "../../Input";

function SidebarSearch({ value, onChange }) {
  return (
    <Input
      className="SidebarSearch"
      value={value}
      onChange={onChange}
      placeholder="Search everywhere"
    />
  );
}

export default SidebarSearch;
