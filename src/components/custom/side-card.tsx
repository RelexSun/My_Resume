export default function SideCardItem({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-[#1e56a0] text-white font-extrabold tracking-tighter text-center py-2 rounded uppercase">
        {title}
      </div>
      <div className="space-y-4 mt-3">{children}</div>
    </div>
  );
}
