function Skill() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center border-b border-gray-300 px-4 py-10">
      
      <h2 className="text-2xl md:text-3xl text-center mb-8 md:mb-10">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl">
        
        {[
          { name: "HTML", img: "https://img.icons8.com/color/48/html-5--v1.png" },
          { name: "CSS", img: "https://img.icons8.com/color/48/css3--v1.png" },
          { name: "JavaScript", img: "https://img.icons8.com/color/48/javascript--v1.png" },
          { name: "Tailwind CSS", img: "https://img.icons8.com/color/48/tailwind_css.png" },
          { name: "React Js", img: "https://img.icons8.com/color/48/react-native--v1.png" },
          { name: "Git/GitHub", img: "https://img.icons8.com/color/48/git.png" },
          { name: "VS Code", img: "https://img.icons8.com/color/48/visual-studio-code-2019.png" },
          { name: "Node.js", img: "https://img.icons8.com/color/48/nodejs--v1.png" },
          { name: "Express.Js", img: "https://img.icons8.com/color/48/express-js.png" },
          { name: "MongoDB", img: "https://img.icons8.com/color/48/mongo-db.png" },
        ].map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-xl flex flex-col items-center justify-center text-center shadow hover:shadow-xl transition duration-300 w-full aspect-square"
          >
            <img src={skill.img} alt={skill.name} className="w-10 h-10 mb-2" />
            <p className="text-sm sm:text-base">{skill.name}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skill;