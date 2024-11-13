"use client";
import { Alignment, Fit, Layout, useRive } from "@rive-app/react-canvas";

const HeroAnimation = () => {
  const { RiveComponent } = useRive({
    src: "https://cdn.prod.website-files.com/672e7d71f6441af1eae021e0/67337a97bef76e0f38ac4090_Auricles%20v1.4.riv",
    artboard: "Layout", // Specify the artboard if needed
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    onLoadError: () => console.log("ERROR LOADING RIVE"),
    onLoad: () => console.log("LOADED RIVE"),
  });

  return (
    <div className="relative w-full h-[1400px] bg-black">
      <div className="absolute inset-0 -top-[600px]">
        <RiveComponent className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-transparent pointer-events-auto" />
    </div>
  );
};

export default HeroAnimation;
