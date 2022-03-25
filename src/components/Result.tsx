export const Result = ({ value = 0 }) => {
  return (
    <label className="result">
      <div className="label">Converted to:</div>
      <input type="text" value={value} disabled={true} />
    </label>
  );
};
