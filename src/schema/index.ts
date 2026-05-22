import z from "zod";

export const addTodoSchema = z.object({
  title: z.string().trim().nonempty(),
  description: z.string().trim().nonempty(),
});

export const idSchema = z.string().nonempty();
