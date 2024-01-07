"use client";

import { cn } from "@/lib/utils";
import {
  Check,
  CheckSquare,
  ChevronsDown,
  CircleDot,
  Square,
} from "lucide-react";
import Link from "next/link";
import { ElementRef, useRef, useState } from "react";

interface TTT {
  tttttt: string;
  ttttttt: boolean;
}

interface aiProps {
  tt: string;
  ttt: number;
  tttt: number;
  ttttt: TTT[];
}

interface SubProps {
  ai: aiProps;
  key: number;
}

const SubItem = ({ ai, key }: SubProps) => {
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const itemsRef = useRef<ElementRef<"div">>(null);

  const out = () => {
    if (itemsRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);
      itemsRef.current.style.height = String(ai.ttt*40+48)+"px";
      setTimeout(() => setIsResetting(false), 300);
    }
  };
  const inin = () => {
    if (itemsRef.current) {
      setIsResetting(true);
      itemsRef.current.style.height = "0";
      setTimeout(() => setIsCollapsed(true), 150);
      setTimeout(() => setIsResetting(false), 300);
    }
  };
  return (
    <section
      className="bg-white w-3/4 mb-12 rounded-[10px] drop-shadow-2xl"
      key={key}
    >
      <div className="flex justify-between p-6 w-full h-[150px]">
        <div className="flex flex-col justify-between">
          <Link href={"#"} className="text-[2rem] font-bold">
            {ai.tt}
          </Link>
          <Link
            href={"#"}
            className={cn("ml-2", ai.tttt == ai.ttt && "text-teal-500")}
          >
            학습 완료 {ai.tttt}/{ai.ttt}개
          </Link>
        </div>
        <ChevronsDown
          className="h-8 w-8 m-2"
          role="button"
          onClick={!isResetting && isCollapsed ? out : inin}
        />
      </div>
      <div
        ref={itemsRef}
        className={cn(
          "pt-0 h-0",
          isResetting && "transition-all ease-in-out duration-300",
          !isCollapsed && `p-12 pt-0`
        )}
      >
        {ai.ttttt.map((aj: TTT, j) => (
          <div
            className={cn(
              "flex justify-between px-4 py-2 hover:bg-gray-200",
              isCollapsed && "hidden"
            )}
            key={j}
          >
            <div className="flex items-center font-bold">
              <CircleDot className="w-4 h-4 mr-4" />
              {aj.tttttt}
            </div>
            {aj.ttttttt ? <CheckSquare /> : <Square />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubItem;
