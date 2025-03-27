"use client";

import BlogCard from "@/components/Feature/BlogCard";
import HeroSection from "@/components/Header/HeroSection";
import StickyMenu from "@/components/Header/StickyMenu";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </div>
  );
}
