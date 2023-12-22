export const Radio = ({ name }) => {
  return (
    <div className="flex items-center align-middle">
      <label className="mx-2">
        <input type="radio" name={name} className="radio radio-sm" checked />
        <p className="text-xs">False</p>
      </label>
      <label className="mx-2">
        <input type="radio" name={name} className="radio radio-sm" />
        <p className="text-xs">True</p>
      </label>
    </div>
  );
};

