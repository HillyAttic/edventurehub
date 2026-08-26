import type { Metadata } from "next";
import "./globals.css";
import OurProjectsSection from "./OurProjectsSection";

export const metadata: Metadata = {
  title: "edVenture – Our Projects",
  description: "We've partnered with organizations across energy, healthcare, education, and retail to deliver learning that works.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <OurProjectsSection />
    </main>
  );
}