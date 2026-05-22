"use client";

import { ErrorProps } from "@/interfaces";
import React, { useEffect } from "react";

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service (Sentry, LogRocket, etc.)
    console.error("Logged App Error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-slate-50 to-white px-6 py-10">
      <div className="w-full max-w-md rounded-3xl border border-red-100 bg-white p-8 text-center shadow-xl">
        {/* Warning Icon Badge */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl">
          ⚠️
        </div>

        <h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-900">
          Something went wrong!
        </h2>

        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          {error.message ||
            "We ran into an issue while loading your todo dashboard. Please try again."}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
          >
            Try Again
          </button>

          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition cursor-pointer"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </main>
  );
}
