import "./styles.css";
import Editor from "../Editor";
import { useCallback, useEffect } from "react";
import RenameArticleTitle from "../RenameArticleTitle";
import { useDispatch, useSelector } from "@notes/store";
import { useDebounce } from "@notes/hooks";

function Content() {
  const dispatch = useDispatch();

  const activeArticleId = useSelector(({ editor }) => editor.activeArticleId());

  const activeArticle = useSelector(({ editor }) => editor.activeArticle());

  const handleRenameArticleTitle = useCallback(
    (value) => {
      dispatch(({ editor }) =>
        editor.renameArticleTitleById(activeArticleId, value)
      );
    },
    [activeArticleId]
  );

  const {
    value: articleTitleValue,
    setValue: onChangeArticleTitle,
  } = useDebounce(activeArticle?.title || "", 500, handleRenameArticleTitle);

  useEffect(() => {
    if (activeArticle?.title) {
      onChangeArticleTitle(activeArticle?.title);
    }
  }, [activeArticle]);

  const handleChange = useCallback(
    (value) => {
      dispatch(({ editor }) =>
        editor.changeArticleTextById(activeArticleId, value)
      );
    },
    [activeArticleId]
  );

  return (
    <div className="Content">
      {(() => {
        if (!activeArticle) {
          return <div className="Content__not_found">Not found note</div>;
        }

        return (
          <>
            <RenameArticleTitle
              value={articleTitleValue}
              onChange={onChangeArticleTitle}
            />
            <Editor initialValue={activeArticle.text} onChange={handleChange} />
          </>
        );
      })()}
    </div>
  );
}

export default Content;
