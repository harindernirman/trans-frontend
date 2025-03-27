"use client";
import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

import { NavigationSection } from "./NavigationSection";
import { NavSheet } from "./NavSheet";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [header, setHeader] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollHandler = () => {
    if (window.scrollY > 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://a15.9c0.myftpupload.com/home_video_def.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}

      {/* Logo */}
      <div
        className={`bg-[transparent]  
         ${header ? "fixed w-full  bg-black z-100 " : "bg-[transparent]"}`}
      >
        <div className=" relative mx-auto max-w-screen-xl items-center justify-between flex p-6">
          <div>
            <img src="profile.png" alt="Logo" className="h-15" />
          </div>
          <div className="flex gap-16">
            <NavigationSection />
            {/* <Navbar/> */}

            <button className="rounded-full bg-red-400 px-4  font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              Call to Action
            </button>
          </div>

          <button className="md:hidden">
            <NavSheet />
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative flex h-full flex-col items-center justify-center  text-center text-white">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Welcome to Our World
        </h1>
        <p className="mb-8 max-w-2xl text-lg md:text-xl">
          Discover amazing experiences and unforgettable moments with us.
        </p>
        <button className="rounded-full bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Get Started
        </button>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 z-10 flex gap-4">
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={toggleMute}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  );
}
