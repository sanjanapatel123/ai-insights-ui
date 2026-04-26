"use client";

import { useAI } from "../hooks/useAI";
import QueryInput from "../components/insights/QueryInput";
import ResponseCard from "../components/insights/ResponseCard";

export default function Home() {
  const { data, runQuery } = useAI();

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      
      <div className="max-w-2xl mx-auto space-y-6">
        
        <h1 className="text-2xl font-bold">
          AI Insights Assistant
        </h1>

        <QueryInput onSubmit={runQuery} />

        <ResponseCard data={data} />

      </div>

    </main>
  );
}