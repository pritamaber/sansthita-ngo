import WorkCard from "@/components/WorkCard";
import Reveal from "@/components/Reveal";
import { workGroups } from "@/data/works";

export default function WorksPage() {
  return (
    <main className="bg-white">
      {/* PAGE HEADER */}

      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h1>

          <p className="text-lg text-gray-200">
            Sansthita works for oppressed women, children's development, relief
            activities and community support initiatives.
          </p>
        </div>
      </section>

      {/* WORK GROUPS */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {workGroups.map((group) => (
            <div key={group.title}>
              {/* GROUP HEADING */}
              <Reveal className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-6 bg-blue-900 rounded-full" />
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {group.title}
                </h2>
              </Reveal>

              {/* GROUP GRID */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {group.items.map((work, index) => (
                  <WorkCard
                    key={index}
                    image={work.image}
                    alt={work.alt}
                    caption={work.caption}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
