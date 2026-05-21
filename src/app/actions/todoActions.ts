"use server";

import { refresh } from "next/cache";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import z, { success } from "zod";

const addTodoSchema = z.object({
  title: z.string().trim().nonempty(),
  description: z.string().trim().nonempty(),
});

const idSchema = z.string().nonempty();

export async function addTodo(previousState: unknown, formData: FormData) {
  const validatedData = addTodoSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });

  if (!validatedData.success) {
    return { error: validatedData.error.message, success: false };
  }

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
    return {
      error: "Failed to create todo",
      success: false,
    };
  }

  redirect("/");

  return {
    error: null,
    success: true,
  };
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

  redirect("/");
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

export async function updateTodo(
  id: string,
  previousState: unknown,
  form: FormData,
) {
  const title = form.get("title") as string;
  const description = form.get("description") as string;

  const response = await fetch(`https://api.freeapi.app/api/v1/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      description,
    }),
  });

  if (!response.ok) {
    return {
      error: "Failed to update todo",
      success: false,
    };
  }

  revalidatePath("/");

  return {
    error: null,
    success: true,
  };
}

export async function getTodoById(id: string) {
  const validatedId = idSchema.safeParse(id);

  if (!validatedId.success) {
    throw new Error("Invalid todo id");
  }

  const response = await fetch(
    `https://api.freeapi.app/api/v1/todos/${validatedId.data}`,
  );

  if (!response.ok) {
    throw new Error("Failed to get todo by id");
  }

  const { data } = await response.json();

  return data;
}
