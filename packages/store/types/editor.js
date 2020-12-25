const prefix = "EDITOR/";

export default {
  createArticle: prefix + "CREATE_ARTICLE",
  setActiveArticleId: prefix + "SET_ACTIVE_ARTICLE",
  changeArticleTextById: prefix + "CHANGE_ARTICLE_BY_ID",
  renameArticleTitleById: prefix + "RENAME_ARTICLE_TITLE_BY_ID",
  removeArticleById: prefix + "REMOVE_ARTICLE_BY_ID",
};
