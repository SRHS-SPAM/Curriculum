const List = () => {
  return (
    <>
      <main className="flex flex-col m-0 items-center gap-[30px] pb-40">
        <div className="w-[80vw] flex gap-20 relative top-24">
          <aside className="w-[20vw] h-[80vh] bg-black flex justify-center items-center">
            <div className="box">
              <div className="mini-top">
                <i className="fa-regular fa-circle-check">
                  <a className="check">&nbsp;진행중</a>
                </i>
                <i className="fa-solid fa-angles-left" />
              </div>
              <a className="Lecture">프론트엔드 강의</a>
              <div className="mini-top1">
                <a className="time1">내 수강 기간</a>
                <a className="time2">2023.11.21 ~ 2023.11.25</a>
              </div>
              <div className="line" />
              <div className="box1">
                <i className="fa-solid fa-bars" style={{ marginLeft: "1rem" }}>
                  <a>&nbsp;&nbsp;수업 목록</a>
                </i>
              </div>
              <div className="box2">
                <i className="fa-solid fa-graduation-cap">
                  <a>&nbsp;&nbsp;학습 현황</a>
                </i>
              </div>
            </div>
          </aside>
          <article>
            <div className="box1-1" />
            <section>
              <a className="number">1. HTML 기초</a>
              <br />
              <a className="study">학습 완료 $/$개</a>
            </section>
            <section>
              <a className="number">2. CSS 기초</a>
              <br />
              <a className="study">학습 완료 $/$개</a>
            </section>
            <section>
              <a className="number">3. JS 기초</a>
              <br />
              <a className="study">학습 완료 $/$개</a>
            </section>
            <section>
              <a className="number">4. HTML &amp; CSS 연습`</a>
              <br />
              <a className="study">학습 완료 $/$개</a>
            </section>
            <section>
              <a className="number">5. JS 연습</a>
              <br />
              <a className="study">학습 완료 $/$개</a>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default List;
