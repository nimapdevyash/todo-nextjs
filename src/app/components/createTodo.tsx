"use client";

import { useRouter } from "next/navigation";

export default function Button() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/create")}
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
      + Create Todo
    </button>
  );
}
