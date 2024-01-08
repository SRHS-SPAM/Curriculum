import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, LogOut, User2 } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="fixed z-[9999] w-full bg-[white] h-24 lg:h-[4.5rem] top-0">
        <div className="w-full h-full flex justify-between items-center border-b shadow-sm">
          <div className="flex justify-center gap-6 ml-12">
            <Button variant={"ghost"} className="text-lg font-semibold">
              홈
            </Button>
            <Button variant={"ghost"} className="text-lg font-semibold">
              로드맵
            </Button>
            <Button variant={"ghost"} className="text-lg font-semibold">
              내 순위
            </Button>
            <Button variant={"ghost"} className="text-lg font-semibold">
              커뮤니티
            </Button>
          </div>
          <div className="flex justify-center items-center gap-8 mr-12">
            <Button variant={"outline"} className="text-base">
              대시보드
            </Button>
            <DropdownMenu variant={"ghost"} size={"icon"} className="p-0">
              <DropdownMenuTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <User2 className="h-8 w-8" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 mr-2 z-[99999]">
                <DropdownMenuItem className="h-8 flex justify-between">
                  <div className="flex items-center">
                    <User2 className="mr-2 h-6 w-6" />
                    <span className="text-base font-medium">김이름</span>
                  </div>
                  <ChevronRight color="gray" />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>로그아웃</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
