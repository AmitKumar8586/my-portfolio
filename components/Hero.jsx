import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typedInstance = new Typed(el.current, {
      strings: [
        "Full Stack Web Developer",
        "React Js Developer",
        "MERN Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typedInstance.destroy();
    };
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center border-b border-gray-300 px-4 py-10"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div>
        <img
          className="w-56 h-56 object-cover rounded-full border-4 border-white shadow-lg mb-6"
          src="/assets/Profile.jpg"
          alt="Amit Kumar"
        />
      </div>
      <div className="text-center max-w-3xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Amit Kumar</span>
        </h1>

        {/* 🔥 Typed Text Here */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          I am a <span ref={el} className="text-blue-500"></span>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-white font-light leading-relaxed">
          A passionate web developer with expertise in creating dynamic and
          responsive web applications.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Hire Me
          </button>
          <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white transition">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
