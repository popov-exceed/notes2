import "./styles.css";
import { useDispatch } from "@notes/store";

function SidebarCreateArticleButton({ clearSearchQuery }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(({ editor }) => editor.createArticle());
    clearSearchQuery();
  };
  return (
    <div className="SidebarCreateArticleButton" onClick={handleClick}>
      Create
    </div>
  );
}

export default SidebarCreateArticleButton;
