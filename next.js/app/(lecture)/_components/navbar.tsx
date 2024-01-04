import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <header className="fixed z-[999] w-full bg-[white] h-24 lg:h-[4.5rem] top-0">
        <div className="w-full h-full flex justify-center items-center gap-12 border-b shadow-sm">
          <Button variant={"ghost"} className="text-base font-semibold">
            문제
          </Button>
          <Button variant={"ghost"} className="text-base font-semibold">
            내 순위
          </Button>
          <Button variant={"ghost"} className="text-base font-semibold">
            대쉬보드
          </Button>
          <Button variant={"ghost"} className="text-base font-semibold">
            로그인
          </Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
