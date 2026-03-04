import SectionTitle from "@/components/SectionTitle"
import GalleryGrid from "@/components/GalleryGrid"

export default function GalleryPage() {

  return (
    <main className="bg-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        <SectionTitle
          title="Gallery"
          subtitle="Moments from Sansthita's activities and community programs."
        />

        <div className="mt-12">

          <GalleryGrid />

        </div>

      </div>

    </main>
  )
}