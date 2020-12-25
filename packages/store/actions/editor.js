import types from "../types/editor";

export const createArticle = () => ({ type: types.createArticle });

export const setActiveArticleId = (id = "") => {
  return {
    type: types.setActiveArticleId,
    payload: id,
  };
};

export const changeArticleTextById = (id, value) => {
  return {
    type: types.changeArticleTextById,
    payload: { text: value, id },
  };
};

export const renameArticleTitleById = (id, value) => {
  return {
    type: types.renameArticleTitleById,
    payload: { id, value },
  };
};

export const removeArticleById = (id) => {
  return {
    type: types.removeArticleById,
    payload: { id },
  };
};
