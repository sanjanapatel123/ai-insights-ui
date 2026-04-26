import { AIAction } from "../../lib/types";

type Props = {
  actions: AIAction[];
};

export default function ActionPanel({ actions }: Props) {
  return (
    <div className="border-t pt-3">
      <p className="text-sm font-medium mb-2">Next Actions</p>

      <div className="flex flex-wrap gap-2">
        {actions.map((action) => (
          <button
            key={action.id}
            className="px-3 py-1 text-sm border rounded-lg hover:bg-gray-100 transition"
          >
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
}
