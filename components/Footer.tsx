export default function Footer() {
  /*
    Footer component for the website.
    Contains navigation links, contact info,
    social media and donation call-to-action.
  */

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* ================= ORGANIZATION INFO ================= */}

        <div>
          <h3 className="text-white text-xl font-semibold">Sansthita</h3>

          <p className="mt-3 text-sm leading-relaxed">
            A registered non-profit organization dedicated to supporting
            vulnerable communities, empowering women and helping underprivileged
            children through education, awareness and community initiatives.
          </p>

          <p className="mt-4 text-sm">
            <strong>Registration No:</strong> S/1L/31619
          </p>

          {/* Social Icons */}

          <div className="flex gap-4 mt-6">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/sansthita31619"
              className="hover:text-white"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.94 6.49H7.78v-1.1c0-.33.22-.41.37-.41h.77V3.34L7.83 3.33c-1.3 0-1.6.97-1.6 1.59v1.57H5.2v1.66h1.03V13h2.03V8.15h1.37l.21-1.66z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919903507605"
              className="hover:text-white"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.6 2.4A7.95 7.95 0 0 0 8 .5a7.95 7.95 0 0 0-6.9 11.9L.5 15.5l3.2-.8A7.95 7.95 0 0 0 8 15.5a7.95 7.95 0 0 0 5.6-13.1zM8 14a6.5 6.5 0 0 1-3.3-.9l-.2-.1-2 .5.5-1.9-.1-.2A6.5 6.5 0 1 1 8 14zm3.6-4.9c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.6.8-.1.1-.2.1-.4 0-.2-.1-.8-.3-1.5-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4.1-.1.2-.2.3-.4.1-.1.1-.2.2-.3.1-.1 0-.2 0-.3 0-.1-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.3 0-.4.2-.1.2-.5.5-.5 1.3 0 .8.6 1.5.7 1.6.1.1 1.2 1.9 2.9 2.6 1.7.7 1.7.5 2 .5.3 0 1-.4 1.2-.7.2-.3.2-.6.1-.7z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:sansthita2005.kalindi@gmail.com"
              className="hover:text-white"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v.5L8 9 0 4.5V4zm0 1.7V12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.7l-7.7 4.8a1 1 0 0 1-1.1 0L0 5.7z" />
              </svg>
            </a>
          </div>
        </div>

        {/* ================= QUICK LINKS ================= */}

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/events" className="hover:text-white">
                Events
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
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>

            {/* Donate Button */}
            <li className="pt-3">
              <a
                href="/donate"
                className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>

        {/* ================= CONTACT ================= */}

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <p className="text-sm leading-relaxed">
            B 23/1, Kalindi Housing Estate
            <br />
            Lake Town, Kolkata – 700089
          </p>

          <p className="mt-2 text-sm">
            <a href="tel:9903507605" className="hover:underline">
              +91-9903507605
            </a>
          </p>

          <p className="text-sm">
            <a
              href="mailto:sansthita2005.kalindi@gmail.com"
              className="hover:underline"
            >
              sansthita2005.kalindi@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400 pb-4">
        © 2026 Sansthita
        <br />
        A voice for the voiceless
        <br />
        Registration No. S/1L/31619
      </div>
      {/* ================= DEVELOPER CONTACT ================= */}

      {/* ================= DEVELOPER CONTACT ================= */}

      <div className="border-t border-white/10 text-center text-sm text-gray-400 py-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
          <span className="text-gray-500">
            Designed and developed by Pritam Das
          </span>

          <a
            href="https://rebadigitalsolutions.com"
            className="text-blue-400 hover:text-blue-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            rebadigitalsolutions.com
          </a>

          <a
            href="mailto:pritam.aber@gmail.com?subject=Website%20Development%20Inquiry&body=Hello%20Pritam,%20I%20visited%20rebadigitalsolutions.com%20and%20would%20like%20to%20discuss%20a%20website%20project."
            className="text-blue-400 hover:text-blue-300 transition"
          >
            rebadigitalsolutions@gmail.com
          </a>

          <a
            href="https://wa.me/916291616198?text=Hello%20Pritam,%20I%20visited%20rebadigitalsolutions.com%20and%20would%20like%20to%20discuss%20a%20website%20project."
            className="text-green-400 hover:text-green-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
