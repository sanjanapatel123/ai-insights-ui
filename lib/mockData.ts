import { AIResponse } from "./types";

export const responses: Record<string, AIResponse> = {
  revenue: {
    status: "success",
    query: "",
    result: {
      summary:
        "Revenue decreased by 12% due to reduced conversions in EU region.",
      confidence: 72,
      signals: [
        { label: "EU Sales", impact: "high", value: "-18%" },
        { label: "Ad Spend", impact: "medium", value: "-10%" },
        { label: "Conversion Rate", impact: "high", value: "-6%" },
      ],
      explanation: {
        steps: [
          "Compared weekly revenue trends",
          "Analyzed region performance",
          "Detected EU drop",
        ],
        dataSources: ["Sales DB", "Marketing Analytics"],
      },
      actions: [
        { id: "1", label: "View region breakdown" },
        { id: "2", label: "Compare last 4 weeks" },
      ],
    },
  },

  region: {
    status: "success",
    query: "",
    result: {
      summary:
        "APAC region is underperforming with 9% lower growth than forecast.",
      confidence: 65,
      signals: [
        { label: "Customer Drop", impact: "high", value: "-11%" },
        { label: "Ad CTR", impact: "medium", value: "-5%" },
      ],
      explanation: {
        steps: [
          "Analyzed region-wise performance",
          "Compared against forecast",
          "Detected APAC decline",
        ],
        dataSources: ["Sales DB"],
      },
      actions: [
        { id: "1", label: "View APAC report" },
        { id: "2", label: "Adjust campaign" },
      ],
    },
  },

  conversion: {
    status: "success",
    query: "",
    result: {
      summary: "Conversion rate dropped by 6% due to checkout friction.",
      confidence: 48,
      signals: [
        { label: "Checkout Drop-off", impact: "high", value: "+14%" },
        { label: "Page Load Time", impact: "medium", value: "+2s" },
      ],
      explanation: {
        steps: [
          "Analyzed funnel data",
          "Detected checkout drop-offs",
          "Linked to performance issues",
        ],
        dataSources: ["Product Analytics"],
      },
      actions: [
        { id: "1", label: "View funnel analysis" },
        { id: "2", label: "Optimize checkout UX" },
      ],
    },
  },
};
