/* eslint-disable react/prop-types */

export default function DropDown({ labelName, id, options }) {
  return (
    <>
      <div>
        <label htmlFor={id} className="text-zinc-500">
          {labelName}
        </label>
      </div>
      <div>
        <select id={id} className="p-2 w-full shadow-md rounded-xl">
            <option value="" disabled selected>Select a option</option>
          {options.map((val, i) => (
            <option key={i} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
