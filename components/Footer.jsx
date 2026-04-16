function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-10">
      
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        
        {/* Left Text */}
        <p className="text-gray-500 text-sm sm:text-base text-center sm:text-left">
          © 2026 CodeWithAmit. All rights reserved.
        </p>

        {/* Optional Links */}
        <div className="flex gap-4 text-sm sm:text-base text-gray-500">
          <a href="/" className="hover:text-blue-500 transition">Home</a>
          <a href="/about" className="hover:text-blue-500 transition">About</a>
          <a href="/contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

      </div>
      
    </footer>
  );
}

export default Footer;