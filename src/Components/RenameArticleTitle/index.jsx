import "./styles.css";

function RenameArticleTitle({ value, onChange }) {
  return (
    <input
      className="RenameArticleTitle"
      value={value}
      onChange={(e) => onChange(e?.target?.value || "")}
    />
  );
}

export default RenameArticleTitle;
