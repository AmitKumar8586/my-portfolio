function Projects() {
  return (
    <section className="border-t border-gray-300 py-12 px-4">
      {/* Container */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project 1"
              className="w-full h-40 sm:h-44 md:h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Project One
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                A brief description of the project goes here. It highlights the
                main features and technologies used.
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Live
                </button>
                <button className="text-sm border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                  Code
                </button>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project 2"
              className="w-full h-40 sm:h-44 md:h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Project Two
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                A brief description of the project goes here.
              </p>

              <div className="flex gap-3">
                <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Live
                </button>
                <button className="text-sm border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                  Code
                </button>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Project 3"
              className="w-full h-40 sm:h-44 md:h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Project Three
              </h3>
              <p className="text-gray-600 text-sm md:text-base mb-4">
                A brief description of the project goes here.
              </p>

              <div className="flex gap-3">
                <button className="text-sm bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Live
                </button>
                <button className="text-sm border border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white">
                  Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
