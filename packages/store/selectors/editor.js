import { sortListArticle } from "../localUtils";
export default function (state) {
  return {
    activeArticle: () =>
      state.editor.articleList[state.editor.activeArticleId] || null,
    activeArticleId: () => state.editor.activeArticleId,
    articleList: () => sortListArticle(Object.values(state.editor.articleList)),
    searchByTitle: (query = "") => {
      return sortListArticle(
        Object.values(state.editor.articleList).filter((el) =>
          el.title.includes(query)
        )
      );
    },
  };
}
