import { getTodoById } from "../actions/todoActions";
import UpdateTodoForm from "./updateTodoForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TodoDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const todoData = await getTodoById(id);
  return <UpdateTodoForm {...todoData} />;
}
