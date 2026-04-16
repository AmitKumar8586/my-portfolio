function Services() {
  return (
    <section className="border-b border-gray-300 py-12 px-4">
      {/* Container */}
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
          Services
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Web Design
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              I create visually appealing and user-friendly website designs that
              focus on simplicity, creativity, and a great user experience.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              I develop responsive and interactive user interfaces using modern
              technologies like React and Tailwind CSS.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Responsive Website
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              I build fully responsive websites that work smoothly on all
              devices including mobile, tablet, and desktop.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              UI/UX Design
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              I design intuitive and engaging user experiences focused on
              usability and clean interfaces.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              E-commerce Website
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              I create modern e-commerce layouts with smooth user experience and
              optimized shopping flow.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Website Optimization
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              I improve website speed, performance, and responsiveness for a
              better user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
