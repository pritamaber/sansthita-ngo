"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { galleryGroups } from "@/data/gallery";
import Reveal from "@/components/Reveal";

export default function GalleryGrid() {
  const [index, setIndex] = useState(-1);

  const flatImages = galleryGroups.flatMap((group) => group.images);

  const slides = flatImages.map(({ file, caption }) => ({
    src: `/images/all/${encodeURIComponent(file)}`,
    description: caption,
  }));

  const groupsWithOffsets = galleryGroups.reduce<
    { group: (typeof galleryGroups)[number]; startIndex: number }[]
  >((acc, group) => {
    const previous = acc[acc.length - 1];
    const startIndex = previous
      ? previous.startIndex + previous.group.images.length
      : 0;
    return [...acc, { group, startIndex }];
  }, []);

  return (
    <div className="space-y-16">
      {groupsWithOffsets.map(({ group, startIndex }) => {
        return (
          <div key={group.title}>
            {/* GROUP HEADING */}
            <Reveal className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-6 bg-blue-900 rounded-full" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {group.title}
              </h3>
            </Reveal>

            {/* GROUP GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.images.map(({ file, caption }, localIndex) => {
                const slideIndex = startIndex + localIndex;

                return (
                  <Reveal
                    key={file}
                    delay={(localIndex % 8) * 60}
                    className="cursor-pointer rounded-lg overflow-hidden shadow-md bg-white"
                  >
                    <div
                      className="relative w-full aspect-square bg-gray-100 overflow-hidden"
                      onClick={() => setIndex(slideIndex)}
                    >
                      <Image
                        src={`/images/all/${encodeURIComponent(file)}`}
                        alt={caption}
                        fill
                        sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                        className="object-cover hover:scale-105 transition duration-300"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* LIGHTBOX */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions]}
      />
    </div>
  );
}
