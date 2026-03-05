import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function PartnersPage() {
  /*
    Institutional partners supporting Sansthita.
    Each partner can include a logo and description.
  */

  const partners = [
    {
      name: "Rotary Club",
      image: "/images/all/Rotary club.jpg",
      description:
        "Sansthita has been able to create meaningful change through the generous support and collaboration of the Rotary Club.",
    },
    {
      name: "State Bank of India – Kalindi Branch",
      image: "/images/all/Sbi kalindi.jpg",
      description:
        "We are grateful to the State Bank of India, Kalindi Branch, for their cooperation and encouragement towards our social initiatives.",
    },
    {
      name: "Apollo Hospital",
      image: "/images/all/Apollo hospital.jpg",
      description:
        "Apollo Hospital has supported Sansthita in organizing health awareness programs and medical initiatives for the community.",
    },
    {
      name: "Government Representatives",
      image: null,
      description: (
        <>
          We sincerely acknowledge the guidance and support of Government
          Representative <strong>Shri Sujit Basu</strong> and respected
          Councilor <strong>Smt Suchayita Das</strong>.
        </>
      ),
    },
  ];

  return (
    <main className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Our Partners"
          subtitle="Institutions and organizations that support Sansthita's mission."
        />

        {/* Partner List */}
        <div className="mt-12 space-y-10">
          {partners.map((partner, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
