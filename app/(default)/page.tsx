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
    <div className="bg-black">
      <HeroAnimation />
      <div className="px-4 py-24 sm:px-6 md:py-20">
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
  );
}
