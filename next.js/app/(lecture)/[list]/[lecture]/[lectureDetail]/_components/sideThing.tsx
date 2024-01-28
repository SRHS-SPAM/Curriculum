import { cn } from "@/lib/utils";
import Link from "next/link";

interface SideThingProps {
  isCollapsed: boolean;
  isCompleted: boolean;
  isChoosen: boolean;
  subTitle: string;
  lectureLink: string;
}

const SideThing = ({
  isCollapsed,
  isCompleted,
  isChoosen,
  subTitle,
  lectureLink,
}: SideThingProps) => {
  return (
    <Link href={lectureLink}>
      <div
        className={cn(
          "h-full w-full flex items-center rounded-xl gap-2 select-none overflow-x-clip cursor-pointer hover:bg-zinc-700",
          isCompleted && "text-purple-700",
          isChoosen && "bg-zinc-800"
        )}
      >
        <div className="h-[40px] w-[40px] flex items-center justify-center flex-shrink-0">
          <div
            className={cn(
              "rounded-full",
              isCompleted ? "bg-purple-700" : "bg-blue-600",
              isChoosen ? "w-4 h-4" : "w-3 h-3"
            )}
          />
        </div>{" "}
        {/*추후 에니메이션을 통해 자동으로 스크롤 되길 윈함 */}
        {!isCollapsed && <p className="whitespace-nowrap">{subTitle}</p>}
      </div>
    </Link>
  );
};

export default SideThing;
