'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface FormStatus {
  isSubmitting: boolean;
  message: string;
  type: string;
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Contact form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    message: '',
    type: '' // 'success' or 'error'
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Form validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setFormStatus({
      isSubmitting: true,
      message: '',
      type: ''
    });

    try {      // Send to Formspree (replace YOUR_FORM_ID with your actual Formspree form ID)
      const response = await fetch('https://formspree.io/f/xgvyngog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setFormStatus({
          isSubmitting: false,
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you within 24 hours.',
          type: 'success'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
      
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        message: 'Sorry, there was an error sending your message. Please try again or contact me directly at info@pixelperfect-designs.com',
        type: 'error'
      });
    }
  };

  return (
    <>
      {/* Header */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(229, 231, 235, 0.8)',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '70px'
        }}>
          <div style={{fontSize: '28px', fontWeight: 'bold'}} className="gradient-text">
            Pixel Perfect
          </div>
          
          {/* Desktop Navigation */}
          <nav style={{display: 'flex', gap: '40px'}} className="desktop-nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: '30px',
              height: '30px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              zIndex: 51
            }}
            aria-label="Toggle mobile menu"
          >
            <span style={{
              width: '100%',
              height: '3px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '3px',
              transition: 'all 0.3s ease',
              transformOrigin: '1px',
              transform: isMobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
            }}></span>
            <span style={{
              width: '100%',
              height: '3px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '3px',
              transition: 'all 0.3s ease',
              opacity: isMobileMenuOpen ? '0' : '1',
              transform: isMobileMenuOpen ? 'translateX(20px)' : 'translateX(0)',
            }}></span>
            <span style={{
              width: '100%',
              height: '3px',
              background: 'linear-gradient(45deg, #667eea, #764ba2)',
              borderRadius: '3px',
              transition: 'all 0.3s ease',
              transformOrigin: '1px',
              transform: isMobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)',
            }}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className="mobile-nav"
          style={{
            position: 'absolute',
            top: '70px',
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(229, 231, 235, 0.8)',
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)',
            opacity: isMobileMenuOpen ? 1 : 0,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'none'
          }}
        >
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '20px 0'
          }}>
            <a 
              href="#about" 
              className="nav-link mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                padding: '15px 30px',
                borderBottom: '1px solid rgba(229, 231, 235, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              About
            </a>
            <a 
              href="#projects" 
              className="nav-link mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                padding: '15px 30px',
                borderBottom: '1px solid rgba(229, 231, 235, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="nav-link mobile-nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                padding: '15px 30px',
                transition: 'all 0.3s ease'
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        paddingTop: '140px',
        paddingBottom: '100px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.5
        }}></div>
        <div className="container" style={{textAlign: 'center', position: 'relative'}}>
          <div className="floating-animation">
            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '24px',
              color: 'white',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              lineHeight: 1.2
            }}>
              Crafting Pixel Perfect<br />Digital Experiences
            </h1>
          </div>          <p className="hero-subtitle" style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
          }}>
            Professional web development services creating stunning, responsive websites 
            that combine beautiful design with flawless functionality.
          </p>          <div className="hero-buttons" style={{display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary" style={{background: 'rgba(255, 255, 255, 0.1)', color: 'white', borderColor: 'white'}}>Get In Touch</a>
          </div>
          
          {/* Stats */}
          <div className="stats-grid">
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '8px'}}>2+</div>
              <div style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem'}}>Years Experience</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '8px'}}>10+</div>
              <div style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem'}}>Projects Completed</div>
            </div>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', fontWeight: 'bold', color: 'white', marginBottom: '8px'}}>100%</div>
              <div style={{color: 'rgba(255, 255, 255, 0.8)', fontSize: '1.1rem'}}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{padding: '100px 0', background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px'}} className="gradient-text">
              About Pixel Perfect Designs
            </h2>
            <div className="section-divider"></div>
            <p style={{fontSize: '1.2rem', color: '#64748b', maxWidth: '700px', margin: '0 auto'}}>              I specialize in creating beautiful, functional websites that perfectly capture 
              your brand&apos;s vision with clean code, modern design patterns, and pixel-perfect attention to detail.
            </p>
          </div>
            <div className="about-grid">
            <div className="card">
              <div style={{fontSize: '3rem', marginBottom: '20px', textAlign: 'center'}}>⚛️</div>
              <h3 style={{fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', textAlign: 'center'}} className="gradient-text">React & Next.js</h3>
              <p style={{color: '#64748b', textAlign: 'center', lineHeight: 1.7}}>
                Building modern, scalable applications with React and Next.js for optimal performance and SEO
              </p>
              <div style={{textAlign: 'center', marginTop: '16px'}}>
                <span className="tech-badge">React</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">TypeScript</span>
              </div>
            </div>
            
            <div className="card">
              <div style={{fontSize: '3rem', marginBottom: '20px', textAlign: 'center'}}>📱</div>
              <h3 style={{fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', textAlign: 'center'}} className="gradient-text">Responsive Design</h3>
              <p style={{color: '#64748b', textAlign: 'center', lineHeight: 1.7}}>
                Crafting pixel-perfect designs that look stunning and function flawlessly on all devices and screen sizes
              </p>
              <div style={{textAlign: 'center', marginTop: '16px'}}>
                <span className="tech-badge">Mobile-First</span>
                <span className="tech-badge">CSS Grid</span>
                <span className="tech-badge">Flexbox</span>
              </div>
            </div>
            
            <div className="card">
              <div style={{fontSize: '3rem', marginBottom: '20px', textAlign: 'center'}}>🚀</div>
              <h3 style={{fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', textAlign: 'center'}} className="gradient-text">Performance & SEO</h3>
              <p style={{color: '#64748b', textAlign: 'center', lineHeight: 1.7}}>
                Optimizing for lightning-fast load times, search engine visibility, and exceptional user experiences
              </p>
              <div style={{textAlign: 'center', marginTop: '16px'}}>
                <span className="tech-badge">Core Web Vitals</span>
                <span className="tech-badge">SEO</span>
                <span className="tech-badge">Lighthouse</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{padding: '100px 0', background: 'white'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '80px'}}>
            <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px'}} className="gradient-text">
              Featured Projects
            </h2>
            <div className="section-divider"></div>
            <p style={{fontSize: '1.2rem', color: '#64748b'}}>
              A showcase of recent work demonstrating expertise in modern web development and design
            </p>
          </div>
            <div className="projects-grid">
            <div className="project-card">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)'}}>
                🐠
              </div>
              <div style={{padding: '32px'}}>                <h3 style={{fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '16px'}} className="gradient-text">
                  Keith&apos;s Aquascaping
                </h3>
                <p style={{color: '#64748b', marginBottom: '24px', lineHeight: 1.6}}>
                  Professional aquarium services website featuring modern design, responsive layout, 
                  and comprehensive service showcase for aquascaping and maintenance.
                </p>
                <div style={{marginBottom: '24px'}}>
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">Responsive</span>
                </div>                <div style={{display: 'flex', gap: '16px'}}>                  <a href="https://pixelperfectdesigns.github.io/keiths-aquascaping-website/" 
                     target="_blank" 
                     className="btn-primary" 
                     style={{fontSize: '14px', padding: '10px 20px'}}>
                    Live Demo
                  </a><a href="https://github.com/PixelPerfectDesigns/keiths-aquascaping-website" 
                     target="_blank" 
                     className="btn-secondary" 
                     style={{fontSize: '14px', padding: '10px 20px'}}>
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'}}>
                🎮
              </div>
              <div style={{padding: '32px'}}>
                <h3 style={{fontSize: '1.6rem', fontWeight: 'bold', marginBottom: '16px'}} className="gradient-text">
                  LevelUp Gaming Community
                </h3>
                <p style={{color: '#64748b', marginBottom: '24px', lineHeight: 1.6}}>
                  Dynamic gaming community platform with event management, team showcases, 
                  and interactive features designed for gamers and esports enthusiasts.
                </p>
                <div style={{marginBottom: '24px'}}>
                  <span className="tech-badge">HTML5</span>
                  <span className="tech-badge">CSS3</span>
                  <span className="tech-badge">JavaScript</span>
                  <span className="tech-badge">Gaming UI</span>
                </div>                <div style={{display: 'flex', gap: '16px'}}>                  <a href="https://pixelperfectdesigns.github.io/levelup-gaming-community/" 
                     target="_blank" 
                     className="btn-primary" 
                     style={{fontSize: '14px', padding: '10px 20px'}}>
                    Live Demo
                  </a><a href="https://github.com/PixelPerfectDesigns/LevelUp-Gaming-Community" 
                     target="_blank" 
                     className="btn-secondary" 
                     style={{fontSize: '14px', padding: '10px 20px'}}>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{textAlign: 'center'}}>            <a href="https://github.com/PixelPerfectDesigns" 
               target="_blank" 
               className="btn-secondary"
               style={{fontSize: '18px', padding: '16px 32px'}}>
              View All Projects on GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{padding: '100px 0', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: '80px'}}>            <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '24px', color: 'white'}}>
              Let&apos;s Work Together
            </h2>
            <div style={{height: '2px', background: 'white', margin: '0 auto', width: '100px', borderRadius: '2px', marginBottom: '24px'}}></div>            <p style={{fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.9)'}}>
              Ready to bring your vision to life? Let&apos;s discuss your project and create something extraordinary!
            </p>
          </div>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div className="card" style={{background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)'}}>
              <h3 style={{fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '32px', textAlign: 'center'}} className="gradient-text">
                Send Me a Message
              </h3>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} style={{marginBottom: '40px'}}>
                <div style={{display: 'grid', gap: '24px'}}>
                  {/* Name and Email Row */}
                  <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}} className="form-row">
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#374151'
                      }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`form-input ${formErrors.name ? 'form-input-error' : ''}`}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: formErrors.name ? '2px solid #ef4444' : '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '16px',
                          transition: 'border-color 0.3s ease',
                          background: 'white',
                          boxSizing: 'border-box'
                        }}
                        placeholder="Your full name"
                      />
                      {formErrors.name && (
                        <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: '#374151'
                      }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`form-input ${formErrors.email ? 'form-input-error' : ''}`}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: formErrors.email ? '2px solid #ef4444' : '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '16px',
                          transition: 'border-color 0.3s ease',
                          background: 'white',
                          boxSizing: 'border-box'
                        }}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && (
                        <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Subject */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`form-input ${formErrors.subject ? 'form-input-error' : ''}`}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: formErrors.subject ? '2px solid #ef4444' : '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                        background: 'white',
                        boxSizing: 'border-box'
                      }}
                      placeholder="Project inquiry, collaboration, etc."
                    />
                    {formErrors.subject && (
                      <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>
                        {formErrors.subject}
                      </p>
                    )}
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#374151'
                    }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`form-input ${formErrors.message ? 'form-input-error' : ''}`}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: formErrors.message ? '2px solid #ef4444' : '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        transition: 'border-color 0.3s ease',
                        background: 'white',
                        boxSizing: 'border-box',
                        resize: 'vertical',
                        minHeight: '120px'
                      }}
                      placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                    />
                    {formErrors.message && (
                      <p style={{color: '#ef4444', fontSize: '14px', marginTop: '4px'}}>
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="btn-primary"
                    style={{
                      fontSize: '16px',
                      padding: '14px 32px',
                      opacity: formStatus.isSubmitting ? 0.7 : 1,
                      cursor: formStatus.isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      margin: '0 auto'
                    }}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <span style={{
                          width: '20px',
                          height: '20px',
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          borderTop: '2px solid white',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite'
                        }}></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
              
              {/* Form Status Message */}
              {formStatus.message && (
                <div style={{
                  padding: '16px',
                  borderRadius: '8px',
                  marginBottom: '24px',
                  textAlign: 'center',
                  background: formStatus.type === 'success' ? '#dcfce7' : '#fef2f2',
                  border: `1px solid ${formStatus.type === 'success' ? '#16a34a' : '#ef4444'}`,
                  color: formStatus.type === 'success' ? '#15803d' : '#dc2626'
                }}>
                  {formStatus.message}
                </div>
              )}
              
              {/* Contact Info */}
              <div className="contact-grid" style={{paddingTop: '32px', borderTop: '1px solid #e5e7eb'}}>                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '12px'}}>✉️</div>
                  <h4 style={{fontWeight: '600', marginBottom: '8px'}}>Email</h4>
                  <p style={{color: '#64748b'}}>info@pixelperfect-designs.com</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '12px'}}>⚡</div>
                  <h4 style={{fontWeight: '600', marginBottom: '8px'}}>Response Time</h4>
                  <p style={{color: '#64748b'}}>Usually within 24 hours</p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '2rem', marginBottom: '12px'}}>🛠️</div>
                  <h4 style={{fontWeight: '600', marginBottom: '8px'}}>Services</h4>
                  <p style={{color: '#64748b'}}>Web Development & Design</p>
                </div>
              </div>
              
              <div style={{textAlign: 'center', marginTop: '32px'}}>                <a href="https://github.com/PixelPerfectDesigns" 
                   target="_blank" 
                   className="btn-secondary"
                   style={{fontSize: '16px', padding: '12px 24px'}}>
                  View My GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{background: '#1e293b', color: 'white', padding: '60px 0'}}>
        <div className="container">
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px'}} className="gradient-text">
              Pixel Perfect Designs
            </div>
            <p style={{color: '#94a3b8', marginBottom: '32px', fontSize: '1.1rem'}}>
              Creating exceptional digital experiences with modern web technologies
            </p>
            <div style={{display: 'flex', justifyContent: 'center', gap: '32px', marginBottom: '32px'}}>
              <a href="#about" style={{color: '#94a3b8', textDecoration: 'none'}}>About</a>
              <a href="#projects" style={{color: '#94a3b8', textDecoration: 'none'}}>Projects</a>
              <a href="#contact" style={{color: '#94a3b8', textDecoration: 'none'}}>Contact</a>
              <a href="https://github.com/PixelPerfectDesigns" target="_blank" style={{color: '#94a3b8', textDecoration: 'none'}}>GitHub</a>
            </div>
            <div style={{borderTop: '1px solid #334155', paddingTop: '24px'}}>
              <p style={{color: '#64748b', fontSize: '14px'}}>
                © 2025 Pixel Perfect Designs. Built with Next.js, TypeScript, and modern CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
