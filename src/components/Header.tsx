const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">
            Pixel Perfect
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
