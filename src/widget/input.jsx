/* eslint-disable react/prop-types */
// import { forwardRef } from "react";

export default function Input({
  labelName,
  inputType,
  id,
  onInputChange,
  inputValue,
  onSubmit,
}) {
  let inputClass = "p-2 w-full shadow-md rounded-xl";
  let inputError = onSubmit && (inputValue == null || inputValue.trim().length === 0);

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
        <input
          type={inputType}
          id={id}
          className={inputClass}
          name={id}
          onChange={(e) => handleInputChange(e.target.value)}
          value={inputValue}
        />
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
