import { videos } from "@/data/videos";
import Reveal from "@/components/Reveal";

export default function VideoGrid() {
  if (videos.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        <p className="text-lg font-medium">Videos coming soon</p>
        <p className="text-sm mt-2 max-w-md mx-auto">
          We are working on adding videos from Sansthita&apos;s recent
          programs and events. Please check back soon.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video, index) => (
        <Reveal
          key={video.src}
          delay={(index % 3) * 100}
          className="rounded-lg overflow-hidden shadow-md bg-white"
        >
          <video
            src={video.src}
            controls
            preload="metadata"
            className="w-full h-56 object-cover bg-black"
          />
          <p className="text-sm text-gray-700 p-3 text-center">
            {video.title}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
