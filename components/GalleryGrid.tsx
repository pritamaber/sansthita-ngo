"use client";

import Image from "next/image";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

export default function GalleryGrid() {
  /*
    Lightbox state
    -1 means lightbox closed
  */
  const [index, setIndex] = useState(-1);

  /*
    List of all image filenames
    These exist inside:
    /public/images/all/
  */
  const images = [
    "Abused woman saved.jpeg",
    "Child help 01.jpeg",
    "Children draw compet 01.jpg",
    "Children draw compet 02.jpg",
    "Children draw compet 03.jpg",
    "Children draw compet 04.jpg",
    "Children draw compet 05.jpg",
    "Children draw compet 06.jpg",
    "Children draw compet 07.jpg",
    "Children draw compet 08.jpg",
    "Children draw compet 09.jpg",
    "Children draw compet 10.jpg",
    "Children draw compet 11.jpg",
    "Children draw compet 12.jpg",
    "Children draw compet 13.jpg",
    "Children draw compet 14.jpg",
    "Children play 01.jpg",
    "Children play 02.jpg",
    "Children play 03.jpg",
    "Children play 04.jpg",
    "Children play 05.jpg",
    "Children play 06.jpg",
    "Children play 07.jpg",
    "Children play 08.jpg",
    "Children play 09.jpg",
    "Cloth distribution puja 01.jpg",
    "Cloth distribution puja 02.jpg",
    "Covid 01.jpg",
    "Covid 02.jpg",
    "Covid 03.jpg",
    "Covid 04.jpg",
    "Covid 05.jpg",
    "Covid 07.jpg",
    "Covid 08.jpg",
    "Covid 09.jpg",
    "Covid 10.jpg",
    "Covid 11.jpg",
    "Holi 01.jpg",
    "Holi 02.jpg",
    "Holi 03.jpg",
    "Holi 04.jpg",
    "Holi 05.jpg",
    "Holi 06.jpg",
    "Independence day.jpeg",
    "Isisar prog 01.jpg",
    "Isisar prog 02.jpg",
    "Isisar prog 03.jpg",
    "Isisar prog 04.jpg",
    "Isisar prog 05.jpg",
    "Isisar prog 06.jpg",
    "Isisar prog 07.jpg",
    "Isisar prog 08.jpg",
    "Picnic 01.jpeg",
    "Rakhi celeb 01.jpg",
    "Rakhi celeb 02.jpg",
    "Rakhi celeb 03.jpg",
    "Rakhi celeb 04.jpg",
    "Rakhi celeb 05.jpg",
    "Rintu khara donation.jpeg",
    "Sansthita office and members 01.jpg",
    "Teacher day celeb 01.jpg",
    "Teacher day celeb 02.jpg",
    "Tree plant event.jpeg",
    "Womes day celeb 01.jpg",
    "Womes day celeb 02.jpg",
    "Womes day celeb 03.jpg",
    "Womes day celeb 04.jpg",
    "Womes day celeb 05.jpg",
  ];

  /*
    Caption generator
    Converts filename → meaningful caption
  */
  const getCaption = (name: string): string => {
    if (name.includes("Children draw compet"))
      return "Children Drawing Competition";

    if (name.includes("Children play"))
      return "Children Recreational Activities";

    if (name.includes("Cloth distribution"))
      return "Cloth Distribution for Families";

    if (name.includes("Covid") || name.includes("Codiv"))
      return "COVID Relief Support";

    if (name.includes("Holi")) return "Holi Celebration with Community";

    if (name.includes("Rakhi")) return "Rakhi Celebration Program";

    if (name.includes("Teacher day")) return "Teacher's Day Celebration";

    if (name.includes("Womes day")) return "Women's Day Celebration";

    if (name.includes("Tree plant")) return "Tree Plantation Drive";

    if (name.includes("Isisar prog")) return "Community Outreach Program";

    if (name.includes("Picnic")) return "Community Recreation Event";

    if (name.includes("Rintu khara donation"))
      return "Education Support for Student";

    if (name.includes("Child help")) return "Helping Children in Need";

    if (name.includes("Abused woman"))
      return "Support for Domestic Violence Survivor";

    if (name.includes("Independence")) return "Independence Day Celebration";

    if (name.includes("Sansthita office")) return "Sansthita Members Meeting";

    return "Sansthita Community Activity";
  };

  /*
    Lightbox slides
    Used by the Lightbox viewer
  */
  const slides = images.map((name) => ({
    src: `/images/all/${name}`,
    description: getCaption(name),
  }));

  return (
    <div>
      {/* ================= GALLERY GRID ================= */}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((name, i) => (
          <div
            key={i}
            className="cursor-pointer rounded-lg overflow-hidden shadow-md bg-white"
            onClick={() => setIndex(i)}
          >
            {/* Thumbnail Image */}
            <Image
              src={`/images/all/${name}`}
              alt="Sansthita activity"
              width={400}
              height={300}
              className="w-full h-48 object-cover hover:scale-105 transition"
            />
          </div>
        ))}
      </div>

      {/* ================= LIGHTBOX VIEWER ================= */}

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
