import Button from "./components/createTodo";
import Todo from "./components/todo";
import TodosNotFound from "./components/todosNotFound";

export interface Todo {
  __v: number;
  _id: string;
  createdAt: Date;
  description: string;
  isComplete: boolean;
  title: string;
  updatedAt: Date;
}

export default async function Home() {
  const response = await fetch("https://api.freeapi.app/api/v1/todos");

  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }

  const { data: todos } = await response.json();

  const completedTodos = todos.filter((todo: Todo) => todo.isComplete).length;

  const pendingTodos = todos.length - completedTodos;

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900">
              My Todos
            </h1>

            <p className="mt-3 text-base text-slate-500">
              Organize your work and life beautifully ✨
            </p>
          </div>

          <Button />
        </div>

        {/* Stats */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Total */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm font-medium text-slate-500">Total Todos</p>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              {todos.length}
            </h2>
          </div>

          {/* Completed */}
          <div className="rounded-3xl border border-green-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm font-medium text-slate-500">Completed</p>

            <h2 className="mt-4 text-4xl font-bold text-green-600">
              {completedTodos}
            </h2>
          </div>

          {/* Pending */}
          <div className="rounded-3xl border border-amber-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <p className="text-sm font-medium text-slate-500">Pending</p>

            <h2 className="mt-4 text-4xl font-bold text-amber-500">
              {pendingTodos}
            </h2>
          </div>
        </div>

        {/* Todos Section */}
        <section>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Your Tasks</h2>

            <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
              {todos.length} Tasks
            </span>
          </div>

          {todos.length === 0 ? (
            <TodosNotFound />
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {todos.map((t: Todo) => (
                <Todo key={t._id} todo={t} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}
