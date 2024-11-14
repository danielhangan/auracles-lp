"use client";
interface PageHeaderProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  description?: string;
}

import { useRive } from "@rive-app/react-canvas";
import HeroAnimation from "./HeroRive";

export default function PageHeader({
  className,
  // children,
  title,
  description,
}: PageHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className || ""}`}>
      <div>
        <h1 className="pb-4 text-5xl font-bold text-gray-800 font-inter-tight md:text-6xl dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200">
          {title}
        </h1>
        <p className="text-lg font-semibold text-gray-700 dark:text-gray-100">
          {description}
        </p>
      </div>
    </div>
  );
}
