import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <div className="top">
          <a>문제</a>
          <a>내 순위</a>
          <a>대쉬보드</a>
          <a>로그인</a>
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
    </div>
  );
}
