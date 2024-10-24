
/* eslint-disable react/prop-types */

export default function DropDown({
  labelName,
  id,
  options,
  onInputChange,
  inputValue,
  onSubmit,
}) {
  let inputClass = "p-2 w-full shadow-md rounded-xl";
  const inputError = onSubmit && (inputValue.label == null || inputValue.label === "");

  if (inputError) {
    inputClass += "border-red-600 border-2";
  }

  function handleInputChange(value) {
    onInputChange(id, value);
  }

  return (
    <>
      <div>
        <label htmlFor={id} className="text-zinc-500">
          {labelName}
        </label>
      </div>
      <div>
        <select
          id={id}
          className={inputClass}
          name={id}
          onChange={(e) => handleInputChange(e.target.value)}
          value={inputValue?.id}
        >
          <option value="" hidden>
            Select a option
          </option>
          {options.map((val, i) => (
            <option key={i} value={val?.id}>
              {val?.label}
            </option>
          ))}
        </select>
      </div>
      {inputError && (
        <div>
          <span className="text-xs text-red-700 font-bold">
            {labelName} is required.
          </span>
        </div>
      )}
    </>
  );
}
