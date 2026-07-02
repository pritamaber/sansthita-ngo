import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { donors } from "@/data/supporters";

export default function SupportersPage() {
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

      <Reveal className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8 text-center max-w-4xl mx-auto shadow-sm">
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
      </Reveal>

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
            {donors.map((donor, index) => (
              <Reveal
                key={donor.name}
                delay={(index % 3) * 100}
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
