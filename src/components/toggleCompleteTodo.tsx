"use client";

import { ToggleButtonProps } from "@/interfaces";
import { toggleTodoComplete } from "../actions/todoActions";

export default function ToggleButton({ id, completed }: ToggleButtonProps) {
  return (
    <button
      onClick={() => toggleTodoComplete(id)}
      className={`
        flex
        items-center
        justify-center
        rounded-xl
        px-4
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition
        duration-200
        hover:scale-105
        hover:shadow-lg
        active:scale-95
        ${
          completed
            ? "bg-gradient-to-r from-red-500 to-red-600"
            : "bg-gradient-to-r from-emerald-500 to-green-600"
        }
      `}
    >
      {completed ? " Mark Pending" : " Mark Complete"}
    </button>
  );
}
