import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function DonatePage() {
  /*
    Donation page for supporters who want to
    contribute to Sansthita's social initiatives.
  */

  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Support Our Mission</h1>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Your contribution helps Sansthita support vulnerable communities,
          empower women and assist underprivileged children.
        </p>
      </section>

      {/* ================= DONATION CONTENT ================= */}

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionTitle
            title="Donate to Sansthita"
            subtitle="Your support helps us continue our work in protecting and empowering vulnerable communities."
          />

          {/* Donation Intro */}

          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-8 leading-relaxed">
            At Sansthita [Registration No. S/1L/31619], we believe small
            contributions can create big change. Your donation helps us fight
            violence against women, provide assistance to survivors and promote
            awareness. It also supports underprivileged communities through
            education, healthcare and social development initiatives.
          </p>

          <p className="text-gray-700 text-center max-w-3xl mx-auto mt-4 leading-relaxed">
            We ensure transparency and responsible use of every donation
            received. Be the reason someone finds hope again.
          </p>

          {/* ================= SUGGESTED DONATIONS ================= */}

          {/* <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-black mb-6">
              Suggested Contribution
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="font-semibold text-lg text-black">₹500</p>
                <p className="text-sm text-gray-600">
                  Support awareness programs
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="font-semibold text-lg text-black">₹1000</p>
                <p className="text-sm text-gray-600">
                  Help a child with education
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="font-semibold text-lg text-black">₹2500</p>
                <p className="text-sm text-gray-600">
                  Support women protection
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
                <p className="font-semibold text-lg text-black">₹5000</p>
                <p className="text-sm text-gray-600">
                  Sponsor outreach programs
                </p>
              </div>
            </div>
          </div> */}

          {/* ================= DONATION OPTIONS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {/* QR CODE */}

            <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Scan to Donate
              </h3>

              <div className="flex justify-center bg-blue-50 relative w-fit mx-auto">
                <Image
                  src="/images/all/Payment QR.jpg"
                  alt="Donation QR Code"
                  width={250}
                  height={250}
                  className="rounded-md"
                />

                {/* Banner Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/70 text-white text-sm font-semibold px-4 py-2 rounded">
                    Dummy QR — Original Coming Soon
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-4 bg-blue-50 border border-blue-100">
                Scan this QR code using any UPI app to support Sansthita.
              </p>
            </div>

            {/* BANK TRANSFER */}

            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Bank Transfer
              </h3>

              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Bank:</strong> State Bank of India
                </p>

                <p>
                  <strong>Branch:</strong> Kalindi Branch
                </p>

                <p>
                  <strong>Account Name:</strong> Sansthita
                </p>

                <p>
                  <strong>Account Number:</strong> XXXXXXXX
                </p>

                <p>
                  <strong>IFSC Code:</strong> SBINXXXXXXXX
                </p>

                <p className="pt-4">
                  <strong>Treasurer Contact:</strong>{" "}
                  <a href="tel:7003036536" className="hover:underline">
                    +91-7003036536
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Transparency */}

          <p className="mt-16 text-center text-gray-600 text-sm">
            Sansthita ensures transparency and responsible use of every
            contribution received. Your support helps bring hope and dignity to
            those who need it the most.
          </p>
        </div>
      </section>
    </main>
  );
}
