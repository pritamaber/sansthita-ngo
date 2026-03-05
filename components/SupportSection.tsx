export default function SupportSection() {
  /*
    Support and contact information for Sansthita.
    Visitors can reach out for assistance, collaboration,
    donations or general inquiries using the details below.
  */

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= SECTION TITLE ================= */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Support Our Mission
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Your support helps Sansthita continue its work in protecting
            vulnerable individuals, empowering women and assisting communities
            in need.
          </p>
        </div>

        {/* ================= CONTACT INFORMATION GRID ================= */}
        {/* Responsive grid for address, phone numbers and email */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Address */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Address</h3>

            <p className="mt-2 text-gray-600 leading-relaxed">
              B 23/1, Kalindi Housing Estate <br />
              Lake Town <br />
              Kolkata – 700089
            </p>
          </div>

          {/* General Contact */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              General Information
            </h3>

            <p className="mt-2 text-gray-600">
              <a href="tel:9903507605" className="hover:underline">
                +91-9903507605
              </a>
              <br />

              <a href="tel:7874819964" className="hover:underline">
                +91-7874819964
              </a>
            </p>
          </div>

          {/* Committee Contacts */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Committee Contacts
            </h3>

            <p className="mt-2 text-gray-600">
              <a href="tel:9433028584" className="hover:underline">
                +91-9433028584
              </a>
              <br />

              <a href="tel:9051857055" className="hover:underline">
                +91-9051857055
              </a>
              <br />

              <a href="tel:9051171996" className="hover:underline">
                +91-9051171996
              </a>
              <br />

              <a href="tel:7003036536" className="hover:underline">
                +91-7003036536
              </a>
            </p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">Email</h3>

            <p className="mt-2 text-gray-600">
              <a
                href="mailto:sansthita2005.kalindi@gmail.com"
                className="hover:underline"
              >
                sansthita2005.kalindi@gmail.com
              </a>
            </p>
          </div>

          {/* Technical Support */}
          <div>
            <h3 className="font-semibold text-lg text-gray-900">
              Technical Support
            </h3>

            <p className="mt-2 text-gray-600">
              <a href="tel:7874819964" className="hover:underline">
                +91-7874819964
              </a>
            </p>
          </div>
        </div>

        {/* ================= GOOGLE MAP ================= */}
        {/* 
           Map is placed outside the grid and centered
           so it stays aligned on desktop screens.
        */}

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Find Us on Map
          </h3>

          <div className="max-w-4xl mx-auto h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d546.1066621425647!2d88.39972475363014!3d22.613756018573113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89dff938b8fe5%3A0xb745c497faf4ab1!2sKalindi%20Housing%2C%20Block%20B-21%2C%20Kalindi%20Housing%20Estate%2C%20South%20Dumdum%2C%20West%20Bengal%20700089!5e1!3m2!1sen!2sin!4v1772650211423!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
