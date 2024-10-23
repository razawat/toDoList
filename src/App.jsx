import "./App.css";
import TaskForm from "./Componets/taskForm";
import TaskDetail from "./Componets/taskDetail";

const arr = [{ desc: "First", date: "Jun, 1, 2019", category: "Work" },
  { desc: "Second", date: "Jun, 5, 2019", category: "Work" },
  { desc: "Third", date: "Jun, 19, 2019", category: "Personal" }
];

function App() {
  return (
    <main className="p-5 bg-gray-200 mx-auto w-full md:w-3/4 shadow-lg my-2">
      <header>
        <h1 className="text-center text-xl font-semibold"> TODO App</h1>
      </header>
      <section>
        <TaskForm />
        <TaskDetail taskList={arr}/>
      </section>
    </main>
  );
}

export default App;
