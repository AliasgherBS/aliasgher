'use client'

import { useState, useRef } from 'react'

// Starburst SVG Component
const Starburst = ({ className = '', color = '#1A1A1A', size }: { className?: string; color?: string; size?: number }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={size ? { width: size, height: size } : undefined}
  >
    <path
      fill={color}
      d="M50 0 L51 45 L50 50 L49 45 Z M50 100 L49 55 L50 50 L51 55 Z M0 50 L45 49 L50 50 L45 51 Z M100 50 L55 51 L50 50 L55 49 Z M14.6 14.6 L45 47 L50 50 L47 45 Z M85.4 85.4 L55 53 L50 50 L53 55 Z M85.4 14.6 L53 45 L50 50 L55 47 Z M14.6 85.4 L47 55 L50 50 L45 53 Z M29.3 4.3 L48 45 L50 50 L46 46 Z M70.7 95.7 L52 55 L50 50 L54 54 Z M95.7 29.3 L55 48 L50 50 L54 46 Z M4.3 70.7 L45 52 L50 50 L46 54 Z M4.3 29.3 L45 48 L50 50 L46 46 Z M95.7 70.7 L55 52 L50 50 L54 54 Z M29.3 95.7 L48 55 L50 50 L46 54 Z M70.7 4.3 L52 45 L50 50 L54 46 Z"
    />
  </svg>
)

// Arrow Icon
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

// WhatsApp Icon
const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Phone Icon
const PhoneIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

// Play Icon for videos
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <polygon points="5,3 19,12 5,21" />
  </svg>
)

