"use client";

import { deleteTodo } from "../app/actions/todoActions";

export default function DeleteButton({ id }: { id: string }) {
  return (
    <button
      onClick={() => deleteTodo(id)}
      className="
        rounded-xl
        border
        border-red-200
        bg-red-50
        px-4
        py-2.5
        text-sm
        font-semibold
        text-red-600
        transition
        duration-200
        hover:bg-red-100
        hover:shadow-md
        active:scale-95
      "
    >
      Delete
    </button>
  );
}
