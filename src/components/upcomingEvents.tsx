const items: { color: string; text: string; subtitle: string; time: string }[] =
  [
    {
      color: "bg-blue-500",
      text: "Meeting with a client",
      subtitle: "Tell how to boost a website traffic",
      time: "05:48AM",
    },
    {
      color: "bg-amber-400",
      text: "New project discussion",
      subtitle: "Business Cards Does Your Business",
      time: "10:28AM",
    },
  ];

const UpcomingEvents = () => {
  return (
    <div className="mt-8">
      <h3 className="font-bold text-sm">Upcoming events</h3>

      <div className="mt-2 flex flex-col space-y-2">
        {items.map((item) => (
          <div
            className="bg-neutral-50 rounded-md flex flex-col space-y-1 py-3 px-4"
            key={item.time}
          >
            <div className="flex justify-between">
              <div className="flex space-x-1 items-center">
                <span
                  className={"block w-2 h-2 rounded-full " + item.color}
                ></span>
                <span className="text-xs font-bold text-blue-500">
                  {item.time}
                </span>
              </div>
              <span className="icon-[pepicons-pencil--dots-x]"></span>
            </div>
            <p className="font-bold text-xs">{item.text}</p>
            <p className="text-gray-500 text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
