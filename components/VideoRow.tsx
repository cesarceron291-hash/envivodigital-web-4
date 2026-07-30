"use client";

import { Video } from "@/types";
import VideoCard from "./VideoCard";

interface Props {
  categoria: string;
  videos: Video[];
  onSelect: (video: Video) => void;
}

export default function VideoRow({ categoria, videos, onSelect }: Props) {
  if (videos.length === 0) return null;

  return (
    <div className="mb-12">
      <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
        {categoria}
      </h3>
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onSelect={onSelect} />
        ))}
      </div>
    </div>
  );
}
