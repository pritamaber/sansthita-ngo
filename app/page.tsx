import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ImpactSection from "@/components/ImpactSection";
import StoryCard from "@/components/StoryCard";
import SupportSection from "@/components/SupportSection";
import CallToAction from "@/components/CallToAction";

/*
  Homepage Component
  -------------------
  Sections included:

  1. Hero
  2. What We Do
  3. Impact Stories
  4. Gallery Preview
  5. Impact Statistics
  6. Call To Action
  7. Support / Contact
*/

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= SECTION DIVIDER ================= */}
      <div className="flex justify-center py-1">
        <div className="w-12 h-[1px] bg-gray-300"></div>
      </div>

      {/* ================= WHAT WE DO ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="What We Do"
            subtitle="Sansthita works across multiple areas to support vulnerable communities and empower individuals."
          />

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Women Protection */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/women/Womes day celeb 01.jpg"
                alt="Women empowerment program"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-black">
                  Women Protection
                </h3>

                <p className="text-gray-600 text-sm">
                  Supporting women facing domestic violence through legal
                  guidance, emotional counselling and community support.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/education/Rintu khara donation.jpeg"
                alt="Education support program"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-black">
                  Education Programs
                </h3>

                <p className="text-gray-600 text-sm">
                  Organizing drawing competitions, cultural activities and
                  educational support for underprivileged children.
                </p>
              </div>
            </div>

            {/* Relief */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/impact/Cloth distribution puja 01.jpg"
                alt="Community relief distribution"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-black">
                  Community Relief
                </h3>

                <p className="text-gray-600 text-sm">
                  Distributing clothes, food and essential supplies to families
                  in need across different communities.
                </p>
              </div>
            </div>

            {/* Child Development */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src="/images/children/Children play 01.jpg"
                alt="Children development activities"
                width={400}
                height={250}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 text-black">
                  Child Development
                </h3>

                <p className="text-gray-600 text-sm">
                  Recreational activities and events that build confidence,
                  creativity and joy among children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="flex justify-center py-1">
        <div className="w-12 h-[1px] bg-gray-300"></div>
      </div>

      {/* ================= IMPACT STORIES ================= */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Survivor's stories"
            subtitle="Real lives changed through the support and compassion of Sansthita."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <StoryCard
              title="Arpita's Journey"
              image="/images/women/Women violence.jpg"
              story="Arpita[name changed for privacy] came to Sansthita after facing severe domestic abuse. With legal assistance, emotional support and employment opportunities arranged by our members, she rebuilt her life."
            />

            <StoryCard
              title="Prerna's Story"
              image="/images/women/Women violence.jpg"
              story="Prerna[name changed for privacy] faced emotional torture in her marital home and approached Sansthita for help. Our members stood beside her and helped secure a job for her son."
            />

            <StoryCard
              title="Asha's Story"
              image="/images/women/Women violence.jpg"
              story="After being forced out of her home, Asha[name changed for privacy] wandered the streets for several days before Sansthita found her and helped secure a safe shelter."
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="flex justify-center py-1">
        <div className="w-12 h-[1px] bg-gray-300"></div>
      </div>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Our Activities"
            subtitle="A glimpse of our work and community programs."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {/* Drawing Competition */}

            <div>
              <Image
                src="/images/children/Children draw compet 14.jpg"
                alt="Children drawing competition"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Children participating in a drawing competition organized by
                Sansthita.
              </p>
            </div>

            {/* Children Activities */}

            <div>
              <Image
                src="/images/children/Children play 01.jpg"
                alt="Children activities"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Children enjoying fun and learning activities organized by
                Sansthita.
              </p>
            </div>

            {/* Covid Relief */}

            <div>
              <Image
                src="/images/relief/Covid 05.jpg"
                alt="Relief support"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Sansthita distributing relief support during the COVID pandemic.
              </p>
            </div>

            {/* Holi Celebration */}

            <div>
              <Image
                src="/images/events/Holi 02.jpg"
                alt="Holi celebration"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Children celebrating Holi together with joy and unity.
              </p>
            </div>

            {/* Independence Day */}

            <div>
              <Image
                src="/images/events/Independence day.jpeg"
                alt="Independence Day"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Independence Day celebration with community members and
                children.
              </p>
            </div>

            {/* Tree Plantation */}

            <div>
              <Image
                src="/images/all/Tree plant event.jpeg"
                alt="Tree plantation drive"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
              <p className="text-sm text-gray-600 mt-2 text-center">
                Tree plantation drive promoting environmental awareness.
              </p>
            </div>
          </div>

          {/* Gallery Button */}
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* ================= SECTION DIVIDER ================= */}
      <div className="flex justify-center py-1">
        <div className="w-12 h-[1px] bg-gray-300"></div>
      </div>

      {/* ================= IMPACT SECTION ================= */}
      <ImpactSection />

      {/* ================= SECTION DIVIDER ================= */}
      <div className="flex justify-center py-1">
        <div className="w-12 h-[1px] bg-gray-300"></div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <CallToAction />

      {/* ================= SECTION DIVIDER ================= */}
      <div className="flex justify-center py-1">
        <div className="w-12 h-[1px] bg-gray-300"></div>
      </div>

      {/* ================= SUPPORT SECTION ================= */}
      <SupportSection />
    </main>
  );
}
