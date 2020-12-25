import { useDispatch, useSelector, shallowEqual } from "react-redux";
import actions from "./actions";
import selectors from "./selectors";

const useDispatchNew = () => {
  const dispatch = useDispatch();

  return (actionCb) => dispatch(actionCb(actions));
};

const useSelectorNew = (selectCb) =>
  useSelector((state) => selectCb(selectors(state)), shallowEqual);

export default {
  useDispatch: useDispatchNew,
  useSelector: useSelectorNew,
};

export const sortListArticle = (list) =>
  list.sort((a, b) => b.updateAt - a.updateAt);
