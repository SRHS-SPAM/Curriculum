import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
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

interface aiProps {
  tt: string;
  ttt: number;
  tttt: number;
  ttttt: {
    tttttt: string;
    ttttttt: boolean;
  }[];
}

const t: aiProps[] = [
  {
    tt: "1. HTML 기초",
    ttt: 5,
    tttt: 5,
    ttttt: [
      {
        tttttt: "asdf",
        ttttttt: true,
      },
      {
        tttttt: "asdf",
        ttttttt: true,
      },
      {
        tttttt: "asdf",
        ttttttt: true,
      },
      {
        tttttt: "asdf",
        ttttttt: true,
      },
      {
        tttttt: "asdf",
        ttttttt: true,
      },
    ],
  },
  {
    tt: "2. CSS 기초",
    ttt: 5,
    tttt: 3,
    ttttt: [
      {
        tttttt: "asdf",
        ttttttt: true,
      },
      {
        tttttt: "asdf",
        ttttttt: true,
      },
      {
        tttttt: "asdf",
        ttttttt: true,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
    ],
  },
  {
    tt: "3. JS 기초",
    ttt: 6,
    tttt: 0,
    ttttt: [
      {
        tttttt: "JS의 의미와 뜻",
        ttttttt: false,
      },
      {
        tttttt: "JS의 유래와 그 기원에 대해",
        ttttttt: false,
      },
      {
        tttttt: "JS의 문법과 단어 의미",
        ttttttt: false,
      },
      {
        tttttt: "JS와 비슷한 단어와 언어들",
        ttttttt: false,
      },
      {
        tttttt: "정윤환 일해",
        ttttttt: false,
      },
      {
        tttttt: "테스트",
        ttttttt: false,
      },
    ],
  },
  {
    tt: "4. HTML & CSS 연습",
    ttt: 6,
    tttt: 0,
    ttttt: [
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
    ],
  },
  {
    tt: "5. JS 연습",
    ttt: 6,
    tttt: 0,
    ttttt: [
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
      {
        tttttt: "asdf",
        ttttttt: false,
      },
    ],
  },
];

const List = () => {
  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <article className="flex flex-col justify-center h-full w-full">
        <ScrollArea className="h-full">
          <div className="flex flex-col justify-center items-center">
            <section className="bg-white w-3/4 mt-12 mb-12 py-6 px-12 flex flex-col justify-between rounded-[10px] h-[300px] drop-shadow-2xl">
              <div className="ml-4 text-[2rem] font-bold">
                누구나 할수있다! 프론트 기초 강의 배우기
              </div>
              <div className="ml-4 font-bold text-[1.3rem]">
                전체 학습 진행률: 18%
                <div className="relative">
                  <div className="absolute rounded-full h-3 w-full bg-gray-200 z-0" />
                  <div className="absolute rounded-full h-3 w-[18%] bg-blue-400 z-1" />
                </div>
              </div>
              <div>
                <p className="ml-3 font-bold text-[1.3rem]">
                  마지막으로 학습한 수업
                </p>
                <div className="bg-gray-100 flex justify-between px-4 py-2">
                <div className="flex items-center font-bold">
                  <CircleDot className="w-4 h-4 mr-4"/>CSS의 문법과 단어 의미
                </div>
                <Button className="rounded-2xl font-bold">
                  학습하기
                </Button>
              </div>
              </div>
            </section>
          </div>
          <div className="flex flex-col justify-center items-center">
            {t.map((ai: aiProps, i) => (
              <SubItem ai={ai} key={i} />
            ))}
          </div>
        </ScrollArea>
      </article>
    </div>
  );
};

export default List;
