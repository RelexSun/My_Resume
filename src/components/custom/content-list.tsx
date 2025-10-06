import ListItem from "./list-item";

export default function ContentList({
  items,
}: {
  items: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <div className="  mb-4">
      {Array.isArray(items) ? (
        items.map((item, index) => <ListItem key={index} text={item} />)
      ) : (
        <ListItem text={items} />
      )}
    </div>
  );
}
