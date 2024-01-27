import { cn } from "@/lib/utils";

interface SideThingProps {
  isCompleted: boolean;
  isChoosen: boolean;
  subTitle: string
}

const SideThing = ({ isCompleted, isChoosen, subTitle }: SideThingProps) => {
  return (
    <div
      className={cn(
        "h-full w-full flex items-center rounded-xl gap-5",
        isCompleted && "text-purple-700",
        isChoosen && "bg-gray-800"
      )}
    >
      <div
        className={cn(
          "rounded-full",
          isCompleted ? "bg-purple-700" : "bg-blue-600",
          isChoosen ? "w-4 h-4" : "w-3 h-3"
        )}
      />
      <div>{subTitle}</div>
    </div>
  );
};

export default SideThing;
