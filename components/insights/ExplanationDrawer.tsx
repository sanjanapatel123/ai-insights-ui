"use client";

import { useState } from "react";
import { AIExplanation } from "../../lib/types";

type Props = {
  explanation: AIExplanation;
};

export default function ExplanationDrawer({ explanation }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t pt-3">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm text-blue-600 hover:underline"
      >
        {open ? "Hide explanation" : "Why this result?"}
      </button>

      {open && (
        <div className="mt-3 text-sm space-y-3 bg-gray-50 p-3 rounded-lg">
          {/* Steps */}
          <div>
            <p className="font-medium">Reasoning</p>
            <ul className="list-disc ml-5">
              {explanation.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>

          {/* Data Sources */}
          <div>
            <p className="font-medium">Data Sources</p>
            <ul className="list-disc ml-5">
              {explanation.dataSources.map((src, i) => (
                <li key={i}>{src}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
