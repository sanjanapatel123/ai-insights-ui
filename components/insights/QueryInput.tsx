// "use client";

// import { useState } from "react";

// type Props = {
//   onSubmit: (query: string) => void;
// };

// export default function QueryInput({ onSubmit }: Props) {
//   const [query, setQuery] = useState("");

//   return (
//     <div className="bg-white p-4 rounded-xl shadow-sm border">
//       <input
//         type="text"
//         placeholder="Ask something like: Why did revenue drop last week?"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         onKeyDown={(e) => {
//           if (e.key === "Enter" && query.trim()) {
//             onSubmit(query);
//             setQuery("");
//           }
//         }}
//         className="w-full p-3 border rounded-lg outline-none"
//       />

//       <button
//         onClick={() => {
//           if (!query.trim()) return;
//           onSubmit(query);
//           setQuery("");
//         }}
//         disabled={!query.trim()}
//         className="relative overflow-hidden mt-3 px-4 py-2 bg-black text-white rounded-lg
//              hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50"
//       >
//         <span className="relative z-10">Analyze</span>

//         {/* Shine effect */}
//         <span className="absolute inset-0 overflow-hidden">
//           <span className="shine" />
//         </span>
//       </button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

type Props = {
  onSubmit: (query: string) => void;
};

const suggestions = [
  "Why revenue dropped?",
  "Which region is underperforming?",
  "What caused conversion decline?",
];

export default function QueryInput({ onSubmit }: Props) {
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    if (!query.trim()) return;
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border w-full">
      {/* Input */}
      <input
        type="text"
        placeholder="Ask something like: Why did revenue drop last week?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        className="w-full p-3 border rounded-lg outline-none focus:ring-2 focus:ring-black/20 transition"
      />

      {/* 🔥 Suggestions (NEW) */}
      <div className="mt-3 flex flex-wrap gap-2">
        {suggestions.map((q) => (
          <button
            key={q}
            onClick={() => setQuery(q)} // 👈 fill input
            className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={!query.trim()}
        className="relative overflow-hidden mt-4 px-4 py-2 bg-black text-white rounded-lg 
                   hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50"
      >
        <span className="relative z-10">Analyze</span>

        {/* Shine effect */}
        <span className="absolute inset-0 overflow-hidden">
          <span className="shine" />
        </span>
      </button>
    </div>
  );
}
