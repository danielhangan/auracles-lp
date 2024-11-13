"use client";

import BgShapes from "@/components/bg-shapes";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <VerticalLines /> */}
      <BgShapes />
      {/* <Header /> */}

      <main className="grow">{children}</main>
    </>
  );
}
