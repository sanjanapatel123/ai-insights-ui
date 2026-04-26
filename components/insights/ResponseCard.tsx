"use client";

import { AIResponse } from "../../lib/types";
import ConfidenceBar from "./ConfidenceBar";
import SignalsList from "./SignalsList";
import ExplanationDrawer from "./ExplanationDrawer";
import ActionPanel from "./ActionPanel";

type Props = {
  data: AIResponse;
};

export default function ResponseCard({ data }: Props) {
  // 💤 Idle
  if (data.status === "idle") {
    return (
      <div className="text-gray-400 text-sm text-center py-10">
        Ask a question to generate insights
      </div>
    );
  }

  // 🟡 Loading (Skeleton)
  if (data.status === "loading") {
    return (
      <div className="bg-white p-6 rounded-xl shadow space-y-4 animate-pulse">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-2 bg-gray-200 rounded w-full" />
        <div className="h-2 bg-gray-200 rounded w-5/6" />

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-1/2" />
          <div className="h-3 bg-gray-200 rounded w-2/3" />
        </div>
      </div>
    );
  }

  // ❌ Error + Retry (IMPORTANT)
  if (data.status === "error") {
    return (
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="text-red-500 font-medium">
          Unable to generate insights
        </div>

        <p className="text-sm text-gray-500">
          This may be due to insufficient or inconsistent data.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!data.result) return null;

  const { summary, confidence, signals, explanation, actions } = data.result;

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md space-y-4 transition-all duration-500 ease-in-out">
      {/* 🔄 Query continuity (VERY IMPORTANT) */}
      <div className="text-xs text-gray-500">Query: {data.query}</div>

      {/* 🟠 Partial state */}
      {data.status === "partial" && (
        <div className="text-xs text-blue-500 animate-pulse">
          Generating insights...
        </div>
      )}

      {/* 🧾 Summary */}
      <h2 className="text-lg font-semibold leading-relaxed">{summary}</h2>

      {/* ✅ Full data */}
      {data.status === "success" && (
        <>
          {/* Confidence */}
          <div>
            <ConfidenceBar value={confidence} />
            <p className="text-xs text-gray-400 mt-1">
              Based on data completeness & consistency
            </p>
          </div>

          {/* Signals */}
          <SignalsList signals={signals} />

          {/* 🔴 Low confidence state */}
          {confidence < 50 && (
            <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-sm text-red-600">
              ⚠ This insight has low confidence. Consider validating with raw
              data before making decisions.
            </div>
          )}

          {/* Explanation */}
          <ExplanationDrawer explanation={explanation} />

          {/* Actions */}
          <ActionPanel actions={actions} />
        </>
      )}
    </div>
  );
}
