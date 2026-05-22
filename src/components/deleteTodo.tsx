"use client";

import z from "zod";
import { deleteTodo } from "../app/actions/todoActions";
import { useRouter } from "next/navigation";

const idSchema = z.string().nonempty();

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();

  async function handleDelete() {
    const validatedId = idSchema.safeParse(id);

    if (!validatedId.success) {
      throw new Error("Invalid todo id");
    }

    await deleteTodo(validatedId.data);

    router.push("/");
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
