export const metadata = {
  title: "Auracles",
  description:
    "Empowering music makers to verify and permission their assets and information— led by Heap, currently in-development",
};

import AuraclesCta from "@/components/CtaAuracles";
import PageHeader from "@/components/page-header";
import TextCard from "@/components/TextCard";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <div className="pt-32 pb-12 md:pt-22 md:pb-20">
        <div className="flex flex-col justify-between h-[80vh] px-4 sm:px-6">
          <PageHeader
            className="mb-12"
            title=""
            description=" - a timely non-profit layer, empowering music makers to verify and permission their assets and information— led by Imogen Heap, currently in-development"
          >
            <Link href="https://ip.auracles.io" className="text-xl font-light">
              Try beta now
            </Link>
          </PageHeader>

          <TextCard />

          <AuraclesCta />
          {/* <SubscribeForm /> */}
        </div>
      </div>
    </section>
  );
}
