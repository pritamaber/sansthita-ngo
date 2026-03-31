"use client";

import Image from "next/image";

export default function MembersPage() {
  const members = ["members1.jpeg", "members2.jpeg", "members3.jpeg"];

  const agmImages = ["agm1.jpeg", "agm2.jpeg"];

  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Our Members</h1>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Meet the dedicated individuals who contribute their time, effort and
            compassion to drive Sansthita’s mission forward.
          </p>
        </div>
      </section>

      {/* ================= MEMBERS SECTION ================= */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Our Members
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-64 md:h-72 bg-gray-100 rounded-lg overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/all/${img}`}
                  alt="Sansthita Members"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-gray-200 max-w-6xl mx-auto" />

      {/* ================= AGM SECTION ================= */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
            Annual General Meeting (AGM)
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
            Moments from our Annual General Meeting where members come together
            to review progress, share ideas and strengthen our mission.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {agmImages.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-64 md:h-80 bg-white rounded-lg overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/all/${img}`}
                  alt="AGM Event"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
