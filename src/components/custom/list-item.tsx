import React from "react";

export default function ListItem({ text }: { text: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start space-y-1">
      <span className="text-[#1e56a0] mt-1/2">•</span>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
}
