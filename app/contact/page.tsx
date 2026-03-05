export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>

          <p className="text-lg text-gray-200">
            If you need assistance, want to support our work, or wish to connect
            with our team, please reach out to us through the details below.
          </p>
        </div>
      </section>

      {/* ================= CONTACT DETAILS ================= */}

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* LEFT COLUMN */}

        <div className="space-y-10">
          {/* Address */}

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">Address</h2>

            <p className="text-gray-700 leading-relaxed">
              B 23/1, Kalindi Housing Estate
              <br />
              Lake Town
              <br />
              Kolkata – 700089
            </p>
          </div>

          {/* Email */}

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">Email</h2>

            <p className="text-gray-700">sansthita2025.kalindi@gmail.com</p>
          </div>
        </div>

        {/* RIGHT COLUMN */}

        <div className="space-y-10">
          {/* General Contact */}

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              General Information
            </h2>

            <ul className="text-gray-700 space-y-2">
              <li>+91 99035 07605</li>
              <li>+91 78748 19964</li>
            </ul>
          </div>

          {/* Committee Contacts */}

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Committee Contacts
            </h2>

            <ul className="text-gray-700 space-y-2">
              <li>+91 94330 28584</li>
              <li>+91 90518 57055</li>
              <li>+91 90511 71996</li>
              <li>+91 70030 36536</li>
            </ul>
          </div>

          {/* Technical Support */}

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Technical Support
            </h2>

            <p className="text-gray-700">+91 78748 19964</p>
          </div>
        </div>
      </section>
    </main>
  );
}
