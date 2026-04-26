export type AIStatus = "idle" | "loading" | "partial" | "success" | "error";

export type AISignal = {
  label: string;
  impact: "high" | "medium" | "low";
  value: string;
};

export type AIExplanation = {
  steps: string[];
  dataSources: string[];
};

export type AIAction = {
  id: string;
  label: string;
};

export type AIResult = {
  summary: string;
  confidence: number;
  signals: AISignal[];
  explanation: AIExplanation;
  actions: AIAction[];
};

export type AIResponse = {
  status: AIStatus;
  query: string;
  result?: AIResult;
  error?: string;
};
