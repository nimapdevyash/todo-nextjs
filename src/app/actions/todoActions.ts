"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z from "zod";

const addTodoSchema = z.object({
  title: z.string().trim().nonempty(),
  description: z.string().trim().nonempty(),
});

const idSchema = z.string().nonempty();

export async function addTodo(formData: FormData) {
  const validatedData = addTodoSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!validatedData.success) throw new Error(validatedData.error.message);

  const response = await fetch("https://api.freeapi.app/api/v1/todos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: validatedData.data.title,
      description: validatedData.data.description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create todo");
  }

  redirect("/");
}

export async function deleteTodo(id: string) {
  const validatedId = idSchema.safeParse(id);

  if (!validatedId.success) {
    throw new Error("Invalid todo id");
  }

  const response = await fetch(
    `https://api.freeapi.app/api/v1/todos/${validatedId.data}`,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete todo");
  }

  revalidatePath("/");
}

export async function toggleTodoComplete(id: string) {
  const validatedId = idSchema.safeParse(id);

  if (!validatedId.success) {
    throw new Error("Invalid todo id");
  }

  const response = await fetch(
    `https://api.freeapi.app/api/v1/todos/toggle/status/${validatedId.data}`,
    {
      method: "PATCH",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to toggle todo status");
  }

  revalidatePath("/");
}
