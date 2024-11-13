import "./globals.css";

import { Inter, Inter_Tight, Inconsolata } from "next/font/google";
import Theme from "./theme-provider";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata",
  display: "swap",
});

export const metadata = {
  title: "Auracles",
  description:
    "Empowering music makers to verify and permission their assets and information— led by Heap, currently in-development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning: https://github.com/vercel/next.js/issues/44343 */}
      <body
        className={`${inconsolata.variable} ${inconsolata.variable} font-inter antialiased bg-indigo-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 tracking-tight`}
      >
        <Theme>
          <div className="relative flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
