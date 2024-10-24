/* eslint-disable react/prop-types */
import Input from "../widget/input";
import DropDown from "../widget/dropDown";
import { categories } from "../Util/const";
// import { useRef } from "react";
import { useState } from "react";

export default function TaskForm({ getFormData }) {
  console.log("In task form");
  const [taskForm, updateTaskForm] = useState({
    desc: "",
    category: "",
    date: "",
  });

  const [submitStatus, updateSubmitStatus] = useState(false);

  function handleInputChange(key, value) {
    console.log("on change: ", key, value);
    updateTaskForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmitButton(e) {
    e.preventDefault();
    updateSubmitStatus(true);
    console.log("Check form:", taskForm);
    if (
      taskForm?.desc != null &&
      taskForm.desc.trim().length != 0 &&
      taskForm?.category != null &&
      taskForm.category !== "" &&
      taskForm.date !== null &&
      taskForm.date !== ""
    ) {
      getFormData(taskForm);
      updateSubmitStatus(false);
      updateTaskForm(() => ({ desc: "", category: "", date: "" }));
    }
  }

  return (
    <>
      <form>
        <div className="flex flex-row flex-wrap gap-2 justify-between">
          <div className="w-full">
            <Input
              id="desc"
              labelName="Description"
              inputType="text"
              inputValue={taskForm.desc}
              onInputChange={handleInputChange}
              onSubmit={submitStatus}
            />
            {/* <p>Description is required</p> */}
          </div>
          <div className="w-full md:w-6/12">
            <DropDown
              labelName="Category"
              id="category"
              options={categories}
              inputValue={taskForm.category}
              onInputChange={handleInputChange}
              onSubmit={submitStatus}
            />
          </div>
          <div className="w-full md:w-5/12">
            <Input
              id="date"
              labelName="Due Date"
              inputType="date"
              inputValue={taskForm.date}
              onInputChange={handleInputChange}
              onSubmit={submitStatus}
            />
          </div>
          <div className="w-full flex flex-row justify-center gap-2">
            <button
              type="submit"
              className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-900"
              onClick={(e) => handleSubmitButton(e)}
            >
              + Add Task
            </button>
            <button
              type="button"
              className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-900"
            >
              Delete Task
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
