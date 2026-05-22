"use client";

import { Todo } from "@/interfaces";
import { useRouter } from "next/navigation";

export default function ViewDetails({ todo }: { todo: Todo }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/${todo._id}`)}
      className="
        rounded-xl
        bg-blue-50
        px-4
        py-2.5
        text-sm
        font-semibold
        text-blue-600
        transition
        duration-200
        hover:bg-blue-100
        hover:shadow-md
        active:scale-95
      "
    >
      View Details
    </button>
  );
}
