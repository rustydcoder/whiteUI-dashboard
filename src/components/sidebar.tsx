"use client";
import Image from "next/image";
import NavItems from "./navItems";
import MessageIcon from "./messageIcon";

const Sidebar = () => {
  return (
    <div className="flex h-screen fixed left-0 top-0 bg-white flex-col justify-between w-20 border-r border-gray-100 py-3">
      <div>
        <Image
          src="/logo.png"
          alt="test Logo"
          width={33}
          height={30}
          className="my-4 mx-auto"
          priority
        />
        <NavItems />
      </div>
      <div className="flex-1 flex items-end justify-center relative">
        <Image src="/avatar.jpg" alt="Avatar" width={25} height={23} priority />
        <MessageIcon atr="bg-emerald-400 bottom-[-4px] right-[24px]" />
      </div>
    </div>
  );
};

export default Sidebar;
