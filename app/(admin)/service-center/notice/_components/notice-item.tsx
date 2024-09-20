import Icon from "@/app/_components/Icon";
import { Td } from "@/app/_components/Table";
import Notice from "@/app/_types/notice";
import Link from "next/link";

export default function NoticeItem({ notice }: { notice: Notice }) {
  return (
    <tr key={notice.id} className="hover:bg-gray-50">
      <Td>{notice.id}</Td>
      <Td>{notice.title}</Td>
      <Td>
        {notice.category === "notice"
          ? "공지사항"
          : notice.category === "main"
          ? "메인 상단"
          : "팝업"}
      </Td>
      <Td>{notice.updateDate}</Td>
      <Td className="w-0 space-x-2">
        <Link
          href={`/service-center/notice/edit?data=${JSON.stringify(notice)}`}
          className="inline-flex p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800"
        >
          <Icon type="square-pen" className="w-5 h-5" />
        </Link>
        <button className="p-2 rounded hover:bg-gray-200 text-gray-600 hover:text-gray-800">
          <Icon type="more-vertical" className="h-5 w-5" />
        </button>
      </Td>
    </tr>
  );
}
