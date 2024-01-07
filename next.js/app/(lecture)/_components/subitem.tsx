"use client";

import { cn } from "@/lib/utils";
import {
  Check,
  CheckSquare,
  ChevronDown,
  ChevronsUp,
  CircleDot,
  LucideChevronDownSquare,
  Square,
} from "lucide-react";
import Link from "next/link";
import { ElementRef, useRef, useState } from "react";

interface lectureType {
  lectureName: string;
  isCompleted: boolean;
}

interface argsProps {
  args: {
    title: string;
    lectureQuantity: number;
    completedLecture: number;
    lectureGroup: lectureType[];
  };
  key: number;
}

const SubItem = ({ args, key }: argsProps) => {
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const itemsRef = useRef<ElementRef<"div">>(null);

  const out = () => {
    if (itemsRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);
      itemsRef.current.style.height =
        String(args.lectureQuantity * 40 + 48) + "px";
      setTimeout(() => setIsResetting(false), 100);
    }
  };
  const inin = () => {
    if (itemsRef.current) {
      setIsResetting(true);
      setIsCollapsed(true);
      itemsRef.current.style.height = "0";
      setTimeout(() => setIsResetting(false), 100);
    }
  };
  return (
    <section
      className="bg-white w-3/4 mb-7 rounded-[10px] drop-shadow-md"
      key={key}
    >
      <div
        className="flex justify-between p-6 w-full h-[150px]"
        role="button"
        onClick={!isResetting ? (isCollapsed ? out : inin) : () => {}}
      >
        <div className="flex flex-col">
          <Link href={"#"} className="text-2xl font-bold">
            {args.title}
          </Link>
          <Link
            href={"#"}
            className={cn(
              "ml-2 text-base font-semibold mt-5",
              args.completedLecture == args.lectureQuantity && "text-green-800"
            )}
          >
            학습 완료 {args.completedLecture}/{args.lectureQuantity}개
          </Link>
        </div>
        <ChevronDown
          color={"gray"}
          className={cn(
            "h-8 w-8 m-2",
            isResetting && "transition-all duration-100",
            !isCollapsed && "rotate-180"
          )}
        />
      </div>
      <div
        ref={itemsRef}
        className={cn(
          "pt-0 h-0 overflow-y-hidden",
          isResetting && "transition-all duration-100",
          !isCollapsed && `p-12 pt-0`
        )}
      >
        {args.lectureGroup.map((aj: lectureType, j) => (
          <div
            className={cn(
              "flex justify-between px-4 py-2 h-11 hover:bg-gray-200"
            )}
            key={j}
          >
            <div className="flex items-center font-bold text-xl">
              <CircleDot className="w-4 h-4 mr-4" />
              {aj.lectureName}
            </div>
            {aj.isCompleted ? <CheckSquare /> : <Square />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubItem;
