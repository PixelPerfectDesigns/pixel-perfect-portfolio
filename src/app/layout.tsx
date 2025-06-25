import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pixel Perfect Designs - Professional Web Development',
  description: 'Professional web development services creating pixel-perfect, responsive websites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          
          /* Improved base container and responsive utilities */
          .container {
            width: 100%;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          /* Prevent horizontal scroll on mobile */
          html, body {
            overflow-x: hidden;
            -webkit-text-size-adjust: 100%;
          }
          
          /* Better touch targets for mobile */
          .nav-link, .btn-primary, .btn-secondary {
            min-height: 44px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          
          /* Improve text readability on mobile */
          p, .hero-subtitle {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Better card spacing on mobile */
          .card {
            width: 100%;
            box-sizing: border-box;
          }
          
          /* Project cards mobile improvements */
          .project-card {
            width: 100%;
            box-sizing: border-box;
            overflow: hidden;
          }
          
          .project-image {
            min-height: 200px;
            width: 100%;
          }
          
          /* Tech badges responsive behavior */
          .tech-badge {
            white-space: nowrap;
            margin: 2px;
          }
          
          .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 14px 28px;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            position: relative;
            overflow: hidden;
          }
          
          .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
          }
          
          .btn-primary:before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
          }
          
          .btn-primary:hover:before {
            left: 100%;
          }
          
          .btn-secondary {
            background: transparent;
            color: #667eea;
            padding: 14px 28px;
            border: 2px solid #667eea;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            text-decoration: none;
            display: inline-block;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .btn-secondary:hover {
            background: #667eea;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
          }
          
          .card {
            background: white;
            border-radius: 16px;
            padding: 32px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          }
          
          .card:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          
          .project-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
            transition: all 0.4s ease;
            position: relative;
          }
          
          .project-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
          }
          
          .project-image {
            height: 220px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 3rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: transform 0.4s ease;
          }
          
          .project-card:hover .project-image {
            transform: scale(1.1);
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .floating-animation {
            animation: float 6s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          .tech-badge {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            display: inline-block;
            margin: 4px;
          }
          
          .section-divider {
            height: 2px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 80px auto;
            width: 100px;
            border-radius: 2px;
          }
          
          .nav-link {
            color: #4b5563;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .nav-link:hover {
            color: #667eea;
          }
          
          .nav-link:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: -4px;
            left: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: width 0.3s ease;
          }
            .nav-link:hover:after {
            width: 100%;
          }
            /* Mobile Navigation Styles */
          .mobile-nav-link:hover {
            background: rgba(102, 126, 234, 0.1);
            color: #667eea;
          }
          
          /* Base responsive grid classes */
          .stats-grid {
            display: grid;
            gap: 40px;
            max-width: 600px;
            margin: 80px auto 0;
          }
          
          .about-grid {
            display: grid;
            gap: 40px;
          }
          
          .projects-grid {
            display: grid;
            gap: 40px;
            margin-bottom: 60px;
          }
          
          .contact-grid {
            display: grid;
            gap: 32px;
            margin-bottom: 40px;
          }
          
          /* Extra Small Mobile (320px - 480px) */
          @media (max-width: 480px) {
            .container {
              padding: 0 12px;
            }
            
            /* Typography */
            h1 {
              font-size: 1.875rem !important; /* 30px */
              line-height: 1.1 !important;
            }
            
            .hero-subtitle {
              font-size: 0.875rem !important; /* 14px */
              padding: 0 8px;
            }
            
            h2 {
              font-size: 1.75rem !important; /* 28px */
            }
            
            /* Buttons */
            .btn-primary, .btn-secondary {
              padding: 10px 20px !important;
              font-size: 13px !important;
              width: 100%;
              margin-bottom: 12px;
            }
            
            /* Grids */
            .stats-grid {
              grid-template-columns: 1fr;
              gap: 24px;
              margin: 40px auto 0;
            }
            
            .about-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 24px;
            }
            
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            /* Cards */
            .project-card {
              margin-bottom: 16px;
            }
            
            .card {
              padding: 20px !important;
            }
            
            /* Header adjustments */
            header .container {
              height: 60px !important;
            }
            
            .gradient-text {
              font-size: 20px !important;
            }
            
            /* Hero section */
            section:first-of-type {
              padding-top: 100px !important;
              padding-bottom: 60px !important;
            }
          }
          
          /* Small Mobile/Large Mobile (481px - 767px) */
          @media (min-width: 481px) and (max-width: 767px) {
            .container {
              padding: 0 16px;
            }
            
            /* Typography */
            h1 {
              font-size: 2.25rem !important; /* 36px */
              line-height: 1.2 !important;
            }
            
            .hero-subtitle {
              font-size: 1rem !important; /* 16px */
            }
            
            h2 {
              font-size: 2rem !important; /* 32px */
            }
            
            /* Buttons */
            .btn-primary, .btn-secondary {
              padding: 12px 24px !important;
              font-size: 14px !important;
            }
            
            /* Grids */
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 32px;
              margin: 60px auto 0;
            }
            
            .about-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            
            .contact-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          
          /* Tablet (768px - 1023px) */
          @media (min-width: 768px) and (max-width: 1023px) {
            .container {
              padding: 0 20px;
            }
            
            /* Hide mobile menu, show desktop nav */
            .mobile-menu-btn {
              display: none !important;
            }
            
            .desktop-nav {
              display: flex !important;
            }
            
            .mobile-nav {
              display: none !important;
            }
            
            /* Typography */
            h1 {
              font-size: 3rem !important; /* 48px */
            }
            
            .hero-subtitle {
              font-size: 1.125rem !important; /* 18px */
            }
            
            /* Grids */
            .stats-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 32px;
            }
            
            .about-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 40px;
            }
            
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 32px;
            }
            
            .contact-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 28px;
            }
          }
          
          /* Mobile Navigation (up to 767px) */
          @media (max-width: 767px) {
            /* Show mobile menu button, hide desktop nav */
            .mobile-menu-btn {
              display: flex !important;
            }
            
            .desktop-nav {
              display: none !important;
            }
            
            .mobile-nav {
              display: block !important;
            }
              /* Hero buttons stack on mobile */
            .hero-buttons {
              flex-direction: column !important;
              align-items: center !important;
            }
            
            /* Form adjustments for mobile */
            .form-row {
              grid-template-columns: 1fr !important;
              gap: 16px !important;
            }
            
            .form-input, textarea {
              font-size: 16px !important; /* Prevents zoom on iOS */
            }
          }
          
          /* Desktop (1024px - 1439px) */
          @media (min-width: 1024px) and (max-width: 1439px) {
            .container {
              padding: 0 24px;
              max-width: 1200px;
            }
            
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 40px;
            }
            
            .about-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 40px;
            }
          }
          
          /* Large Desktop (1440px+) */
          @media (min-width: 1440px) {
            .container {
              padding: 0 32px;
              max-width: 1400px;
            }
            
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 40px;
            }
            
            .about-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 48px;
            }
          }
          
          /* Specific device optimizations */
          
          /* iPhone SE (375px) */
          @media (max-width: 375px) {
            .container {
              padding: 0 10px;
            }
            
            .gradient-text {
              font-size: 18px !important;
            }
            
            .hero-buttons .btn-primary,
            .hero-buttons .btn-secondary {
              width: 100%;
              margin-bottom: 8px;
            }
          }
          
          /* iPhone 12/13/14 (390px) */
          @media (min-width: 376px) and (max-width: 414px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }
          
          /* iPad Mini (768px) */
          @media (min-width: 768px) and (max-width: 820px) {
            .projects-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
            
            .about-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          /* iPad Air/Pro (1024px+) */
          @media (min-width: 1024px) and (max-width: 1180px) {
            .container {
              max-width: 1024px;
            }
          }
          
          /* Ultra-wide screens (1920px+) */
          @media (min-width: 1920px) {
            .container {
              max-width: 1600px;
              padding: 0 40px;
            }
            
            .projects-grid {
              grid-template-columns: repeat(3, 1fr);
              gap: 48px;
            }
          }
          
          /* Contact Form Styles */
          .form-input:focus {
            outline: none;
            border-color: #667eea !important;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
          }
          
          .form-input:hover {
            border-color: #9ca3af;
          }
          
          .form-input-error:focus {
            border-color: #ef4444 !important;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
          }
          
          /* Loading spinner animation */
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          /* Form responsive adjustments */
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
