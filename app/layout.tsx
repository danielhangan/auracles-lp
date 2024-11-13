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
      <head>
        {/* Link to the favicon */}

        <link
          rel="apple-touch-icon"
          href="https://cdn.prod.website-files.com/672e7d71f6441af1eae021e0/67321733e9411465767e0a55_Auracles%20Favicon.png"
        />

        <link
          rel="shortcut icon"
          href="https://cdn.prod.website-files.com/672e7d71f6441af1eae021e0/67321738c9ce93f6d27e9c0e_Auracles%20Webclip.png"
          type="image/x-icon"
        />
      </head>
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
