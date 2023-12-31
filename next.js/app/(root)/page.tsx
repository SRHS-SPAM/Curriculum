import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./_components/carousel";

interface lectureType {
  title: string;
  description: string;
  fild: string;
  period: string;
  writer: string;
}

interface mapType {
  fild: string;
  lecture: lectureType[];
}

const mapList: mapType[] = [
  {
    fild: "프론트엔드",
    lecture: [
      {
        title: "누구나 할 수 있다! 프론트 기초 강의 배우기!",
        description: "처음부터 배우는 프론트강의!",
        fild: "프론트엔드/코딩",
        period: "100",
        writer: "국재윤",
      },
      {
        title: "누구나 할 수 있다! 백엔드 기초 강의 배우기!",
        description: "처음부터 배우는 백엔드 강의!",
        fild: "백엔드/코딩",
        period: "100",
        writer: "정현서",
      },
      {
        title: "누구나 할 수 있다! 프론트 기초 강의 배우기!",
        description: "처음부터 배우는 프론트강의!",
        fild: "프론트엔드/코딩",
        period: "100",
        writer: "정윤환",
      },
      {
        title: "누구나 할 수 있다! 프론트 기초 강의 배우기!",
        description: "처음부터 배우는 프론트강의!",
        fild: "프론트엔드/코딩",
        period: "100",
        writer: "정윤환",
      },
      {
        title: "누구나 할 수 있다! 프론트 기초 강의 배우기!",
        description: "처음부터 배우는 프론트강의!",
        fild: "프론트엔드/코딩",
        period: "100",
        writer: "정윤환",
      },
    ],
  },
  {
    fild: "백엔드",
    lecture: [
      {
        title: "누구나 할 수 있다! 백엔드 기초 강의 배우기!",
        description: "처음부터 배우는 백엔드 강의!",
        fild: "백엔드/코딩",
        period: "100",
        writer: "정윤환",
      },
      {
        title: "누구나 할 수 있다! 백엔드 기초 강의 배우기!",
        description: "처음부터 배우는 백엔드 강의!",
        fild: "백엔드/코딩",
        period: "100",
        writer: "정현서",
      },
    ],
  },
  {
    fild: "디자인",
    lecture: [
      {
        title: "누구나 할 수 있다! 디자인 기초 강의 배우기!",
        description: "처음부터 배우는 디자인 강의!",
        fild: "프론트엔드/코딩",
        period: "100",
        writer: "전재민",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[30px] m-0 pb-40">
      <main className="w-[80vw] flex flex-col gap-20 relative top-40">
        <Carousel
          options={{
            align: "start",
            loop: true,
            skipSnaps: false,
            inViewThreshold: 0.7,
          }}
          slides={[
            <>
              <div className="h-[40vh] w-[80vw] bg-[#5C469C] relative flex justify-around rounded-[12.2px]">
                <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                  <div className="banner_txt_container">
                    <p>
                      <strong className="text-[2.2em] text-[white]">
                        2024년 스팸 커리큘럼
                      </strong>
                    </p>
                    <strong className="text-2xl text-[white]">
                      하나부터 열까지 배우는 쉬운 과정!
                    </strong>
                  </div>
                </div>
                <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                  <Image
                    className="relative w-[35vw]"
                    src="/images/배너1.png"
                    alt="배너1"
                    width={756}
                    height={419}
                  />
                </div>
              </div>
            </>,
            <>
              <div className="h-[40vh] w-[80vw] bg-[#86B6F6] relative flex justify-around rounded-[12.2px]">
                <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                  <div className="banner_txt_container">
                    <p>
                      <strong className="text-[2.2em] text-[white]">
                        2024년 스팸 프론트 커리큘럼
                      </strong>
                    </p>
                    <strong className="text-2xl text-[white]">
                      프론트 엔드 개발자의 한 걸음!
                    </strong>
                  </div>
                </div>
                <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                  <Image
                    className="relative w-[35vw]"
                    src="/images/배너1.png"
                    alt="배너1"
                    width={756}
                    height={419}
                  />
                </div>
              </div>
            </>,
            <>
              <div className="h-[40vh] w-[80vw] bg-[#1D267D] relative flex justify-around rounded-[12.2px]">
                <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                  <div className="banner_txt_container">
                    <p>
                      <strong className="text-[2.2em] text-[white]">
                        2024년 스팸 백엔드 커리큘럼
                      </strong>
                    </p>
                    <strong className="text-2xl text-[white]">
                      백엔드 고수가 되는 과정!
                    </strong>
                  </div>
                </div>
                <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                  <Image
                    className="relative w-[35vw]"
                    src="/images/배너1.png"
                    alt="배너1"
                    width={756}
                    height={419}
                  />
                </div>
              </div>
            </>,
            <>
              <div className="h-[40vh] w-[80vw] bg-[#A674D8] relative flex justify-around rounded-[12.2px]">
                <div className="h-[40vh] w-[35vw] flex flex-col justify-around">
                  <div className="banner_txt_container">
                    <p>
                      <strong className="text-[2.2em] text-[white]">
                        2024년 스팸 디자인 커리큘럼
                      </strong>
                    </p>
                    <strong className="text-2xl text-[white]">
                      세계 최고의 디자이너가 되어라
                    </strong>
                  </div>
                </div>
                <div className="h-[40vh] w-[35vw] flex justify-center items-center">
                  <Image
                    className="relative w-[35vw]"
                    src="/images/배너1.png"
                    alt="배너1"
                    width={756}
                    height={419}
                  />
                </div>
              </div>
            </>,
          ]}
        />
        {mapList.map((mapFild: mapType, i: number) => (
          <article
            className="w-[80vw] h-[45vh] flex flex-col justify-between"
            key={i}
          >
            <div className="text-[2rem] ml-4">
              <strong>{mapFild.fild} 강의</strong>
            </div>

            <div className='relative z-[2] before:content-[""] before:absolute before:top-0 before:bottom-0 before:w-4 before:bg-gradient-to-l before:from-[rgba(255,255,255,0)] before:left-0 before:to-white before:z-[3] after:bg-gradient-to-l after:content-[""] after:absolute after:top-0 after:bottom-0 after:w-4 after:from-[rgba(255,255,255,0)] after:to-white after:z-0 after:right-0 after:scale-x-[-1]'>
              <div className="bottom1">
                {mapFild.lecture.map((lecture: lectureType, j: number) => (
                  <Link
                    href={"/" + (j + 1)}
                    key={j}
                    className="w-[20vw] h-[32vh] font-extrabold bg-[#ced4da] relative flex items-end rounded-[9px] group z-0"
                  >
                    <div className="w-[20vw] h-[13vh] bg-[#f2f2f2] flex flex-col gap-[0.5rem] transition-[height] duration-500 ease-in-out px-4 pt-2.5 rounded-[0px_0px_9px_9px/_0px_0px_9px_9px] group-hover:h-[80%]">
                      <div className="text-[1rem] font-semibold">
                        {lecture.title}
                      </div>
                      <div className="text-[0.8rem] font-semibold">
                        {lecture.description}
                      </div>
                      <div className="h-full gap-3 flex flex-col opacity-0 transition-[opacity] duration-500 ease-in-out group-hover:transition-[opacity] group-hover:opacity-100 group-hover:duration-1000 group-hover:delay-100 font-semibold text-xs">
                        {/* detail info*/}
                        <div>{lecture.fild}</div>
                        <div>수강 시간: {lecture.period}시간</div>
                        <div>만든이: {lecture.writer}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
