"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addTodo(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");

  const response = await fetch("https://api.freeapi.app/api/v1/todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  redirect("/");
}

export async function deleteTodo(id: string) {
  const response = await fetch(`https://api.freeapi.app/api/v1/todos/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  revalidatePath("/");
}

export async function toggleTodoComplete(id: string) {
  const response = await fetch(
    `https://api.freeapi.app/api/v1/todos/toggle/status/${id}`,
    {
      method: "PATCH",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to toggle todo status");
  }

  revalidatePath("/");
}
