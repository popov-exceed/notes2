import "./styles.css";
import { useCallback } from "react";
import SidebarItemList from "../SidebarItemList";
import SidebarSearch from "../SidebarSearch";
import { useSelector, useDispatch } from "@notes/store";
import { useDebounce } from "@notes/hooks";
import SidebarItem from "../SidebarItem";
import SidebarCreateArticleButton from "../SidebarCreateArticleButton";

function Sidebar() {
  const dispatch = useDispatch();
  const {
    value: searchQuery,
    debouncedValue: debouncedSearchQuery,
    setValue: setSearchValue,
  } = useDebounce("", 600);

  const searchedList = useSelector(({ editor }) =>
    editor.searchByTitle(debouncedSearchQuery)
  );
  const activeArticleId = useSelector(({ editor }) => editor.activeArticleId());

  const handleSetActiveId = useCallback((id) => {
    dispatch(({ editor }) => editor.setActiveArticleId(id));
  }, []);

  const handleRemoveArticleById = useCallback((id) => {
    dispatch(({ editor }) => editor.removeArticleById(id));
  }, []);

  return (
    <div className="Sidebar">
      <SidebarCreateArticleButton clearSearchQuery={() => setSearchValue("")} />
      <SidebarItemList>
        {searchedList.map((el) => (
          <SidebarItem
            active={activeArticleId === el.id}
            onClick={() => {
              handleSetActiveId(el.id);
            }}
            onRemove={() => handleRemoveArticleById(el.id)}
            key={el.id}
          >
            {el.title}
          </SidebarItem>
        ))}
      </SidebarItemList>

      <div className="Sidebar__footer">
        <SidebarSearch value={searchQuery} onChange={setSearchValue} />
      </div>
    </div>
  );
}

export default Sidebar;
