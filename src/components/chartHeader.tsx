import Button from "./button";
import IconWrapper from "./iconWrapper";

const ChartHeader = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-between px-4 items-center">
      <h3 className="font-bold text-sm">{text}</h3>
      <div className="flex space-x-0">
        <Button text="Day" border />
        <Button text="Week" />
        <Button text="Month" />
        <IconWrapper bgColor="bg-gray-200" textColor="text-gray-500">
          <span className="icon-[codicon--calendar]"></span>
        </IconWrapper>
      </div>
    </div>
  );
};

export default ChartHeader;
