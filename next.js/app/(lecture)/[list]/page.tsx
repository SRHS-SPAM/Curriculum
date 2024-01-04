import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, ChevronsLeft, GraduationCap, Menu } from "lucide-react";
import Link from "next/link";
import Sidebar from "../_components/sidebar";

const List = () => {
  return (
    <>
      <Sidebar />
      <article className="pl-[291.2px] flex flex-col justify-center h-full">
        <ScrollArea className="h-full">
          <div className="bg-[rgb(236,236,236)] mt-12 rounded-[10px] shadow-[3px_3px_5px_5px_darkgray]" />
          <section>
            <Link href={"#"} className="text-[2rem] font-bold ml-6">
              1. HTML 기초
            </Link>
            <br />
            <Link href={"#"} className="ml-8">
              학습 완료 $/$개
            </Link>
          </section>
        </ScrollArea>
      </article>
    </>
  );
};

export default List;