export default function Portfolio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const video1Ref = useRef<HTMLVideoElement>(null)
  const video2Ref = useRef<HTMLVideoElement>(null)

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  const handleShowcaseVideo = (videoId: string, ref: React.RefObject<HTMLVideoElement | null>) => {
    if (ref.current) {
      if (playingVideo === videoId) {
        ref.current.pause()
        setPlayingVideo(null)
      } else {
        // Pause other videos
        if (video1Ref.current) video1Ref.current.pause()
        if (video2Ref.current) video2Ref.current.pause()
        ref.current.play()
        setPlayingVideo(videoId)
      }
    }
  }

  const experience = [
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
      title: 'SEO Optimized Writing',
      description: 'Crafting content that ranks and resonates. Strategic keyword integration with compelling narratives that drive organic traffic and engagement.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      ),
      title: 'Scriptwriting',
      description: 'YouTube and digital media scripts under confidentiality agreements. Bringing brand stories to life through engaging video narratives.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      title: 'Copywriting',
      description: 'Ad copy and web content that converts. From startups to established brands, adapting tone to match every unique client voice.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      title: 'Profile Optimization',
      description: 'LinkedIn and Instagram profile optimization. Transforming digital presence into powerful personal brands that attract opportunities.',
    },
  ]

  const skills = [
    {
      name: 'Video Editing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )
    },
    {
      name: 'Graphic Design',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        </svg>
      )
    },
    {
      name: 'Content Creation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      )
    },
    {
      name: 'Social Media',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    },
    {
      name: 'SEO Writing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      name: 'Brand Strategy',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
  ]

  const portfolio = [
    { img: '/work2.jpeg', category: 'Content', title: 'Digital Content' },
    { img: '/work4.jpeg', category: 'Branding', title: 'Brand Identity' },
    { img: '/work5.jpeg', category: 'Marketing', title: 'Campaign Design' },
  ]

  return (
    <>
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">Alefiyah Abbas</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="about">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-eyebrow">
              <Starburst className="starburst" />
              <span>Writer / SEO Specialist / Digital Strategist</span>
            </div>
            <h1 className="hero-title">
              <span className="line">Creative</span>
              <span className="line italic">Portfolio</span>
            </h1>
            <p className="hero-desc">
              I am currently pursuing Media Studies at Bahria Islamabad and Law at the University of London. With a unique mix of storytelling, analytical thinking, and platform expertise, I bring both creativity and strategy to help brands thrive in the digital space.
            </p>
            <p className="hero-desc-secondary">
              As a Writer, SEO Specialist, and Digital Media Strategist, I craft compelling narratives that connect brands with their audiences. From content strategy to visual storytelling, I transform ideas into impactful digital experiences.
            </p>
            <a href="#contact" className="hero-cta">
              <span>Let&apos;s Work Together</span>
              <ArrowIcon />
            </a>
          </div>
          <div className="hero-visual">
            <div className="hero-decoration">
              <Starburst className="starburst" size={80} />
            </div>
            <div className="hero-image-frame">
              <img src="/me.jpeg" alt="Alefiyah Abbas" />
            </div>
            <div className="floating-tag left">
              <h4>Experience</h4>
              <p>2023 - 2025</p>
            </div>
            <div className="floating-tag right">
              <h4>Focus</h4>
              <p>Content & SEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="marquee-section">
        <div className="marquee-track">
          {[1, 2].map((i) => (
            <div key={i} className="marquee-content">
              <span>Content Strategy</span>
              <div className="marquee-dot" />
              <span>SEO Optimization</span>
              <div className="marquee-dot" />
              <span>Digital Storytelling</span>
              <div className="marquee-dot" />
              <span>Social Media</span>
              <div className="marquee-dot" />
              <span>Brand Voice</span>
              <div className="marquee-dot" />
              <span>Copywriting</span>
              <div className="marquee-dot" />
            </div>
          ))}
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <div className="video-container">
          <div className="video-header">
            <div className="section-label">
              <Starburst className="starburst" size={20} />
              <span>Watch My Intro</span>
            </div>
          </div>
          <div
            className={`video-wrapper ${isPlaying ? 'playing' : ''}`}
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              onEnded={handleVideoEnd}
              playsInline
              preload="metadata"
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay">
              <div className="play-btn">
                <PlayIcon />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="experience-container">
          <div className="section-header">
            <Starburst className="starburst" size={32} />
            <h2 className="section-title">Past Experience</h2>
          </div>
          <div className="experience-grid">
            {experience.map((exp, index) => (
              <div key={index} className="exp-card">
                <span className="exp-number">0{index + 1}</span>
                <div className="exp-icon">{exp.icon}</div>
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <div className="skills-container">
          <div className="section-header">
            <Starburst className="starburst" size={32} />
            <h2 className="section-title">Key Skills</h2>
          </div>
          <div className="skills-grid-new">
            <div className="skills-intro">
              <h3>Creativity Meets Strategy</h3>
              <p>
                Blending visual design with analytical thinking to create content that captivates and converts. From reels to brand campaigns, I bring ideas to life across platforms.
              </p>
            </div>
            <div className="skills-icons-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-icon-card">
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>
                  <span className="skill-icon-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section - Combined Portfolio & Video Showcase */}
      <section className="portfolio" id="portfolio">
        <div className="portfolio-container">
          <div className="section-header">
            <Starburst className="starburst" size={32} color="#F7F3ED" />
            <h2 className="section-title">Featured Work</h2>
          </div>

          {/* Image Works */}
          <div className="portfolio-grid">
            {portfolio.map((item, index) => (
              <div key={index} className="portfolio-card">
                <div
                  className="portfolio-image"
                  onClick={() => setModalImage(item.img)}
                >
                  <img src={item.img} alt={item.title} />
                </div>
                <div className="portfolio-info">
                  <span className="portfolio-tag">{item.category}</span>
                  <h4>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Video Works */}
          <div className="portfolio-videos">
            <div className="portfolio-video-item">
              <div
                className={`portfolio-video-wrapper ${playingVideo === 'video1' ? 'playing' : ''}`}
                onClick={() => handleShowcaseVideo('video1', video1Ref)}
              >
                <video
                  ref={video1Ref}
                  playsInline
                  onEnded={() => setPlayingVideo(null)}
                >
                  <source src="/video1.mp4" type="video/mp4" />
                </video>
                <div className="portfolio-video-overlay">
                  <div className="portfolio-play-btn">
                    <PlayIcon />
                  </div>
                </div>
              </div>
              <div className="portfolio-video-info">
                <span className="portfolio-video-tag">Brand Promotion</span>
                <h4>Promotional Reel</h4>
              </div>
            </div>
            <div className="portfolio-video-item">
              <div
                className={`portfolio-video-wrapper ${playingVideo === 'video2' ? 'playing' : ''}`}
                onClick={() => handleShowcaseVideo('video2', video2Ref)}
              >
                <video
                  ref={video2Ref}
                  playsInline
                  onEnded={() => setPlayingVideo(null)}
                >
                  <source src="/video2.mp4" type="video/mp4" />
                </video>
                <div className="portfolio-video-overlay">
                  <div className="portfolio-play-btn">
                    <PlayIcon />
                  </div>
                </div>
              </div>
              <div className="portfolio-video-info">
                <span className="portfolio-video-tag">Short Film</span>
                <h4>Cinematic Story</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="contact-container">
          <Starburst className="contact-starburst" />
          <h2 className="contact-title">
            Get <span className="italic">In Touch</span>
          </h2>
          <p className="contact-subtitle">
            Ready to bring your brand&apos;s story to life? Let&apos;s create something amazing together.
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <label>Phone</label>
              <a href="tel:+923330299251">
                <PhoneIcon className="contact-icon" />
                +92 333 029 9251
              </a>
            </div>
            <div className="contact-item">
              <label>WhatsApp</label>
              <a href="https://wa.me/923330299251" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="contact-icon" />
                +92 333 029 9251
              </a>
            </div>
            <div className="contact-item">
              <label>Email</label>
              <a href="mailto:alefiyahabbas13@gmail.com">alefiyahabbas13@gmail.com</a>
            </div>
            <div className="contact-item">
              <label>Instagram</label>
              <a href="https://instagram.com/mastii.notstopping" target="_blank" rel="noopener noreferrer">
                @mastii.notstopping
              </a>
            </div>
          </div>
          <a href="mailto:alefiyahabbas13@gmail.com" className="contact-cta">
            <span>Start a Project</span>
            <ArrowIcon />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">&copy; 2025 Alefiyah Abbas. All rights reserved.</p>
        <div className="footer-social">
          <a href="https://wa.me/923330299251" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer-social-link whatsapp">
            <WhatsAppIcon />
          </a>
          <a href="tel:+923330299251" aria-label="Call" className="footer-social-link">
            <PhoneIcon />
          </a>
          <a href="https://instagram.com/mastii.notstopping" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="mailto:alefiyahabbas13@gmail.com" aria-label="Email" className="footer-social-link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </footer>

      {/* Image Modal */}
      {modalImage && (
        <div className={`modal ${modalImage ? 'active' : ''}`} onClick={() => setModalImage(null)}>
          <div className="modal-close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <img src={modalImage} alt="Portfolio preview" />
        </div>
      )}
    </>
  )
}
