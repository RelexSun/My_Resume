import React from "react";

export default function ContentSection({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-[#1e56a0] font-extrabold mb-4 pb-1 border-b-2 border-[#1e56a0] tracking-tight text-sm uppercase">
        {title}
      </h2>
      <div>{children}</div>
    </>
  );
}
