import { Pagination } from "@/app/_components/Pagination";
import { CourseList } from "./_components/course-list";
import Link from "next/link";
import Icon from "@/app/_components/Icon";

export default function CoursePage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full justify-between items-center mb-4">
        <h1 className="text-xl font-semibold ">강의 업로드 리스트</h1>
        <Link
          href={"/course/new"}
          className="rounded-full py-1.5 pl-2.5 pr-4 flex items-center text-white text-sm font-medium bg-gray-700 hover:bg-gray-800"
        >
          <Icon type="plus" className="w-4 h-4 mr-1" /> 강의 추가하기
        </Link>
      </div>
      <div className="block flex-1 overflow-auto">
        <CourseList />
      </div>
      <Pagination />
    </div>
  );
}
