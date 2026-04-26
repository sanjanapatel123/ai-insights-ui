import { useState } from "react";
import { AIResponse } from "../lib/types";
import { responses } from "../lib/mockData";

export function useAI() {
  const [data, setData] = useState<AIResponse>({
    status: "idle",
    query: ""
  });

  const getResponse = (query: string): AIResponse => {
    const q = query.toLowerCase();

    if (q.includes("revenue")) return responses.revenue;
    if (q.includes("region")) return responses.region;
    if (q.includes("conversion")) return responses.conversion;

    // fallback
    return {
      status: "error",
      query,
      error: "No insights found for this query"
    };
  };

  const runQuery = (query: string) => {
    setData({ status: "loading", query });

    setTimeout(() => {
      setData({
        status: "partial",
        query,
        result: {
          summary: "Analyzing patterns...",
          confidence: 0,
          signals: [],
          explanation: { steps: [], dataSources: [] },
          actions: []
        }
      });
    }, 800);

    setTimeout(() => {
      const res = getResponse(query);
      setData({ ...res, query });
    }, 2000);
  };

  return { data, runQuery };
}