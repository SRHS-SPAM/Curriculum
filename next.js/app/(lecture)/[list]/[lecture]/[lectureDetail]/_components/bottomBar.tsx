import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ArrowRightSquare, LogOut } from "lucide-react";
import Link from "next/link";

interface BottomBarProps {
  title: string;
  lectureQuantity: number
  lectureNow: number;
  subTitle: string;
  nextLink: string;
}

const BottomBar = ({
  title,
  lectureNow,
  lectureQuantity,
  nextLink,
  subTitle,
}: BottomBarProps) => {
  return (
    <div className="flex items-center justify-between w-full h-[80px] bg-gray-800 p-4 select-none">
      <div className="items-center h-full inline-flex w-full">
        <Link href={"../"}>
          <LogOut className="rotate-180 h-[30px] w-[30px]" />
        </Link>
        <div className="flex items-baseline m-4 ml-6 font-semibold">
          <div>{title}</div>
          <div className="text-xs m-2">- {subTitle}</div>
        </div>
      </div>
      {/*좀 이상하게 중앙정렬 되어있으니 수정 요망*/}

      <div className="flex space-x-4">
        <Button className={cn(lectureNow===1 && "opacity-50")} size={"icon"} asChild>
        <Link href={lectureNow===1?'#':`${lectureNow-1}`}>
            <ArrowLeft />
          </Link>
        </Button>
        <div className="h-full text-3xl whitespace-nowrap font-bold flex items-center">
          {lectureNow} / {lectureQuantity}
        </div>
        <Button className={cn(lectureNow===lectureQuantity && "opacity-50")} size={"icon"} asChild>
          <Link href={lectureNow===lectureQuantity?'#':`${lectureNow+1}`}>
            <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="w-full flex justify-end">
        <Button variant={"ghost"} className="bg-white text-black font-bold">
          다음 강의
        </Button>
      </div>
    </div>
  );
};

export default BottomBar;
