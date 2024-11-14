"use client";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";
import { useState } from "react";

const HeroAnimation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const { RiveComponent } = useRive({
    src: "https://cdn.prod.website-files.com/672e7d71f6441af1eae021e0/67337a97bef76e0f38ac4090_Auricles%20v1.4.riv",
    artboard: "Layout",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    onLoadError: (e) => {
      console.error("ERROR LOADING RIVE:", e);
      setLoadError(true);
    },
    onLoad: () => {
      console.log("LOADED RIVE");
      setIsLoaded(true);
    },
  });

  return (
    <div className="relative w-full h-screen min-h-[100px] -top-[100px] max-h-[1400px] bg-black overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {loadError && <div className="text-white">Error loading animation</div>}
        {!isLoaded && !loadError && (
          <div className="text-white">Loading animation...</div>
        )}
        <RiveComponent className="object-cover w-full h-full" />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black" />
      <div className="absolute inset-0 bg-transparent pointer-events-auto" />
    </div>
  );
};

export default HeroAnimation;
