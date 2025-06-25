const Projects = () => {
  const projects = [
    {
      title: "Keith's Aquascaping",
      description: "Professional aquarium services website featuring modern design, responsive layout, and service showcase for aquascaping and maintenance services.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      liveUrl: "https://pixelperfectdesigns-ai.github.io/Keiths-Aquascaping/",
      githubUrl: "https://github.com/PixelPerfectDesigns-AI/Keiths-Aquascaping",
      image: "/api/placeholder/600/400"
    },
    {
      title: "LevelUp Gaming Community",
      description: "Dynamic gaming community platform with event management, team showcases, and interactive features for gamers and esports enthusiasts.",
      tags: ["HTML", "CSS", "JavaScript", "Gaming UI"],
      liveUrl: "https://pixelperfectdesigns-ai.github.io/LevelUp-Gaming-Community/",
      githubUrl: "https://github.com/PixelPerfectDesigns-AI/LevelUp-Gaming-Community",
      image: "/api/placeholder/600/400"
    },
    {
      title: "Bottini Fuel Clone",
      description: "Detailed recreation of a professional energy services website, demonstrating precision in layout replication and design attention to detail.",
      tags: ["HTML", "CSS", "JavaScript", "Clone Project"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/api/placeholder/600/400",
      status: "In Progress"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A showcase of recent work demonstrating expertise in modern web development, 
            responsive design, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center">
                  <div className="text-primary-600 text-6xl opacity-50">🌐</div>
                </div>
                {project.status && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary text-center text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-secondary text-center text-sm"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/PixelPerfectDesigns-AI" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
