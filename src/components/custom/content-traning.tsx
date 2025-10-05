import ListItem from "./list-item";

export default function ContentTraining({
  title,
  date,
  school,
  items,
}: {
  title: string;
  date: string;
  school: string;
  items: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <>
      <div className="flex justify-between font-bold text-sm">
        <span>{title}</span>
        <span className="">{date}</span>
      </div>
      <p className="text-[#1e56a0] mb-2 font-semibold text-sm">{school}</p>
      <div className="  mb-4">
        {Array.isArray(items) ? (
          items.map((item, index) => <ListItem key={index} text={item} />)
        ) : (
          <ListItem text={items} />
        )}
      </div>
    </>
  );
}
