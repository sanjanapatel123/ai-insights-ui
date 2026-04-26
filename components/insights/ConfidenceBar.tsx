type Props = {
  value: number;
};

export default function ConfidenceBar({ value }: Props) {
  let color = "bg-green-500";
  let label = "High";

  if (value < 80) {
    color = "bg-yellow-500";
    label = "Medium";
  }

  if (value < 50) {
    color = "bg-red-500";
    label = "Low";
  }

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-xs text-gray-400">
          based on data completeness & consistency
        </span>
        <span>
          {value}% ({label})
        </span>
      </div>

      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded ${color} transition-all`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
