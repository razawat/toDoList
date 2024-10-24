/* eslint-disable react/prop-types */


export default function TaskDetail({ taskList }) {
    console.log("In task list");
  return (
    <>
      {taskList.map((val, i) => (
        <div
          className="border-t-2 border-stone-300 mt-4 pt-6 flex flex-row"
          key={i}
        >
          <div className="w-1/12 text-center">
            <input type="checkbox" className="w-6 h-6 " />
          </div>
          <div className="w-8/12">
            <p className="text-lg font-medium">{val.desc}</p>
            <p className="text-sm">{val.date}</p>
          </div>
          <div className="3/12">
            <span className="bg-blue-800 p-3 rounded-lg text-white">
              {val.category}
            </span>
          </div>
        </div>
      ))}
    </>
  );
}
