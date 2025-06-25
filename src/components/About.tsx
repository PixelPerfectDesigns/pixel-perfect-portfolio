const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About Pixel Perfect Designs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I specialize in creating beautiful, functional websites that perfectly capture 
            your brand&apos;s vision. With a keen eye for detail and a passion for clean code, 
            I deliver pixel-perfect designs that work flawlessly across all devices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What I Bring to Every Project
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Responsive Design</h4>
                  <p className="text-gray-600">
                    Every website is crafted to look stunning and function perfectly on all devices, 
                    from mobile phones to desktop computers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Modern Technologies</h4>
                  <p className="text-gray-600">
                    Utilizing the latest web technologies including React, Next.js, TypeScript, 
                    and Tailwind CSS for optimal performance and maintainability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">SEO Optimization</h4>
                  <p className="text-gray-600">
                    Built with search engine optimization in mind to ensure your website 
                    ranks well and reaches your target audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="font-medium text-gray-800">React</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-medium text-gray-800">Next.js</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🎨</div>
                <div className="font-medium text-gray-800">Tailwind</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-2xl mb-2">📝</div>
                <div className="font-medium text-gray-800">TypeScript</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
