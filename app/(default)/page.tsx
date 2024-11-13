export const metadata = {
  title: "Auracles",
  description:
    "Empowering music makers to verify and permission their assets and information— led by Heap, currently in-development",
};

import AuraclesCta from "@/components/CtaAuracles";
import PageHeader from "@/components/page-header";
import TextCard from "@/components/TextCard";
import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col justify-between h-screen pt-32 pb-24 overflow-y-auto md:pt-22 md:pb-20">
        <div className="flex flex-col justify-between px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title=""
            description="Auracles empowering music makers to verify and permission their assets and information— led by Imogen Heap, currently in-development"
          >
            ""
          </PageHeader>

          <TextCard />

          <AuraclesCta />
        </div>
        <Footer />
      </div>
    </section>
  );
}
