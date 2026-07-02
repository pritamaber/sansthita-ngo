import SectionTitle from "@/components/SectionTitle";
import GalleryTabs from "@/components/GalleryTabs";

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* ================= PAGE HEADER ================= */}

      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Gallery</h1>

        <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
          Moments from Sansthita’s activities, community programs and events
          that reflect our journey of service and compassion.
        </p>
      </section>

      {/* ================= GALLERY CONTENT ================= */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            title="Our Activities"
            subtitle="A glimpse of Sansthita’s work across education, relief, awareness and community support."
          />

          <div className="mt-12">
            <GalleryTabs />
          </div>
        </div>
      </section>
    </main>
  );
}
