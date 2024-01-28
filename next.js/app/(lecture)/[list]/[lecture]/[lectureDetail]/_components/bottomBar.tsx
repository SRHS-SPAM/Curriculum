import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

interface BottomBarProps {
  title: string;
  lectureQuantity: number;
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
    <div className="flex items-center justify-between w-full h-[80px] bg-black p-4 select-none">
      <div className="items-center h-full inline-flex w-full">
        <Link href={"../"}>
          <LogOut className="rotate-180 h-[30px] w-[30px]" />
        </Link>
        <div className="flex items-baseline m-4 ml-6 font-semibold">
          <div>{title}</div>
          <div className="text-xs m-2">- {subTitle}</div>
        </div>
      </div>{" "}
      {/*좀 이상하게 중앙정렬 되어있으니 수정 요망*/}
      <div className="h-full text-4xl whitespace-nowrap font-bold">
        {lectureNow} / {lectureQuantity}
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
