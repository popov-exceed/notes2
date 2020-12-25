import "./styles.css";
import utils from "@notes/utils";

function SidebarItem({ children, onClick, active, onRemove }) {
  return (
    <div
      className={utils.cx("SidebarItem", active && "SidebarItem--active")}
      onClick={() => onClick && onClick()}
    >
      <div onClick={onRemove} className="SidebarItem__removeButton">
        <div onClick={onRemove} className="SidebarItem__removeButton__icon" />
      </div>
      {children}
    </div>
  );
}

export default SidebarItem;
