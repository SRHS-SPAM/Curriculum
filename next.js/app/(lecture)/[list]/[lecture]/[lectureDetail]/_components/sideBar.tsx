import { List } from "lucide-react";
import SideThing from "./sideThing";

type lectGroup = {
    lectureName: string;
    isCompleted: boolean;
};

interface SideBarProps {
    Data: lectGroup[];
    isChoosen: number;
}

const SideBar = ({Data, isChoosen}:SideBarProps) => {
  return (
    <div className="h-full w-1/5 max-w-[400px] flex flex-col bg-black border-gray-500 border-b-2 p-4 [&>*]:h-[50px]">
      <List className="w-[40px] h-[40px] mb-6" />
        {Data.map((ai, i)=>(
            <SideThing isChoosen={isChoosen==i?true:false} isCompleted={ai.isCompleted} subTitle={ai.lectureName} key={i}/>
        ))}
    </div>
  );
};

export default SideBar;
