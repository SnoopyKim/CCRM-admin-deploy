import Link from "next/link";
import Icon from "@/app/_components/Icon";
import InsuranceList from "./_components/insurance-list";
import { Suspense } from "react";

export default function FaqPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex w-full justify-between items-center mb-4">
        <h1 className="text-xl font-semibold ">보험 청구</h1>
        <Link
          href={"/outlink/insurance/new"}
          className="rounded-full py-1.5 pl-2.5 pr-4 flex items-center text-white text-sm font-medium bg-gray-700 hover:bg-gray-800"
        >
          <Icon type="plus" className="w-4 h-4 mr-1" />
          보험 청구 추가하기
        </Link>
      </div>
      <Suspense fallback={<></>}>
        <InsuranceList />
      </Suspense>
    </div>
  );
}
