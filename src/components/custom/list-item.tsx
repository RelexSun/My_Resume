import React from "react";

export default function ListItem({ text }: { text: string }) {
  return (
    <div className="flex gap-2 items-start">
      <span className="text-[#1e56a0] mt-1">•</span>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  );
}
