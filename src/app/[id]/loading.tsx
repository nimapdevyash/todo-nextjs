export default function DetailsLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-6 py-10 animate-pulse">
      {/* Outer Card element mimicking the View Details wrapper */}
      <div className="w-full max-w-[500px] rounded-[20px] bg-white p-[35px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        {/* Top Status Pill placeholder */}
        <div className="mb-4 h-6 w-24 rounded-full bg-slate-200" />

        {/* Heading section elements */}
        <div className="mb-[30px]">
          <div className="h-10 w-56 rounded-xl bg-slate-200" />
          <div className="mt-2 h-4 w-72 rounded-lg bg-slate-200" />
        </div>

        {/* Inputs stack layout placeholders */}
        <div className="flex flex-col gap-5">
          {/* Static Title field block */}
          <div>
            <div className="mb-2 h-4 w-12 rounded bg-slate-200" />
            <div className="h-[49px] w-full rounded-[10px] bg-slate-100" />
          </div>

          {/* Static Description block */}
          <div>
            <div className="mb-2 h-4 w-20 rounded bg-slate-200" />
            <div className="h-[134px] w-full rounded-[10px] bg-slate-100" />
          </div>

          {/* Middle Task Status row card layout panel */}
          <div className="flex items-center justify-between rounded-xl border border-slate-100 p-4 bg-slate-50/50">
            <div>
              <div className="h-4 w-20 rounded bg-slate-200" />
              <div className="mt-1 h-3 w-36 rounded bg-slate-200" />
            </div>
            <div className="h-9 w-24 rounded-lg bg-slate-200" />
          </div>

          {/* Action Button Row cluster: Save, Back Home, Delete placeholders */}
          <div className="mt-2 flex flex-wrap gap-3">
            <div className="h-[46px] w-28 rounded-xl bg-slate-200" />
            <div className="h-[46px] w-24 rounded-xl bg-slate-200" />
            <div className="h-[46px] w-20 rounded-xl bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
