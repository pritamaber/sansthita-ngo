import Image from "next/image";
import Reveal from "@/components/Reveal";

type Props = {
  title: string;
  story: string;
  image: string;
};

export default function StoryCard({ title, story, image }: Props) {
  return (
    <Reveal className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Story Image */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />

      {/* Story Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3 text-black">{title}</h3>

        <p className="text-gray-600 text-sm leading-relaxed">{story}</p>
      </div>
    </Reveal>
  );
}
