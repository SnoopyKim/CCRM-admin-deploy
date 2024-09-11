import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Image
        src="/images/logo.svg"
        alt="CCRM Logo"
        width={200}
        height={0}
        style={{ height: "auto" }}
      />
    </div>
  );
}
