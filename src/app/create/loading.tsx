export default function CreateLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-6 py-10 animate-pulse">
      {/* Container matching your form layout exactly */}
      <div className="w-full max-w-[500px] rounded-[20px] bg-white p-[35px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        {/* Header Block placeholders */}
        <div className="mb-[30px] flex flex-col items-center">
          <div className="h-10 w-48 rounded-xl bg-slate-200" />
          <div className="mt-2 h-4 w-64 rounded-lg bg-slate-200" />
        </div>

        {/* Form fields skeleton layout */}
        <div className="flex flex-col gap-5">
          {/* Title input field skeleton */}
          <div>
            <div className="mb-2 h-4 w-12 rounded bg-slate-200" />
            <div className="h-[49px] w-full rounded-[10px] bg-slate-100" />
          </div>

          {/* Description field skeleton */}
          <div>
            <div className="mb-2 h-4 w-20 rounded bg-slate-200" />
            <div className="h-[134px] w-full rounded-[10px] bg-slate-100" />
          </div>

          {/* Checkbox item skeleton */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-[18px] w-[18px] rounded bg-slate-200" />
            <div className="h-4 w-32 rounded bg-slate-200" />
          </div>

          {/* Submit button skeleton */}
          <div className="h-[52px] w-full rounded-[12px] bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
