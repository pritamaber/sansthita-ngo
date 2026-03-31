import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function SupportersPage() {
  const donors = [
    {
      name: "Mr. Arpan & Mrs. Sayantini Basak",
      image: "/images/all/Arpan Sayanti.jpeg",
    },
    {
      name: "Mr. Krishnendu & Mrs. Rupa Gupta",
      image: "/images/all/Krishnendu Rupa.jpeg",
    },
    { name: "Mr. Subhash Basu", image: "/images/all/Subhash.jpeg" },
    { name: "Mr. Gautam Saha", image: "/images/all/Gautam.jpeg" },
    { name: "Ms. Banani Mukherjee", image: "/images/all/Banani.jpeg" },
    { name: "Mr. Arjan Mukherjee", image: "/images/all/Arjan.jpeg" },
    { name: "Ms. Shampa Mukherjee", image: "/images/all/Shampa.jpeg" },
    {
      name: "Mr. Prasenjeet & Mrs. Saumi Ray",
      image: "/images/all/Prasenjeet.jpeg",
    },
    {
      name: "Mr. Bidyut & Mrs. Pamira Mandal",
      image: "/images/all/Bidyut.jpeg",
    },
    {
      name: "A group of Young Legal minds from Howrah",
      image: "/images/all/Legal.jpeg",
    },
    { name: "Ms Chitra Ray", image: "/images/all/Chitra.jpeg" },

    {
      name: "Mr. Swapan Kumar Mukherjee & Mrs. Geeta Mukherjee",
      image: "/images/all/geeta_swapan_mukherjee.jpeg",
    },
    {
      name: "Mr. Satarup Bhattacherjee & Mr. Ayan Bhattacherjee",
      image: "/images/all/satarup_ayan_bhattacharjee.jpeg",
    },
  ];

  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Supporters</h1>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Individuals and well-wishers whose generosity and encouragement help
          Sansthita continue its mission of service and compassion.
        </p>
      </section>
      {/* ================= SPECIAL MENTION ================= */}

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 text-center max-w-4xl mx-auto shadow-sm">
        <h3 className="text-2xl font-semibold text-blue-900 mb-4">
          Special Gratitude
        </h3>
        <div className="relative w-full max-w-md mx-auto h-72 md:h-96 mb-6">
          <Image
            src="/images/all/sudipta_chaterjee.jpeg"
            alt="Dr. Sudipta Chatterjee"
            fill
            className="object-contain rounded-md"
          />
        </div>

        <p className="text-gray-700 leading-relaxed">
          Dr. Sudipta Chatterjee has been a constant source of motivation for
          Sansthita. His encouragement and vision have guided us to grow and
          move forward with confidence.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          This website stands as a reflection of his thoughtful advice and
          support. We remain deeply grateful for his kindness and the
          inspiration he continues to share.
        </p>
      </div>

      {/* ================= SUPPORTERS CONTENT ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Gratitude Corner"
            subtitle="Kind-hearted individuals and families who stand beside Sansthita in our mission."
          />

          {/* Description */}

          <div className="mt-6 space-y-6 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              Many kind-hearted and compassionate individuals stand beside
              Sansthita in our mission to support vulnerable members of society.
            </p>

            <p>
              Their encouragement, generosity and moral support help us continue
              our work even with limited resources.
            </p>
            <p className="font-semibold">
              We are especially thankful to a generous couple from Poland who,
              despite the distance, continue to remember and support the
              underprivileged members of our society.
            </p>

            <p className="font-medium">
              Together, we transform compassion into action and hope into
              reality.
            </p>
          </div>

          {/* Donor Images */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
            {donors.map((donor) => (
              <div
                key={donor.name}
                className="text-center bg-gray-50 rounded-lg p-4 shadow-sm"
              >
                <div className="relative w-full h-72 md:h-80 mb-4 bg-white rounded-md flex items-center justify-center">
                  <Image
                    src={donor.image}
                    alt={donor.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <p className="text-sm font-medium text-gray-800">
                  {donor.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
