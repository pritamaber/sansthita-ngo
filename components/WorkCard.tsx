import Image from "next/image";

interface WorkCardProps {
  image: string;
  alt: string;
  caption: string;
}

export default function WorkCard({ image, alt, caption }: WorkCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image container */}
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
        <Image src={image} alt={alt} fill className="object-contain p-2" />
      </div>

      {/* Caption */}
      <p className="text-sm text-gray-700 p-4 text-center">{caption}</p>
    </div>
  );
}
