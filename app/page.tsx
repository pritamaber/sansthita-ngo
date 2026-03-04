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
  2. About
  3. What We Do
  4. Impact Stories

  Layout is fully responsive using Tailwind grid utilities.
*/

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= ABOUT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-6">About Sansthita</h2>

        <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Sansthita is a registered non-profit organization run primarily by
          women. We stand against violence and injustice and work to support
          vulnerable communities. Through education programs, community outreach
          and social initiatives we strive to build a safer and more
          compassionate society.
        </p>
        <p className="text-gray-500 text-center mt-4">
          Registration No. S/1L/31619
        </p>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="What We Do "
            subtitle="Sansthita works across multiple areas to support vulnerable communities and empower individuals."
          />

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* -------- WOMEN PROTECTION -------- */}
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

            {/* -------- EDUCATION PROGRAMS -------- */}
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

            {/* -------- COMMUNITY RELIEF -------- */}
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

            {/* -------- CHILD DEVELOPMENT -------- */}
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

      {/* ================= IMPACT STORIES ================= */}

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <SectionTitle
            title="Stories of Hope 🕊️"
            subtitle="Real lives changed through the support and compassion of Sansthita."
          />

          {/* Story Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* -------- ARPITA STORY -------- */}
            <StoryCard
              title="Arpita's Journey"
              image="/images/women/Women violence.jpg"
              story="Arpita came to Sansthita after facing severe domestic abuse. With legal assistance, emotional support and employment opportunities arranged by our members, she rebuilt her life. Today she stands strong and independent and actively supports Sansthita."
            />

            {/* -------- PRERNA STORY -------- */}
            <StoryCard
              title="Prerna's Story"
              image="/images/women/Women violence.jpg"
              story="Prerna faced emotional torture in her marital home and approached Sansthita for help. Our members stood beside her and helped secure a job for her son, bringing stability back to the family. Today she lives peacefully and helps others in need."
            />

            {/* -------- ASHA STORY -------- */}
            <StoryCard
              title="Asha's Story"
              image="/images/women/Women violence.jpg"
              story="After being forced out of her home, Asha wandered the streets for several days before Sansthita found her. She was given temporary shelter and later moved to a safe old age home where she now lives with dignity and security."
            />
          </div>
        </div>
      </section>
      {/* ================= GALLERY PREVIEW ================= */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Our Activities "
            subtitle="A glimpse of our work and community programs."
          />

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {/* Image 1 */}
            <Image
              src="/images/children/Children draw compet 14.jpg"
              alt="Children drawing competition"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />

            {/* Image 2 */}
            <Image
              src="/images/children/Children play 01.jpg"
              alt="Children activities"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />

            {/* Image 3 */}
            <Image
              src="/images/relief/Covid 05.jpg"
              alt="Cloth distribution"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />

            {/* Image 4 */}
            <Image
              src="/images/events/Holi 02.jpg"
              alt="Holi celebration"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />

            {/* Image 5 */}
            <Image
              src="/images/events/Independence day.jpeg"
              alt="Independence day celebration"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />

            {/* Image 6 */}
            <Image
              src="/images/all/Tree plant event.jpeg"
              alt="Tree plantation program"
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-48"
            />
          </div>

          {/* ================= GALLERY CALL-TO-ACTION ================= */}
          {/* 
            This button directs users to the full gallery page.
            The homepage only shows a preview of activities,
            so this link allows visitors to explore all photos
            from Sansthita's events, programs and initiatives.
          */}

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

      {/* ================= IMPACT SECTION ================= */}
      {/* 
          Displays key statistics about Sansthita's impact
          such as students supported, women assisted and
          community programs organized. This helps visitors
          quickly understand the scale of the NGO's work.
        */}
      <ImpactSection />
      {/* ================= CALLTOACTION SECTION ================= */}
      <CallToAction />
      {/* ================= SUPPORT SECTION ================= */}
      {/*
          This section provides visitors with essential contact
          and support information for Sansthita. It encourages
          individuals and organizations to contribute, collaborate
          or reach out to the NGO for assistance, donations or
          community initiatives.
        */}
      <SupportSection />
    </main>
  );
}
