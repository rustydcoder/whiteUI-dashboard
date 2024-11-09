const IconWrapper = ({
  children,
  textColor,
  bgColor,
}: {
  children: React.ReactNode;
  textColor: string;
  bgColor: string;
}) => {
  return (
    <div
      className={`flex justify-center items-center p-2 text-xs rounded-md ${bgColor} ${textColor}`}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
