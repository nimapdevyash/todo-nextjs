export default function TodosNotFound() {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        rounded-3xl
        border
        border-dashed
        border-slate-300
        bg-white
        px-6
        py-20
        text-center
        shadow-sm
      "
    >
      {/* Icon */}
      <div
        className="
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-slate-100
          text-4xl
        "
      >
        📝
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-slate-900">No Todos Found</h3>

      {/* Description */}
      <p className="mt-3 max-w-md text-slate-500">
        You don&apos;t have any tasks yet. Start by creating your first todo and
        stay productive 🚀
      </p>
    </div>
  );
}
