"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const response = await fetch(`https://api.freeapi.app/api/v1/todos/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete todo");
    }

    router.refresh();
  }

  return (
    <button
      onClick={handleDelete}
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
