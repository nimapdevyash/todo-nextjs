import { type Todo } from "@/interfaces";
import DeleteButton from "./deleteTodo";
import ToggleButton from "./toggleCompleteTodo";
import ViewDetails from "./viewDetails";

export default function Todo({ todo }: { todo: Todo }) {
  return (
    <li
      className={`
        flex
        min-h-[300px]
        flex-col
        justify-between
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
        transition
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
        ${todo.isComplete ? "border-green-200" : "border-amber-200"}
      `}
    >
      {/* Top Content */}
      <div>
        {/* Status Badge */}
        <div
          className={`
            mb-5
            inline-flex
            items-center
            gap-2
            rounded-full
            px-4
            py-2
            text-xs
            font-bold
            tracking-wide
            ${
              todo.isComplete
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
              ${todo.isComplete ? "bg-green-500" : "bg-amber-500"}
            `}
          />

          {todo.isComplete ? "Completed" : "Pending"}
        </div>

        {/* Title */}
        <h3
          className="
            mb-4
            text-2xl
            font-bold
            leading-snug
            text-slate-900
          "
        >
          {todo.title}
        </h3>

        {/* Description */}
        <p
          className="
            line-clamp-4
            text-[15px]
            leading-7
            text-slate-500
          "
        >
          {todo.description || "No description available for this task."}
        </p>
      </div>

      {/* Footer */}
      <div
        className="
          mt-8
          border-t
          border-slate-200
          pt-5
        "
      >
        {/* Date */}
        <div
          className="
            mb-5
            flex
            items-center
            justify-between
            gap-3
            text-sm
            text-slate-400
          "
        >
          <span>Created</span>

          <span className="font-medium text-slate-500">
            {new Date(todo.createdAt).toLocaleDateString()}
          </span>
        </div>

        {/* Actions */}
        <div
          className="
            flex
            items-center
            justify-around
          "
        >
          <ToggleButton id={todo._id} completed={todo.isComplete} />
          <DeleteButton id={todo._id} />
          <ViewDetails todo={todo} />
        </div>
      </div>
    </li>
  );
}
