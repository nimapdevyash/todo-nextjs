"use client";

import { useRouter } from "next/navigation";

export default function ToggleButton({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) {
  const router = useRouter();

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

    router.refresh();
  }

  return (
    <button
      onClick={handleToggleComplete}
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
