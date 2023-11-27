import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col m-0 gap-[30px] items-center">
      <header className="fixed z-[1] w-full bg-[white] h-24">
        <div className="w-full h-full flex justify-center items-center gap-12 border-b-[rgba(0,0,0,0.4)] border-b border-solid">
          <Button variant={"ghost"} className="text-[130%]">
            문제
          </Button>
          <Button variant="ghost" className="text-[130%]">
            내 순위
          </Button>
          <Button variant={"ghost"} className="text-[130%]">
            대쉬보드
          </Button>
          <Button variant={"ghost"} className="text-[130%]">
            로그인
          </Button>
        </div>
      </header>
      <main className="w-[80vw] h-[150vh] flex flex-col justify-between">
        <div className="h-[40vh] w-[80vw] bg-[#435585] relative flex justify-around rounded-[12.2px] top-40">
          <div className="h-[40vh] w-[35vw] flex justify-around flex-col">
            <div className="banner_txt_container">
              <p>
                <strong className="text-[2.2em] text-[white]">
                  2024년 스팸 프론트 커리큘럼
                </strong>
              </p>
              <strong className="text-2xl text-[white]">
                하나부터 열까지 배우는 쉬운 과정!
              </strong>
            </div>
            <div className="bg-[rgba(0,0,0,0.5)] w-3/12 flex justify-around items-center text-center gap-2 text-[white] font-[bold] px-4 py-0 rounded-[2rem]">
              <i className="fa-solid fa-chevron-left" />
              <div className="banner_page_count">1 / 4</div>
              <i className="fa-solid fa-chevron-right" />
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
        {/* <!-- 프론트 강의 --> */}
        <article className="w-[80vw] h-[45vh] flex flex-col justify-between">
          <div className="text-5xl ml-4">
            <strong>프론트엔드 강의</strong>
          </div>
          <div className="bottom1">
            <div className="Video_box hover:bg-[rgba(0,255,255,0.2)] group">
              <div className="Video_info trans group-hover:h-[26vh]">
                <div className="text-[1.2rem]">
                  누구나 할 수 있다! 프론트 기초 강의 배우기!
                </div>
                <div className="Video_subtiitle">
                  처음부터 배우는 프론트강의!
                </div>
                <div className="Video_detail_info">
                  <p>프론트엔드/코딩</p>
                  <p>수강 기간 : 11/21 ~ 11/25</p>
                  <p>대상자 : 정윤환</p>
                </div>
              </div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
          </div>
        </article>
        {/* <!-- 백엔드 강의 --> */}
        <article className="w-[80vw] h-[45vh] flex flex-col justify-between">
          <div className="text-5xl ml-4">
            <strong>백엔드 강의</strong>
          </div>
          <div className="bottom1">
            <div className="w-[20vw] h-[34vh] bg-[rgba(0,255,255,1)] relative flex items-end rounded-[20px] group">
              <div className="w-[20vw] h-[13vh] bg-[#f2f2f2] flex flex-col gap-[1.2rem] font-[bold] transition-[height] duration-500 ease-in-out p-4 rounded-[0px_0px_20px_20px/_0px_0px_20px_20px] group-hover:h-[26vh]">
                <div className="text-[1.2rem]">
                  누구나 할 수 있다! 백 기초 강의 배우기!
                </div>
                <div className="Video_subtitle">
                  처음부터 배우는 백엔드강의!
                </div>
                <div className="hidden opacity-0 transition-[opacity] duration-500 ease-in-out group-hover:inline group-hover:opacity-100 group-hover:animate-opacity">
                  {/* detail info*/}
                  <p>백엔드/코딩</p>
                  <p>수강 기간 : 11/21 ~ 11/25</p>
                  <p>대상자 : 국재윤</p>
                </div>
              </div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
          </div>
        </article>
        {/* <!-- 디자인 강의 --> */}
        <article>
          <a>
            <strong>디자인 강의</strong>
          </a>
          <div className="bottom1">
            <div className="Video_box">
              <div className="Video_info">
                <div className="Video_title">
                  누구나 할 수 있다! 디자인 기초 강의 배우기!
                </div>
                <div className="Video_subtiitle">
                  처음부터 배우는 디자인강의!
                </div>
                <div className="Video_detail_info">
                  <p>디자인/코딩</p>
                  <p>수강 기간 : 11/21 ~ 11/25</p>
                  <p>대상자 : 김마유,전재민</p>
                </div>
              </div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
            <div className="Video_box">
              <div className="Video_info"></div>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
