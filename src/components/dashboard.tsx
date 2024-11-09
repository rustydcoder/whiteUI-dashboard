import IconWrapper from "./iconWrapper";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-6">
      <div className="flex justify-between items-center">
        <div className="my-3 flex items-center space-x-2">
          <IconWrapper bgColor="bg-gray-200" textColor="text-gray-500">
            <span className="icon-[mdi--hamburger-menu]"></span>
          </IconWrapper>
          <h3 className="font-bold text-base">Dashboard</h3>
        </div>
        <div className="flex space-x-2">
          <IconWrapper bgColor="bg-gray-200" textColor="text-gray-500">
            <span className="icon-[la--search]"></span>
          </IconWrapper>
          <IconWrapper bgColor="bg-gray-200" textColor="text-gray-500">
            <span className="icon-[ion--add-circle-outline]"></span>
          </IconWrapper>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Dashboard;
