/* eslint-disable react/prop-types */

export default function TaskDetail({ taskDetails, taskCheckedStatus }) {
  console.log("In task list", taskDetails);

  let categoryBgColor = "bg-amber-500";

  if (taskDetails.category.id == 2) {
    categoryBgColor = "bg-green-500";
  } else if (taskDetails.category.id == 3) {
    categoryBgColor = "bg-blue-500";
  } else if (taskDetails.category.id == 4) {
    categoryBgColor = "bg-fuchsia-500";
  }

  function handleCheckbox(value) {
    // console.log(value,index);
    taskCheckedStatus(value);
  }

  return (
    <>
      {/* {taskList.map((val, i) => (
        
        <div
          className="border-t-2 border-stone-300 mt-4 pt-6 flex flex-row"
          key={i}
        >
          <div className="w-1/12 text-center">
            <input
              type="checkbox"
              className="w-6 h-6 "
              checked={val?.checked}
              onChange={(e) => handleCheckbox(e.target.checked, i)}
            />
          </div>
          <div className="w-8/12">
            <p className={`text-lg font-medium ${val?.checked?'line-through':''}`}>{val.desc}</p>
            <p className={`text-sm ${val?.checked?'line-through':''}`}>{val.date}</p>
          </div>
          <div className="3/12">
            <span className={`${} p-3 rounded-lg text-white ${val?.checked?'line-through':''}`}>
              {val.category?.label}
            </span>
          </div>
        </div>
      ))} */}

      <div className="border-t-2 border-stone-300 mt-4 pt-6 flex flex-row">
        <div className="w-1/12 text-center">
          <input
            type="checkbox"
            className="w-6 h-6 "
            checked={taskDetails?.checked}
            onChange={(e) => handleCheckbox(e.target.checked)}
          />
        </div>
        <div className="w-8/12">
          <p
            className={`text-lg font-medium ${
              taskDetails?.checked ? "line-through" : ""
            }`}
          >
            {taskDetails.desc}
          </p>
          <p
            className={`text-sm ${taskDetails?.checked ? "line-through" : ""}`}
          >
            {taskDetails.date}
          </p>
        </div>
        <div className="3/12">
          <span
            className={`${categoryBgColor} p-3 rounded-lg text-white ${
              taskDetails?.checked ? "line-through" : ""
            }`}
          >
            {taskDetails.category?.label}
          </span>
        </div>
      </div>
    </>
  );
}
