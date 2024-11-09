import IconWrapper from "./iconWrapper";
type ItemType = { icon: string; text: string; val: string };

const items: any = [
  {
    icon: "icon-[material-symbols-light--add-shopping-cart]",
    text: "Item sale #340-00",
    val: "+$890.00",
  },
  {
    icon: "icon-[la--user-edit]",
    text: "New lead created",
    val: "30 min",
  },
  {
    icon: "icon-[material-symbols-light--add-shopping-cart]",
    text: "Item sale #360-20",
    val: "+$940.00",
  },
  ,
  {
    icon: "icon-[ion--cloud-upload-outline]",
    text: "Items upload complete",
    val: "45 min",
  },
  {
    icon: "icon-[mdi--bell-outline]",
    text: "Email notifications sent",
    val: "2 hrs",
  },
];

const LatestUpdates = () => {
  return (
    <div className="mt-6">
      <h3 className="font-bold text-sm">Latest Updates</h3>

      <div className="mt-2 flex flex-col space-y-2">
        {items.map((item: ItemType) => (
          <div
            className="bg-neutral-50 rounded-md flex justify-between items-center py-2 px-4"
            key={item.icon}
          >
            <div className="flex space-x-2 items-center">
              <IconWrapper bgColor="bg-blue-100" textColor="text-blue-600">
                <span className={item.icon}></span>
              </IconWrapper>

              <span className="text-xs font-bold">{item.text}</span>
            </div>
            <span className="text-gray-400 font-bold text-xs">{item.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestUpdates;
