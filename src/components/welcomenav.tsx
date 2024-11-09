const WelcomeNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-[5rem] px-5">
      <div className="bg-neutral-950 w-14 rounded-md text-center p-2 text-white">
        <h1 className="text-2xl lg:text-3xl font-bold">W</h1>
      </div>
      <div className="my-2">
        <p className="text-gray-700 font-normal">Welcome,</p>
        <h2 className="font-bold text-base lg:text-lg">WhiteUI.Store</h2>
      </div>

      {children}
    </div>
  );
};

export default WelcomeNav;
