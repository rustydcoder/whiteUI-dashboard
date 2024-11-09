"use client";
import { useState } from "react";
import MessageIcon from "./messageIcon";

type NavType = {
  icon: string;
};

const navLinks: any = [
  {
    icon: "icon-[cil--speedometer]",
  },
  {
    icon: "icon-[bx--briefcase]",
  },
  {
    icon: "icon-[majesticons--clipboard-check-line]",
  },
  {
    icon: "icon-[tabler--copy-minus]",
  },
  {
    icon: "icon-[codicon--calendar]",
  },
  {
    icon: "icon-[mdi--account-lock-outline]",
  },
  {
    icon: "icon-[fluent-mdl2--office-chat]",
  },
  {
    icon: "icon-[lucide--box]",
  },
  {
    icon: "icon-[ph--calculator]",
  },
  {
    icon: "icon-[la--folder-open]",
  },
  ,
  {
    // todo: change to proper icon
    // todo: change logo color on figma
    icon: "icon-[material-symbols-light--crisis-alert-rounded]",
  },
  {
    icon: "icon-[icons8--area-chart]",
  },
  {
    icon: "icon-[icons8--question-mark]",
  },
];

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {navLinks.map((link: NavType, index: number) => (
        <div
          key={link.icon}
          onClick={() => setActiveIndex(index)}
          className={
            "w-full px-3 my-1 text-md" +
            (activeIndex === index ? " border-r-2 border-r-blue-500" : "")
          }
        >
          <div
            className={
              "p-2 text-center relative rounded-md" +
              (activeIndex === index
                ? " bg-blue-100 text-blue-500"
                : " text-gray-500")
            }
          >
            <span className={link.icon}></span>
            {index === 6 && <MessageIcon atr="bg-emerald-400 top-2 right-4" />}
            {index == 11 && <MessageIcon atr="bg-red-500 top-2 right-4" />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavItems;
