"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ChevronsLeft,
  GraduationCap,
  Menu,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { ElementRef, useRef, useState } from "react";

const asideList = [
  [<Menu key={1} />, "수업목록"],
  [<GraduationCap key={2} />, "학습현황"],
];

const Sidebar = () => {
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navbarRef = useRef<ElementRef<"div">>(null);
  const sidebarRef = useRef<ElementRef<"aside">>(null);

  const collapse = () => {
    if (sidebarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const resetWidth = () => {
    if (sidebarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = "291.2px";

      setTimeout(() => setIsResetting(false), 300);
    }
  };
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "left-0 h-full w-[291.2px] bg-[#22222C] flex justify-center items-center z-[999]",
          isResetting && "transition-all ease-in-out duration-300"
        )}
      >
        <div className={cn("p-2 h-full", isCollapsed && "w-0 p-0")}>
          <div
            className={cn(
              "border-gray-500 border-solid border-2 h-full",
              isCollapsed && ""
            )}
          >
            <div className="flex justify-between items-center my-2">
              <div className="text-base text-blue-800 flex items-center ml-4">
                <CheckCircle2 size={20} />
                &nbsp;진행중
              </div>

              <div
                className="cursor-pointer h-7 w-7 mr-2 rounded-sm hover:bg-neutral-600 transition text-muted-foreground"
                role="button"
                onClick={collapse}
              >
                <ChevronsLeft className="h-7 w-7" size={28} color={"gray"} />
              </div>
            </div>
            <a className="text-2xl font-bold text-white m-[1.2rem]">
              프론트엔드 강의
            </a>
            <div className="ml-[1.2rem] flex items-center">
              <a className="text-[0.9rem] text-gray-300">수강 시간</a>
              <a className="text-[0.7rem] text-white m-[1.2rem] ml-12">
                24 시간
              </a>
            </div>
            <div className="m-4 h-[0.15rem] bg-gray-500" />
            <div className="ml-[1.2rem] flex flex-col items-start">
              <div className="font-semibold text-base text-white mb-2">
                Stack
              </div>
              <div className="text-sm text-gray-300">html css vanillaJS</div>
            </div>
            <div className="m-4 h-[0.15rem] bg-gray-500" />
            {asideList.map((arg, i) => (
              <Button
                variant={"secondary"}
                key={i}
                className="bg-gray-500 rounded-lg flex mx-4 my-4 items-center text-white w-60"
              >
                <div className="flex justify-between w-full">
                  {arg[0]}
                  <div className="font-semibold text-base">{arg[1]}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] w-full h-24 lg:h-[4.5rem]",
          isResetting && "transition-all ease-in-out duration-300"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full h-full flex items-center">
          {isCollapsed && (
            <Menu
              onClick={resetWidth}
              role="button"
              className="h-8 w-8 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
