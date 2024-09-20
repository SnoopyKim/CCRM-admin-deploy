"use client";

import Icon from "@/app/_components/Icon";
import { TextField } from "@/app/_components/Input";
import TextAreaField from "@/app/_components/Input/area-field";
import FileField from "@/app/_components/Input/file-field";
import SelectField from "@/app/_components/Input/select-field";
import Inquiry from "@/app/_types/inquiry";
import Link from "next/link";
import { useState } from "react";

export default function InquiryForm({
  inquiry,
  title,
}: {
  inquiry: Inquiry;
  title: string;
}) {
  const [formData, setFormData] = useState<Inquiry>(inquiry);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex flex-col flex-1 space-y-4 my-6 overflow-y-scroll">
        <TextField
          name="inquier"
          label="문의자"
          value={formData.inquirer}
          disabled
        />
        <TextField
          name="title"
          label="제목"
          placeholder="제목을 작성해주세요"
          value={formData.title}
          disabled
        />

        <TextAreaField
          name="content"
          label="내용"
          placeholder="내용을 작성해주세요"
          value={formData.content}
          onChange={handleChange}
          className="h-24"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectField
            name="category"
            label="카테고리"
            defaultValue={formData.category}
            options={[
              { text: "결제 문의", value: "결제" },
              { text: "가입 문의", value: "가입" },
              { text: "오류 문의", value: "오류" },
              { text: "제휴 문의", value: "제휴" },
              { text: "기타", value: "기타" },
            ]}
          />
          <SelectField
            name="public"
            label="공개여부"
            defaultValue={formData.public ? 1 : 0}
            options={[
              { text: "공개", value: 1 },
              { text: "비공개", value: 0 },
            ]}
          />
        </div>

        <FileField
          name="logo-file"
          label="파일 업로드"
          accept="image/*"
          placeholder={formData.file ? formData.file : "파일을 업로드해주세요"}
          icon="file-image"
        />

        <TextField
          name="url"
          label="URL"
          placeholder="URL를 입력해주세요"
          defaultValue={formData.url}
          required
        />
      </div>
      <div className="flex justify-between ">
        <Link
          href={"/service-center/inquiry"}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 font-medium"
        >
          취소하기
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-medium">
          저장하기
        </button>
      </div>
    </form>
  );
}
