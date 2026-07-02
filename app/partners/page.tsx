import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import Reveal from "@/components/Reveal";
import { partners } from "@/data/partners";

export default function PartnersPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Partners</h1>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Institutions and organizations whose support and collaboration help
          Sansthita continue its mission of serving vulnerable communities.
        </p>
      </section>

      {/* ================= PARTNERS CONTENT ================= */}

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle
            title="Institutional Partners"
            subtitle="Organizations and institutions that support Sansthita's mission."
          />

          {/* Partner List */}

          <div className="mt-12 space-y-10">
            {partners.map((partner, index) => (
              <Reveal
                key={index}
                delay={index * 100}
                className="flex flex-col md:flex-row items-start gap-6 p-6 border rounded-lg shadow-sm"
              >
                {/* Partner Logo */}

                {partner.image && (
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                )}

                {/* Partner Information */}

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {partner.name}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
