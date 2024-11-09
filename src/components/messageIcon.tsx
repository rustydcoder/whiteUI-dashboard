const MessageIcon = ({ atr }: { atr: string }) => {
  return (
    <span
      className={"absolute w-2 h-2 rounded-full border-2 border-white " + atr}
    ></span>
  );
};

export default MessageIcon;
