export interface Todo {
  __v: number;
  _id: string;
  createdAt: Date;
  description: string;
  isComplete: boolean;
  title: string;
  updatedAt: Date;
}

export interface PageProps {
  params: Promise<{ id: string }>;
}

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export type UpdateTodoFormProps = Pick<
  Todo,
  "_id" | "title" | "description" | "isComplete"
>;

export type ToggleButtonProps = { id: string; completed: boolean };
