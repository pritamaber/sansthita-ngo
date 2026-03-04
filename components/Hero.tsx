export default function Hero() {
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Standing Against Violence
          <br />
          Empowering Women & Communities
        </h1>

        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
          Sansthita [Registration No. S/1L/31619] is a registered non-profit
          organization run primarily by women. The organization stands firmly
          against violence and injustice while working to empower women and
          support vulnerable communities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
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
    </section>
  );
}
