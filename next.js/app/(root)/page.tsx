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
              layout="fill"
            />
          </div>
        </div>
        <article className="w-[80vw] h-[45vh] flex flex-col justify-between">
          <div style={{ fontSize: 27, position: "relative", left: "4%" }}>
            <strong>프론트엔드 강의</strong>
          </div>
          <div className="w-[80vw] h-[38vh] flex items-center">
            <div className="w-[20vw] h-[34vh] bg-[aqua] relative flex items-end rounded-[20px]">
              <div className="w-[20vw] h-[10vh] bg-[lightgray] rounded-[0px_0px_20px_20px/_0px_0px_20px_20px]" />
            </div>
            <div className="w-[20vw] h-[34vh] bg-[aqua] relative flex items-end rounded-[20px]">
              <div className="w-[20vw] h-[10vh] bg-[lightgray] rounded-[0px_0px_20px_20px/_0px_0px_20px_20px]" />
            </div>
            <div className="w-[20vw] h-[34vh] bg-[aqua] relative flex items-end rounded-[20px]">
              <div className="w-[20vw] h-[10vh] bg-[lightgray] rounded-[0px_0px_20px_20px/_0px_0px_20px_20px]" />
            </div>
            <div className="w-[20vw] h-[34vh] bg-[aqua] relative flex items-end rounded-[20px]">
              <div className="w-[20vw] h-[10vh] bg-[lightgray] rounded-[0px_0px_20px_20px/_0px_0px_20px_20px]" />
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
