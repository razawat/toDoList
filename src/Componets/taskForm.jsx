import Input from "../widget/input";
import DropDown from "../widget/dropDown";
import { categories } from "../Util/const";

export default function TaskForm() {
  return (
    <>
      <form>
        <div className="flex flex-row flex-wrap gap-2 justify-between">
          <div className="w-full">
            <Input id="description" labelName="Description" inputType="text" />
          </div>
          <div className="w-full md:w-6/12">
            <DropDown labelName="Category" id="category" options={categories} />
          </div>
          <div className="w-full md:w-5/12">
            <Input id="dueDate" labelName="Due Date" inputType="date" />
          </div>
          <div className="w-full flex flex-row justify-center gap-2">
            <button
              type="submit"
              className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-900"
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
