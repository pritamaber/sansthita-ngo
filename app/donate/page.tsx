import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function DonatePage() {
  /*
    Donation page for supporters who want to
    contribute to Sansthita's social initiatives.
  */

  return (
    <main className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionTitle
          title="Support Our Mission"
          subtitle="Your contribution helps Sansthita support vulnerable communities, empower women and assist underprivileged children."
        />

        {/* Donation Intro */}
        <p className="text-gray-700 text-center max-w-3xl mx-auto mt-8 leading-relaxed">
          At Sansthita [Registration No. S/1L/31619 ], we believe that small
          contributions can create meaningful change. Your support helps us
          continue our initiatives including women protection programs,
          educational assistance for children, community outreach and emergency
          support for those in need.
        </p>

        {/* ================= DONATION OPTIONS ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {/* ================= QR CODE DONATION ================= */}

          <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Scan to Donate
            </h3>

            {/* QR Code Image */}
            <div className="flex justify-center bg-blue-50">
              <Image
                src="/images/all/Payment QR.jpg"
                alt="Donation QR Code"
                width={250}
                height={250}
                className="rounded-md   "
              />
            </div>

            <p className="text-gray-600 text-sm mt-4 bg-blue-50 border border-blue-100">
              Scan this QR code using any UPI app to support Sansthita.
            </p>
          </div>

          {/* ================= BANK TRANSFER ================= */}

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

              {/* Treasurer Contact */}
              <p className="pt-4">
                <strong>Treasurer Contact:</strong>{" "}
                <a href="tel:7003036536" className="hover:underline">
                  +91-7003036536
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Transparency note */}

        <p className="mt-16 text-center text-gray-600 text-sm">
          Sansthita ensures transparency and responsible use of every
          contribution received. Your support helps bring hope and dignity to
          those who need it the most.
        </p>
      </div>
    </main>
  );
}
