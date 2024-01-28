"use client";
import { List } from "lucide-react";
import SideThing from "./sideThing";
import { ElementRef, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type lectGroup = {
  lectureName: string;
  isCompleted: boolean;
};

interface SideBarProps {
  Data: lectGroup[];
  isChoosen: number;
}

const SideBar = ({ Data, isChoosen }: SideBarProps) => {
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarRef = useRef<ElementRef<"div">>(null);

  const changeWidth = () => {
    let collapsafter = !isCollapsed;
    if (sidebarRef.current) {
      setIsResetting(true);
      if (!collapsafter) setIsCollapsed(!isCollapsed);

      sidebarRef.current.style.width = isCollapsed ? "400px" : "48px";

      setTimeout(() => {
        if (collapsafter) setIsCollapsed(!isCollapsed);
        setIsResetting(false);
      }, 300);
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={cn(
        "h-full w-[400px] flex flex-col bg-gray-900 border-gray-500 border-b-2 py-4 px-1 [&>*]:h-[40px] gap-2",
        isResetting && "transition-all ease-ease duration-300"
      )}
    >
      <List
        className="w-[40px] h-[40px] mb-6 cursor-pointer"
        onClick={changeWidth}
      />
      {Data.map((ai, i) => (
        <SideThing
          isCollapsed={isCollapsed}
          isChoosen={isChoosen == i ? true : false}
          isCompleted={ai.isCompleted}
          subTitle={ai.lectureName}
          lectureLink={i + 1 + ""}
          key={i}
        />
      ))}
    </div>
  );
};

export default SideBar;
