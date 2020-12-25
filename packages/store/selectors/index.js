import editor from "./editor";

export default function (state) {
  return { state, editor: editor(state) };
}
