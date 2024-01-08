import { Button } from "@/components/ui/button";
import { UserCircle } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="fixed z-[99999] w-full bg-[white] h-24 lg:h-[4.5rem] top-0">
        <div className="w-full h-full flex justify-between items-center border-b shadow-sm">
          <div className="flex justify-center gap-12 ml-24">
          <Button variant={"ghost"} className="text-base font-semibold">
            홈
          </Button>
          <Button variant={"ghost"} className="text-base font-semibold">
            로드맵
          </Button>
          <Button variant={"ghost"} className="text-base font-semibold">
            내 순위
          </Button>
          <Button variant={"ghost"} className="text-base font-semibold">
            커뮤니티
          </Button>
          </div>
          <div className="flex justify-center items-center gap-8 mr-6">
          <Button variant={"outline"} className="text-base">
            대시보드
          </Button>
          <UserCircle className="h-12 w-12" role="button"/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
