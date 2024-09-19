"use client";

import Course from "@/app/_types/course";
import { redirect, useSearchParams } from "next/navigation";
import CourseForm from "../_components/course-form";

export default function CourseEditPage() {
  const searchParams = useSearchParams();
  if (!searchParams.has("data")) {
    redirect("/course");
    return;
  }
  const course = JSON.parse(searchParams.get("data") ?? "{}");

  if (!course.id) {
    redirect("/course");
  }

  return <CourseForm title="강의 수정하기" course={course as Course} />;
}
