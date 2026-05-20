"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DeleteButton from "../components/deleteTodo";

export default function TodoDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const unwrappedParams = React.use(params);
  const id = unwrappedParams.id;

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function fetchTodo() {
      try {
        const response = await fetch(
          `https://api.freeapi.app/api/v1/todos/${id}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch todo");
        }

        const { data } = await response.json();

        setTitle(data.title);
        setDescription(data.description);
        setCompleted(data.isComplete);
      } catch (error) {
        console.error(error);
      }
    }

    fetchTodo();
  }, [id]);

  async function updateHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch(`https://api.freeapi.app/api/v1/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update todo");
    }

    router.refresh();
  }

  async function handleToggleComplete() {
    const response = await fetch(
      `https://api.freeapi.app/api/v1/todos/toggle/status/${id}`,
      {
        method: "PATCH",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to toggle todo status");
    }

    const { data } = await response.json();

    setCompleted(data.isComplete);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-6 py-12">
      <div className="mx-auto max-w-2xl">
        {/* Card */}
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl">
          {/* Header */}
          <div className="mb-8">
            <div
              className={`
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                px-4
                py-2
                text-sm
                font-semibold
                ${
                  completed
                    ? "bg-green-100 text-green-700"
                    : "bg-amber-100 text-amber-700"
                }
              `}
            >
              <span
                className={`
                  h-2.5
                  w-2.5
                  rounded-full
                  ${completed ? "bg-green-500" : "bg-amber-500"}
                `}
              />

              {completed ? "Completed" : "Pending"}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Todo Details
            </h1>

            <p className="mt-3 text-slate-500">
              Update your task details and manage status easily.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={updateHandler} className="space-y-6">
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Title
              </label>

              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                rows={6}
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
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                "
              />
            </div>

            {/* Toggle */}
            <div
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                px-5
                py-4
              "
            >
              <div>
                <p className="font-semibold text-slate-800">Task Status</p>

                <p className="text-sm text-slate-500">
                  Mark this task as completed or pending
                </p>
              </div>

              <button
                type="button"
                onClick={handleToggleComplete}
                className={`
                  rounded-full
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition
                  hover:scale-105
                  active:scale-95
                  ${completed ? "bg-green-600" : "bg-amber-500"}
                `}
              >
                {completed ? "Completed" : "Pending"}
              </button>
            </div>

            {/* Footer */}
            <div
              className="
                flex
                flex-wrap
                gap-4
                border-t
                border-slate-200
                pt-6
              "
            >
              {/* Save */}
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
                  hover:-translate-y-1
                  hover:shadow-xl
                  active:scale-95
                "
              >
                Save Changes
              </button>

              {/* Home */}
              <button
                type="button"
                onClick={() => router.push("/")}
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
                Back Home
              </button>

              {/* Delete */}
              <DeleteButton id={id} />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
