import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ImpactSection from "@/components/ImpactSection";
import StoryCard from "@/components/StoryCard";
import CallToAction from "@/components/CallToAction";
import Reveal from "@/components/Reveal";
import { stories } from "@/data/homeStories";
import { activities } from "@/data/homeActivities";

/*
  Homepage Component
  -------------------

  Sections included:

  1. Hero
  2. Impact Stories
  3. Gallery Preview
  4. Impact Statistics
  5. Call To Action
*/

export default function HomePage() {
  return (
    <main>
      {/* ================= HERO SECTION ================= */}
      <Hero />

      {/* ================= SECTION DIVIDER ================= */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= IMPACT STORIES ================= */}
      <section className="bg-white py-14">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Survivor's stories"
            subtitle="Real lives changed through the support and compassion of Sansthita."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {stories.map((story) => (
              <StoryCard
                key={story.title}
                title={story.title}
                image={story.image}
                story={story.story}
              />
            ))}
          </div>
        </div>
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

      {/* ================= SECTION DIVIDER ================= */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= GALLERY PREVIEW ================= */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Our Activities"
            subtitle="A glimpse of our work and community programs."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12">
            {activities.map((activity, index) => (
              <Reveal key={activity.image} delay={(index % 3) * 100}>
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover w-full h-48"
                />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {activity.caption}
                </p>
              </Reveal>
            ))}
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
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= IMPACT SECTION ================= */}
      <ImpactSection />

      {/* ================= SECTION DIVIDER ================= */}
      <div className="py-6 bg-white">
        <div className="max-w-6xl mx-auto border-t border-gray-200"></div>
      </div>

      {/* ================= CALL TO ACTION ================= */}
      <CallToAction />
    </main>
  );
}
