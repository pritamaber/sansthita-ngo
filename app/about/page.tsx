import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Sansthita
          </h1>

          <p className="text-lg text-gray-200 mb-2">
            A voice for the voiceless — standing for justice, dignity and
            community empowerment.
          </p>

          <p className="text-sm text-gray-300">Established in 2005</p>
        </div>
      </section>

      {/* ================= WOMEN PROTECTION ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}

          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Womes day celeb 02.jpg"
              alt="Women empowerment event"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Standing for Justice and Dignity
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Since its establishment in 2005, Sansthita has been committed to
              supporting oppressed and vulnerable women facing violence,
              injustice and social hardship.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The organization works closely with communities to provide
              emotional support, legal guidance and protection to women in
              distress.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our mission is to help women regain confidence, dignity and the
              opportunity to rebuild their lives with safety and respect.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROTECTING VULNERABLE WOMEN ================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Standing Beside the Vulnerable
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita believes that every individual deserves safety, dignity
              and compassion. Our members work tirelessly to support women
              facing abuse, domestic violence and social neglect.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              In several cases, Sansthita has helped vulnerable women find
              temporary shelter and protection until a stable solution could be
              secured.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Through continuous support and guidance, many women have been able
              to restore their dignity and rebuild their lives.
            </p>
          </div>

          {/* Image */}

          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Abused woman saved.jpeg"
              alt="Support provided to a vulnerable woman"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= CHILDREN PROGRAMS ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}

          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Children draw compet 03.jpg"
              alt="Children drawing competition"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Supporting Children's Growth
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita also supports underprivileged children through
              educational and recreational activities such as drawing
              competitions, cultural programs and community events.
            </p>

            <p className="text-gray-700 leading-relaxed">
              These initiatives encourage creativity, confidence and learning
              among young minds while creating joyful community experiences.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION SUPPORT ================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Supporting Education
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Since 2015, Sansthita has supported meritorious students from
              financially challenged backgrounds to pursue higher education.
            </p>

            <p className="text-gray-700 leading-relaxed">
              With the help of the organization and its members, many students
              have successfully completed their studies and secured good jobs,
              helping improve the future of their families.
            </p>
          </div>

          {/* Image */}

          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Rintu khara donation.jpeg"
              alt="Education support provided by Sansthita"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ================= HUMBLE BEGINNING ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              A Journey Rooted in a Humble Beginning
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita was not built inside permanent office walls. It was
              built on courage, compassion and commitment.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Many meetings took place under temporary structures, on footpaths,
              or inside the homes of our members — because service to society
              cannot wait for comfort or convenience.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Even without a permanent office, the mission of Sansthita
              continues with unwavering dedication and fearless hearts.
            </p>
          </div>

          {/* Image */}

          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Sansthita office and members 01.jpg"
              alt="Sansthita members meeting"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
