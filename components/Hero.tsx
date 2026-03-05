import Image from "next/image";

export default function Hero() {
  /*
    Hero section with overlapping circular images
    showing children activities and women empowerment.
  */

  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* ================= TEXT CONTENT ================= */}

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Supporting Vulnerable Women
            <br />
            and Children with Care and Opportunity
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
            Sansthita [Registration No. S/1L/31619] is a registered non-profit
            organization run primarily by women. The organization stands firmly
            against violence and injustice while working to empower women and
            support vulnerable communities.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="/about"
              className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Learn More
            </a>

            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* ================= IMAGE AREA ================= */}

        <div className="flex justify-center relative">
          {/* Large Circle - Children */}
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-700 rounded-full blur-3xl opacity-40"></div>

            <Image
              src="/images/all/Holi 06.jpg"
              alt="Children community activities"
              fill
              className="object-cover rounded-full border-4 border-white shadow-xl"
            />
          </div>

          {/* Small Overlapping Circle - Women */}

          <div className="absolute bottom-0 right-0 w-36 h-36 md:w-44 md:h-44">
            <Image
              src="/images/all/Womes day celeb 01.jpg"
              alt="Women empowerment event"
              fill
              className="object-cover rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
