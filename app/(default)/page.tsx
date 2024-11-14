export const metadata = {
  title: "Auracles",
  description:
    "Empowering music makers to verify and permission their assets and information— led by Heap, currently in-development",
};

import AuraclesCta from "@/components/CtaAuracles";
import HeroAnimation from "@/components/HeroRive";
import PageHeader from "@/components/page-header";
import TextCard from "@/components/TextCard";
import Footer from "@/components/ui/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative bg-black">
      <div className="absolute inset-0 z-0">
        <HeroAnimation />
      </div>
      <div className="relative z-10 pt-[60vh]">
        <div className="px-4 sm:px-6">
          <PageHeader
            className="mb-12 text-white"
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
    </div>
  );
}
