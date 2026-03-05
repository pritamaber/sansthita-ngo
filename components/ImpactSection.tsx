export default function ImpactSection() {
  /*
    Impact statistics of the NGO.
    These numbers can be updated anytime.
  */

  const stats = [
    {
      number: "100+",
      label: "Students Supported",
    },
    {
      number: "50+",
      label: "Women Assisted",
    },
    {
      number: "20+",
      label: "Community Programs",
    },
    {
      number: "21+",
      label: "Years of Service",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Impact
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Through compassion, dedication and community support, Sansthita has
            positively impacted many lives.
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-lg">
              <p className="text-4xl font-bold text-blue-900">{stat.number}</p>

              <p className="mt-2 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
