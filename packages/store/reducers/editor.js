import types from "../types/editor";
import { v4 as uuidv4 } from "uuid";

const initState = {
  articleList: {},
  activeArticleId: "",
};

export default function (state = initState, { type, payload }) {
  switch (type) {
    case types.renameArticleTitleById: {
      return {
        ...state,
        articleList: {
          ...state.articleList,
          [payload.id]: {
            ...state.articleList[payload.id],
            title: payload.value,
            updateAt: Date.now(),
          },
        },
      };
    }

    case types.removeArticleById: {
      const copy = { ...state.articleList };
      delete copy[payload.id];

      return {
        ...state,
        articleList: copy,
      };
    }

    case types.setActiveArticleId: {
      return {
        ...state,
        activeArticleId: payload,
      };
    }

    case types.changeArticleTextById: {
      return {
        ...state,
        articleList: {
          ...state.articleList,
          [payload.id]: {
            ...state.articleList[payload.id],
            text: payload.text,
            updateAt: Date.now(),
          },
        },
      };
    }

    case types.createArticle: {
      const id = uuidv4();
      const currentDate = Date.now();
      return {
        ...state,
        activeArticleId: id,
        articleList: {
          ...state.articleList,
          [id]: {
            id,
            title: "Untitled",
            text: "",
            createAt: currentDate,
            updateAt: currentDate,
          },
        },
      };
    }

    default: {
      return state;
    }
  }
}
