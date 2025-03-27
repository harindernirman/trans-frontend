"use client";

import BlogCard from "@/components/Feature/BlogCard";
import WearYourStory from "@/components/Feature/WearYourStory";
import HeroSection from "@/components/Header/HeroSection";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <HeroSection />
      <WearYourStory/>
      <BlogCard />
      
    </div>
  );
}
