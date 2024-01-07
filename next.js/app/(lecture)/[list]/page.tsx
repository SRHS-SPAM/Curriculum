import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  CheckCircle2,
  ChevronsDown,
  ChevronsLeft,
  Circle,
  CircleDot,
  GraduationCap,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Sidebar from "../_components/sidebar";
import { cn } from "@/lib/utils";
import SubItem from "../_components/subitem";
import { Progress } from "@/components/ui/progress";

type argsProps = {
  title: string;
  lectureQuantity: number;
  completedLecture: number;
  lectureGroup: {
    lectureName: string;
    isCompleted: boolean;
  }[];
};

const data: argsProps[] = [
  {
    title: "1. HTML 기초",
    lectureQuantity: 5,
    completedLecture: 5,
    lectureGroup: [
      {
        lectureName: "asdf",
        isCompleted: true,
      },
      {
        lectureName: "asdf",
        isCompleted: true,
      },
      {
        lectureName: "asdf",
        isCompleted: true,
      },
      {
        lectureName: "asdf",
        isCompleted: true,
      },
      {
        lectureName: "asdf",
        isCompleted: true,
      },
    ],
  },
  {
    title: "2. CSS 기초",
    lectureQuantity: 5,
    completedLecture: 3,
    lectureGroup: [
      {
        lectureName: "asdf",
        isCompleted: true,
      },
      {
        lectureName: "asdf",
        isCompleted: true,
      },
      {
        lectureName: "asdf",
        isCompleted: true,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
    ],
  },
  {
    title: "3. JS 기초",
    lectureQuantity: 6,
    completedLecture: 0,
    lectureGroup: [
      {
        lectureName: "JS의 의미와 뜻",
        isCompleted: false,
      },
      {
        lectureName: "JS의 유래와 그 기원에 대해",
        isCompleted: false,
      },
      {
        lectureName: "JS의 문법과 단어 의미",
        isCompleted: false,
      },
      {
        lectureName: "JS와 비슷한 단어와 언어들",
        isCompleted: false,
      },
      {
        lectureName: "정윤환 일해",
        isCompleted: false,
      },
      {
        lectureName: "테스트",
        isCompleted: false,
      },
    ],
  },
  {
    title: "4. HTML & CSS 연습",
    lectureQuantity: 6,
    completedLecture: 0,
    lectureGroup: [
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
    ],
  },
  {
    title: "5. JS 연습",
    lectureQuantity: 6,
    completedLecture: 0,
    lectureGroup: [
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
      {
        lectureName: "asdf",
        isCompleted: false,
      },
    ],
  },
];

const List = () => {
  return (
    <div className="flex h-full w-[100dvw]">
      <Sidebar />
      <article className="flex flex-col justify-center h-full flex-1">
        <ScrollArea className="h-full bg-slate-50">
          <div className="flex flex-col justify-center items-center">
            <section className="bg-white w-3/4 mt-12 mb-12 py-6 px-12 flex flex-col justify-between rounded-[10px] h-[300px] drop-shadow-md">
              <div className="ml-4 text-[2rem] font-bold">
                누구나 할수있다! 프론트 기초 강의 배우기
              </div>
              <div className="ml-4 font-bold text-[1.3rem]">
                전체 학습 진행률: 18%
                <Progress
                  value={18}
                  color="bg-[#60A5FA]"
                  className="h-3 mt-2"
                />
              </div>
              <div>
                <p className="ml-3 font-bold text-[1.3rem]">
                  마지막으로 학습한 수업
                </p>
                <div className="bg-gray-50 rounded-lg flex justify-between px-4 py-2">
                  <div className="flex items-center font-bold">
                    <CircleDot className="w-4 h-4 mr-4" />
                    CSS의 문법과 단어 의미
                  </div>
                  <Button className="rounded-xl font-bold bg-[#60A5FA] hover:bg-[#60a5fa]">
                    학습하기
                  </Button>
                </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col justify-center items-center">
            {data.map((args: argsProps, i) => (
              <SubItem args={args} key={i} />
            ))}
          </div>
        </ScrollArea>
      </article>
    </div>
  );
};

export default List;
