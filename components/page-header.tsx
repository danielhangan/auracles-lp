"use client";
import Image from "next/image";

interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageHeader({
  className,
  // children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`max-w-3xl mx-auto ${className || ""}`}>
      <div className="text-center">
        <div>
          {title ? (
            <h1 className="pb-4 text-5xl font-bold text-gray-800 font-inter-tight md:text-6xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200">
              {title}
            </h1>
          ) : (
            <div className="flex justify-center w-full pb-24">
              <div className="relative flex items-center justify-center">
                {/* Circles */}
                {/* <div className="absolute border-8 border-transparent rounded-full w-96 h-96 border-rainbow animate-pulse-ring"></div>
                <div className="absolute border-8 border-transparent rounded-full w-88 h-88 border-rainbow animate-pulse-ring"></div>
                <div className="absolute border-8 border-transparent rounded-full w-80 h-80 border-rainbow animate-pulse-ring"></div> */}

                {/* Image */}
                <Image
                  src="/images/brand/Auracles Full Logo and Text (White + Colour Treatment).png"
                  width={500} // Adjust this value as needed
                  height={300} // Adjust this value as needed
                  alt="logo"
                  priority={true}
                  className="relative z-10"
                />
              </div>
            </div>
          )}
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-100">
            {description}
          </p>
        </div>

        {/* <div className="relative flex items-center justify-center gap-4 mt-5 before:h-px before:w-24 before:border-b before:[border-image:linear-gradient(to_left,theme(colors.indigo.300),transparent)1] dark:before:[border-image:linear-gradient(to_left,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-24 after:border-b after:[border-image:linear-gradient(to_right,theme(colors.indigo.300),transparent)1] dark:after:[border-image:linear-gradient(to_right,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none">
          <div className="relative text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 inline-flex rounded-lg whitespace-nowrap px-3 py-[3px] tracking-normal before:absolute before:inset-0 before:rounded-lg before:[background-image:linear-gradient(120deg,transparent_0%,theme(colors.indigo.400/.12)_33%,theme(colors.pink.400/.12)_66%,theme(colors.amber.200/.12)_100%)] dark:before:[background-image:linear-gradient(120deg,theme(colors.indigo.400/.16),theme(colors.indigo.600/.16)_50%,transparent_100%)] shadow">
            <div
              className="absolute -inset-1.5 bg-indigo-500/15 dark:bg-gray-800/65 rounded-sm -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[7px] before:bg-[length:7px_7px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[7px] after:bg-[length:7px_7px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_0.5px,transparent_0.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px),radial-gradient(circle_at_center,theme(colors.gray.600/.56)_0.5px,transparent_0.5px)]"
              aria-hidden="true"
            />
            <span className="relative text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-500 dark:to-indigo-50">
              {children}
            </span>
          </div>
        </div> */}
      </div>
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }
        .border-rainbow {
          border-radius: 50%;
          border-style: solid;
          border-image: conic-gradient(
              from 180deg at 50% 50%,
              #f00,
              #ff0,
              #0f0,
              #0ff,
              #00f,
              #f0f,
              #f00
            )
            1;
        }
      `}</style>
    </div>
  );
}
