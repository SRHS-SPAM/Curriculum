import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
      <main>
        <div className="banner_container">
          <div className="left">
            <div className="banner_txt_container">
              <p>
                <strong className="banner_maintxt">
                  2024년 스팸 프론트 커리큘럼
                </strong>
              </p>
              <strong className="banner_subtxt">
                하나부터 열까지 배우는 쉬운 과정!
              </strong>
            </div>
            <div className="banner_page">
              <i className="fa-solid fa-chevron-left" />
              <div className="banner_page_count">1 / 4</div>
              <i className="fa-solid fa-chevron-right" />
            </div>
          </div>
          <div className="right">
            <img className="photo" src="img/배너1.png" />
          </div>
        </div>
        <article>
          <a style={{ fontSize: 27, position: "relative", left: "4%" }}>
            <strong>프론트엔드 강의</strong>
          </a>
          <div className="bottom1">
            <div className="box1-1">
              <div className="bar1-1" />
            </div>
            <div className="box1-2">
              <div className="bar1-2" />
            </div>
            <div className="box1-3">
              <div className="bar1-3" />
            </div>
            <div className="box1-4">
              <div className="bar1-4" />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
