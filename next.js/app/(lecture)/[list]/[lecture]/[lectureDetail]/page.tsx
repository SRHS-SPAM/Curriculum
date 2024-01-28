import Link from "next/link";
import BottomBar from "./_components/bottomBar";
import Main from "./_components/main";
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

type ParamsProps = {
  list: number;
  lecture: number;
  lectureDetail: number;
}

type LectureDetailProps = {
  params: ParamsProps;
  searchParams: any;
}

const Sample = {
  title: "3. JS 기초",
  lectureQuantity: 7,
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
    {
      lectureName: "코끼리 아저씨는 코가손이래 코가손 할머니는??? 잘 모르겠어....",
      isCompleted: false,
    },
  ],
};

export default function LectureDetail(props: LectureDetailProps) {
  let lectureDetail:number = props.params.lectureDetail;
  if(lectureDetail<=0) lectureDetail=1; //명시해줘도 얜 string 이엿어..
  else if(lectureDetail>Sample.lectureQuantity) lectureDetail=Sample.lectureQuantity;
  else lectureDetail=Number(lectureDetail);
  return (
    <div className="h-full w-full flex flex-col text-gray-100">
      <div className="w-full h-full flex">
        <SideBar isChoosen={lectureDetail-1} Data={Sample.lectureGroup}/>
        <Main />
      </div>
      <BottomBar
        lectureNow={lectureDetail}
        subTitle={Sample.lectureGroup[lectureDetail-1].lectureName}
        nextLink="#"
        lectureQuantity={Sample.lectureQuantity}
        title={Sample.title}
      />
    </div>
  );
}
