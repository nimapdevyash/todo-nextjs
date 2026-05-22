"use client";

import { useActionState, useOptimistic, useTransition } from "react";
import { toggleTodoComplete, updateTodo } from "../../actions/todoActions";
import DeleteButton from "@/components/deleteTodo";
import { useRouter } from "next/navigation";
import { UpdateTodoFormProps } from "@/interfaces";

export default function UpdateTodoForm({
  _id,
  title,
  description,
  isComplete,
}: UpdateTodoFormProps) {
  const [state, formFunctionWithId, isPending] = useActionState(
    updateTodo.bind(null, _id),
    { error: null, success: false },
  );

  const [optimisticState, setOptimisticState] = useOptimistic(
    isComplete,
    (curentState: boolean, newState: boolean) => newState,
  );

  const [isPendingTransition, startTransition] = useTransition();

  const router = useRouter();

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
                  isComplete
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
                  ${isComplete ? "bg-green-500" : "bg-amber-500"}
                `}
              />

              {isComplete ? "Completed" : "Pending"}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Todo Details
            </h1>

            <p className="mt-3 text-slate-500">
              Update your task details and manage status easily.
            </p>
          </div>

          {/* Form */}
          <form action={formFunctionWithId} className="space-y-6">
            {/* Title */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Title
              </label>

              <input
                type="text"
                name="title"
                defaultValue={title}
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
                defaultValue={description}
                name="description"
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
                onClick={() =>
                  startTransition(async () => {
                    setOptimisticState(!optimisticState);
                    await toggleTodoComplete(_id);
                  })
                }
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
                  ${optimisticState ? "bg-green-600" : "bg-amber-500"}
                `}
              >
                {optimisticState ? "Completed" : "Pending"}
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
                {isPending ? "Updating..." : "Save Changes"}
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
              <DeleteButton id={_id} />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
