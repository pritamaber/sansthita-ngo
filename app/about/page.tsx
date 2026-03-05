import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Sansthita
          </h1>

          <p className="text-lg text-gray-200">
            A voice for the voiceless — standing for justice, dignity and
            community empowerment.
          </p>
        </div>
      </section>

      {/* ================= STUDENT SUPPORT ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Supporting Education & Young Dreams
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita supports underprivileged children through educational,
              cultural, and sports programs. From Independence Day celebrations
              and drawing classes to fun competitions and festival activities,
              we create joyful opportunities that inspire confidence and nurture
              young minds.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Today, nearly 100 students are benefiting from these programs.
              Through regular engagement, mentorship and community support,
              Sansthita encourages children to explore their talents and build a
              brighter future.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita is always ready to extend a helping hand to those in
              need. When meritorious students find their dreams limited by
              financial hardship, the organization stands beside them.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Since 2015, Sansthita has provided financial support to poor and
              meritorious students pursuing higher education. Many of them have
              successfully completed their studies and secured good jobs.
            </p>
          </div>

          {/* Image */}

          <div>
            <div className="relative h-72 w-full">
              <Image
                src="/images/all/Rintu khara donation.jpeg"
                alt="Student supported by Sansthita"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-sm text-gray-600 mt-3 text-center leading-relaxed font-bold">
              Rantu Khara, a 2024 student of Goenka College, received a cheque
              from our President, Ms. Geeta Mukherjee, to support his higher
              studies.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WOMEN EMPOWERMENT ================= */}

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}

          <div>
            <div className="relative h-72 w-full">
              <Image
                src="/images/all/Womes day celeb 02.jpg"
                alt="Women empowerment event"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-sm text-gray-600 mt-3 text-center leading-relaxed font-semibold">
              Women’s Day celebration organized by Sansthita to promote
              empowerment, awareness and community solidarity.
            </p>
          </div>

          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Standing for Justice and Dignity
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita stands against violence and injustice. We support
              vulnerable communities, empower women and protect human dignity.
              Through awareness, education and community outreach, we strive to
              build a safer and more compassionate society.
            </p>

            <p className="text-gray-700 leading-relaxed">
              We are especially committed to supporting women facing domestic
              violence and hardship, helping them find safety, strength and
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ================= PROTECTING VULNERABLE WOMEN ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Standing Beside the Vulnerable
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita believes that every individual deserves safety, dignity
              and compassion. Our members work closely with communities to
              support individuals facing hardship and violence.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              In one such case, with the support of Sansthita, an abused woman
              was safely shifted to an old age home where she could live with
              security, respect and care.
            </p>

            <p className="text-gray-700 leading-relaxed">
              This effort reflects our commitment to protecting vulnerable
              members of society and ensuring that no one is left alone in their
              time of need.
            </p>
          </div>

          {/* Image */}

          <div>
            <div className="relative h-72 w-full">
              <Image
                src="/images/all/Abused woman saved.jpeg"
                alt="Support provided to a vulnerable woman"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-sm text-gray-600 mt-3 text-center leading-relaxed font-semibold">
              With the support of Sansthita, an abused woman was safely shifted
              to an old age home to ensure her protection and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEGAL SUPPORT ================= */}

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}

          <div>
            <div className="relative h-72 w-full">
              <Image
                src="/images/all/Legal.jpeg"
                alt="Legal support provided by Sansthita"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-sm text-gray-600 mt-3 text-center leading-relaxed font-semibold">
              A group of young legal minds visited Sansthita to extend their
              support and provide guidance on legal awareness and assistance for
              those in need.
            </p>
          </div>

          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              Providing Legal Support
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita provides guidance and legal assistance to individuals
              facing injustice, domestic violence and social hardship. Through
              collaboration with legal professionals and community advocates, we
              help victims understand their rights and seek proper protection.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our mission is to ensure that vulnerable people are not left alone
              in their struggle. By offering legal awareness and support, we
              empower individuals to pursue justice and reclaim their dignity.
            </p>
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
              Many meetings take place under temporary structures, on footpaths,
              or inside the homes of our members — because service to society
              cannot wait for comfort or convenience.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Even without a permanent office, our mission continues with
              dedication and fearless hearts. With your support, we hope to
              create a stable space to serve society more effectively.
            </p>
          </div>

          {/* Image */}

          <div>
            <div className="relative h-72 w-full">
              <Image
                src="/images/all/Sansthita office and members 01.jpg"
                alt="Sansthita members meeting"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <p className="text-sm text-gray-600 mt-3 text-center leading-relaxed font-semibold">
              The early days of Sansthita — a humble beginning where members
              gathered with dedication and hope to start their journey of
              serving society.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
