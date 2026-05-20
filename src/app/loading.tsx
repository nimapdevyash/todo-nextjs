export default function Loading() {
  return (
    // 1. Same main container padding and background gradient as your Home Page
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-6 py-10 animate-pulse">
      <div className="mx-auto max-w-7xl">
        {/* 2. Header Skeleton */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            {/* Fake Title block */}
            <div className="h-12 w-48 rounded-2xl bg-slate-200" />
            {/* Fake Subtitle block */}
            <div className="mt-3 h-5 w-64 rounded-xl bg-slate-200" />
          </div>
          {/* Fake Create Button block */}
          <div className="h-11 w-32 rounded-xl bg-slate-200" />
        </div>

        {/* 3. Stats Section Skeleton */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Repeat an empty styled div 3 times to mimic your 3 cards */}
          <div className="h-32 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm" />
          <div className="h-32 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm" />
          <div className="h-32 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm" />
        </div>

        {/* 4. Task Grid Skeleton */}
        <section>
          {/* Fake section heading */}
          <div className="mb-6 h-8 w-36 rounded-xl bg-slate-200" />

          {/* Fake grid array matching your real layout configuration */}
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {/* Render 3 to 6 fake card blocks here to fill up the screen preview */}
            <div className="h-48 rounded-3xl border border-slate-200 bg-white" />
            <div className="h-48 rounded-3xl border border-slate-200 bg-white" />
            <div className="h-48 rounded-3xl border border-slate-200 bg-white" />
          </div>
        </section>
      </div>
    </main>
  );
}
