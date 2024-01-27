import BottomBar from "./_components/bottomBar";
import SideBar from "./_components/sideBar";

type lectGroup = {
  lectureName: string;
  isCompleted: boolean;
};

type argsProps = {
  title: string;
  lectureQuantity: number;
  completedLecture: number;
  lectureGroup: lectGroup[];
};

const Sample = {
  title: "3. JS 기초",
  lectureQuantity: 6,
  completedLecture: 1,
  lectureGroup: [
    {
      lectureName: "JS의 의미와 뜻",
      isCompleted: true,
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
};

export default function LectureDetail() {
  return (
    <div className="h-full w-full flex flex-col text-gray-100">
      <div className="w-full h-full flex">
        <SideBar isChoosen={1} Data={Sample.lectureGroup}/>
      </div>
      <BottomBar
        lectureNow={2}
        subTitle={Sample.lectureGroup[1].lectureName}
        nextLink="#"
        lectureQuantity={Sample.lectureQuantity}
        title={Sample.title}
      />
    </div>
  );
}
