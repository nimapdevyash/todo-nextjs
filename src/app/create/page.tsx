"use client";

import { addTodo } from "../actions/todoActions";

export default function CreatePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-6 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Card */}
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              New Todo
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Create Todo
            </h1>

            <p className="mt-3 text-slate-500">
              Add a new task and stay organized throughout your day ✨
            </p>
          </div>

          {/* Form */}
          <form action={addTodo} className="space-y-6">
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter todo title"
                required
                className="
                  w-full
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-4
                  text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                "
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description
              </label>

              <textarea
                name="description"
                rows={6}
                required
                placeholder="Write something about this todo..."
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-5
                  py-4
                  text-slate-900
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                "
              />
            </div>

            {/* Footer */}
            <div className="flex flex-wrap gap-4 border-t border-slate-200 pt-6">
              {/* Submit */}
              <button
                type="submit"
                className="
                  rounded-2xl
                  bg-gradient-to-r
                  from-blue-600
                  to-indigo-600
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-blue-200
                  transition
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-xl
                  active:scale-95
                "
              >
                Create Todo
              </button>

              {/* Reset */}
              <button
                type="reset"
                className="
                  rounded-2xl
                  border
                  border-slate-300
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-slate-700
                  transition
                  hover:bg-slate-100
                  active:scale-95
                "
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
