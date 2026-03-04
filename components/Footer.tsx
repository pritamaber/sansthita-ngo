export default function Footer() {
  /*
    Footer component for the website.
    Contains quick navigation links, contact details
    and copyright information.
  */

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Organization Info */}
        <div>
          <h3 className="text-white text-xl font-semibold">Sansthita </h3>

          <p className="mt-3 text-sm leading-relaxed">
            A registered non-profit organization dedicated to supporting
            vulnerable communities, empowering women and helping underprivileged
            children through education, awareness and community initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="/gallery" className="hover:text-white">
                Gallery
              </a>
            </li>

            <li>
              <a href="/partners" className="hover:text-white">
                Partners
              </a>
            </li>

            <li>
              <a href="/supporters" className="hover:text-white">
                Supporters
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <p className="text-sm leading-relaxed">
            B 23/1, Kalindi Housing Estate
            <br />
            Lake Town, Kolkata – 700089
          </p>

          <p className="mt-2 text-sm">
            <a href="tel:9903507605" className="hover:underline">
              Mobile - +91-9903507605
            </a>
          </p>

          <p className="text-sm">Email: sansthita2025.kalindi@gmail.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2026 Sansthita
        <br />
        A voice for the voiceless
        <br />
        Registration No. S/1L/31619
      </div>
    </footer>
  );
}
