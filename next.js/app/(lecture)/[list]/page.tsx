import { CheckCircle2, ChevronsLeft, GraduationCap, Menu } from "lucide-react";
import Link from "next/link";

const List = () => {
  return (
    <>
      <main className="flex flex-col m-0 pb-40">
        <div className="w-[80vw] flex">
          <aside className="w-60 h-full overflow-y-auto bg-black flex justify-center items-center">
            <div className="w-[17vw] h-[75vh] shadow-[0rem_0rem_0rem_0.1rem_gray]">
              <div className="w-[17vw] flex justify-between items-start">
                <CheckCircle2 />
                <Link href={'#'} className="text-base text-blue-800">&nbsp;진행중</Link>
                <ChevronsLeft />
              </div>
              <a className="text-2xl font-bold text-white m-[1.2rem]">프론트엔드 강의</a>
              <div className="ml-[1.2rem] flex items-center">
                <a className="text-[0.9rem] text-white">내 수강 기간</a>
                <a className="text-[0.6rem] text-white m-[1.2rem] ml-12">2023.11.21 ~ 2023.11.25</a>
              </div>
              <div className="w-[15vw] h-[0.2vh] bg-gray-500 m-4" />
              <div className="w-[15vw] h-[4vh] bg-gray-500 rounded-[10px] m-4 flex items-center text-white">
                <Menu className="ml-4"/>
                <Link href={'#'}>&nbsp;&nbsp;수업 목록</Link>
              </div>
              <div className="w-[15vw] h-[4vh] rounded-[10px] m-4 flex items-center text-white">
                <GraduationCap />
                <Link href={'#'}>&nbsp;&nbsp;학습 현황</Link>
              </div>
            </div>
          </aside>
          <article>
            <div className="w-[55vw] h-[32vh] bg-[rgb(236,236,236)] mt-12 rounded-[10px] shadow-[3px_3px_5px_5px_darkgray]" />
            <section>
              <Link href={'#'} className="text-[2rem] font-bold ml-6">1. HTML 기초</Link>
              <br />
              <Link href={'#'} className="ml-8">학습 완료 $/$개</Link>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default List;
