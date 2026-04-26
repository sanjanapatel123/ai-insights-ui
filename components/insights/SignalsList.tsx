import { AISignal } from "../../lib/types";

type Props = {
  signals: AISignal[];
};

export default function SignalsList({ signals }: Props) {
  return (
    <div>
      <h3 className="font-medium mb-2">Key Signals</h3>

      <ul className="space-y-2 text-sm">
        {signals.map((s, i) => (
          <li key={i} className="flex justify-between border-b pb-1">
            <span>{s.label}</span>
            <span className="font-medium">{s.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
