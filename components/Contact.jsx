function Contact() {
  return (
    <section className="min-h-screen px-4 py-10 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10">
        Contact Us
      </h2>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <p className="text-base sm:text-lg mb-6">
            Have questions or want to get in touch? Fill out the form below and
            we'll get back to you as soon as possible!
          </p>
          <p className="text-base">
            I am available on almost every social media. You can message me
            anytime.
          </p>

          <div className="mb-6">
            <a
              href="mailto:jai06946@gmail.com"
              className="text-blue-500 hover:underline wrap-break-words"
            >
              jai06946@gmail.com <br />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="bg-gray-800 text-white h-10 w-10 flex items-center justify-center rounded">
              <i className="ri-instagram-line"></i>
            </div>
            <div className="bg-gray-800 text-white h-10 w-10 flex items-center justify-center rounded">
              <i className="ri-twitter-line"></i>
            </div>
            <div className="bg-gray-800 text-white h-10 w-10 flex items-center justify-center rounded">
              <i className="ri-linkedin-line"></i>
            </div>
            <div className="bg-gray-800 text-white h-10 w-10 flex items-center justify-center rounded">
              <i className="ri-whatsapp-line"></i>
            </div>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex justify-center items-center w-full md:w-1/2">
          <form className="flex flex-col gap-4 w-full max-w-md p-4 sm:p-6 shadow rounded-lg bg-white">
            <input
              className="border p-2 rounded"
              type="text"
              placeholder="Name"
            />

            <input
              className="border p-2 rounded"
              type="email"
              placeholder="Email"
            />

            <textarea
              className="border p-2 rounded"
              rows="5"
              placeholder="Your message here..."
            ></textarea>

            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
