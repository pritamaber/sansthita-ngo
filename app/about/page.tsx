import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Sansthita
          </h1>

          <p className="text-lg text-gray-200">
            Standing beside oppressed women and vulnerable communities with
            compassion, courage and commitment.
          </p>

          <p className="text-sm text-gray-300 mt-2">Established in 2005</p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}

      <section className="py-20">
        <Reveal className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Womes day celeb 02.jpg"
              alt="Sansthita women empowerment initiative"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">Who We Are</h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita is a registered non-profit organization dedicated to
              supporting oppressed and vulnerable women who face violence,
              injustice and social hardship.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              The organization works closely with local communities to provide
              protection, guidance and emotional support to individuals who feel
              helpless or unheard.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our goal is to restore dignity, safety and confidence so that
              every woman can rebuild her life with respect and independence.
            </p>
          </div>
        </Reveal>
      </section>
      {/* ================= HOW SANSTHITA BEGAN ================= */}

      <section className="bg-gray-50 py-20">
        <Reveal className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}

          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              The Night That Started Sansthita
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              In the year 2000, it was an ordinary night in Kalindi Housing
              Estate. Residents were preparing to go to bed just like any other
              day. Suddenly, everything changed.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              A heartbreaking scene unfolded before the community — a woman and
              her two young children were being cruelly forced out of their home
              by her husband and his relatives, left helpless in the darkness of
              the night.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              That night, humanity stood up for her. The residents of the
              community came together and stood firmly by her side. With the
              help of local residents and the police, the mother and her
              children were eventually able to return to their home and find
              shelter.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              What followed was a long struggle to restore her rights and
              dignity. The fight continued for nearly five years as the
              community continued to support her.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              During this difficult time, IPS Officer{" "}
              <strong>Ms. Bharati Ghosh</strong> of Bhawani Bhavan encouraged
              the residents to form an organization that could support many more
              oppressed women facing similar situations.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Inspired by this guidance, the community came together to create
              an organization dedicated to justice and dignity. In 2005, that
              vision became reality when <strong>Sansthita</strong> was
              officially registered as a human rights organization.
            </p>
          </div>

          {/* Image */}

          <div className="relative h-80 w-full">
            <Image
              src="/images/all/Group-Gathering.jpeg"
              alt="Community support for vulnerable woman"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </Reveal>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}

      <section className="bg-gray-50 py-20">
        <Reveal className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black">
              What Makes Sansthita Different
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Sansthita operates at the grassroots level. Our members directly
              engage with communities, families and local authorities to support
              those in distress.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              We maintain strong cooperation with local police and social
              institutions to ensure safety, justice and protection for
              vulnerable individuals.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Even with limited resources, our members continue to serve society
              with dedication and compassion.
            </p>
          </div>

          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Abused woman saved.jpeg"
              alt="Helping vulnerable women"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </Reveal>
      </section>

      {/* ================= OUR JOURNEY ================= */}

      <section className="py-20">
        <Reveal className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-72 w-full">
            <Image
              src="/images/all/Sansthita office and members 01.jpg"
              alt="Early days of Sansthita"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

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
              The structure may be temporary, but the mission is permanent. With
              the support of compassionate people, we hope to build a stable
              place from where we can serve society more effectively.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ================= OUR MISSION ================= */}

      <section className="bg-gray-50 py-20">
        <Reveal className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Mission</h2>

          <p className="text-gray-700 leading-relaxed">
            Our mission is to stand beside oppressed women and vulnerable
            individuals, offering protection, legal guidance, emotional support
            and community assistance. Through awareness and grassroots action,
            we aim to build a society where justice, dignity and compassion
            prevail.
          </p>
        </Reveal>
      </section>

      {/* ================= OUR VISION ================= */}

      <section className="py-20">
        <Reveal className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Our Vision</h2>

          <p className="text-gray-700 leading-relaxed">
            Sansthita envisions a society where no woman suffers in silence,
            where communities stand together against injustice and where every
            individual is treated with dignity, safety and respect.
          </p>
        </Reveal>
      </section>
      {/* ================= VIEW OUR WORK ================= */}

      <section className="bg-gray-50 py-16 text-center">
        <Reveal className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-black">
            See Our Work in Action
          </h2>

          <p className="text-gray-700 mb-8">
            Over the years, Sansthita has supported oppressed women, organized
            community programs, helped vulnerable individuals and worked closely
            with local communities. Explore some of our initiatives and
            activities.
          </p>

          <a
            href="/works"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            View Our Works
          </a>
        </Reveal>
      </section>
    </main>
  );
}
