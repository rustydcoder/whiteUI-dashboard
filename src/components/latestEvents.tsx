import Button from "./button";
import IconWrapper from "./iconWrapper";

const items: { icon: string; text: string; client: string; val: string }[] = [
  {
    icon: "icon-[la--file-invoice-dollar]",
    text: "Invoice #AA-04-19-1890678",
    client: "New Madieton LLC.",
    val: "$118.00",
  },
  {
    icon: "icon-[la--user-clock]",
    text: "Client Bernard Stanley",
    client: "bernard.stanley@gmail.com",
    val: "$3208.00",
  },
  {
    icon: "icon-[la--map-marked-alt]",
    text: "Meeting with the client",
    client: "24 Vandervort Springs",
    val: "29 Oct 2019",
  },
  {
    icon: "icon-[la--file-invoice-dollar]",
    text: "Invoice #AA-04-19-1890243",
    client: "Tyriquemouth LLC.",
    val: "$578.00",
  },
];

const LatestEvents = () => {
  return (
    <div className="bg-white rounded-md py-5">
      <div className="flex justify-between items-center px-4">
        <h3 className="font-bold text-sm">Latest Events</h3>
        <Button text="View all" border />
      </div>
      <div className="flex justify-between my-3 px-4 py-2 bg-gray-50 text-xs font-medium text-gray-500">
        <p>Event</p>
        <p>Details</p>
      </div>

      <div className="flex flex-col px-4 space-y-2">
        {items.map((item) => (
          <div key={item.val} className="flex justify-between">
            <div className="grid grid-cols-[40px_minmax(100px,_1fr)] gap-x-2">
              <IconWrapper bgColor="bg-blue-200" textColor="text-blue-600">
                <span className={item.icon}></span>
              </IconWrapper>
              <div>
                <p className="font-bold">{item.text}</p>
                <p>{item.client}</p>
              </div>
            </div>
            <p className="font-bold">{item.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestEvents;
