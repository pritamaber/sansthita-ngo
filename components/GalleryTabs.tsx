"use client";

import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import VideoGrid from "@/components/VideoGrid";

export default function GalleryTabs() {
  const [tab, setTab] = useState<"photos" | "videos">("photos");

  return (
    <div>
      {/* TAB SWITCHER */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setTab("photos")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            tab === "photos"
              ? "bg-blue-900 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Photos
        </button>

        <button
          onClick={() => setTab("videos")}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            tab === "videos"
              ? "bg-blue-900 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Videos
        </button>
      </div>

      {tab === "photos" ? <GalleryGrid /> : <VideoGrid />}
    </div>
  );
}
