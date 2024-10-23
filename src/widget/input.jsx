// eslint-disable-next-line react/prop-types
export default function Input({ labelName, inputType, id }) {
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
          className="p-2 w-full shadow-md rounded-xl"
        />
      </div>
    </>
  );
}
