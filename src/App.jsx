import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    // Update active navigation dot on scroll
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);

      // Parallax effect for hero section
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero');
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    
    if (!name || !email || !project) {
      alert('Please fill in all fields');
      return;
    }
    
    // Create mailto link
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Obinna,

${project}

Best regards,
${name}
${email}`);
    
    window.location.href = `mailto:orjiobinna@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="App">
      {/* Navigation Dots */}
      <div className="nav-dots">
        {['hero', 'about', 'projects', 'services', 'contact'].map((section) => (
          <div
            key={section}
            className={`nav-dot ${activeSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="headline">
              I'm Orji Obinna.
            </h1>
            <p className="subheadline">
              I’m a systems thinker who builds smart tools to solve real problems.
               With roots in agriculture and software.
            </p>
            <p className="tagline">
              Tech that works. Data that speaks. Projects that grow.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about fade-in" id="about">
        <div className="container">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I build smart, minimal tools for people, progress, 
              and the planet — a systems thinker, AI enthusiast, 
              and builder of tools that solve real problems. 
              From digitizing laundry queues to connecting farmers across Nigeria, 
              I use code and curiosity to turn simple ideas into scalable, smart systems.

            </p>
            <p>
              Now, I’m deepening my focus on finance operations,
               specifically settlements and reconciliation—the invisible engine behind great businesses. 
               I’m fascinated by how money moves, how systems break, and how precision, 
               structure, and problem-solving can keep companies running smoothly.
            </p>
            <p>
              With a background in agriculture and software development,
               I bring a practical mindset, sharp analytical thinking, 
               and a bias toward building order from chaos. 
               I’m seeking opportunities where I can dig into the details, find mismatches, 
               streamline payment systems, and contribute to business decisions that matter.

            </p>
            <p>
              Let’s fix inefficiencies. Let’s make systems sing. 
              Let’s build smarter backbones for better businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects fade-in" id="projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">

        <a href="https://laundry-app-xi.vercel.app/" target="_blank" class="project-card">
            
              <h3 className="project-title">LaundryQ</h3>
              <p className="project-tech">HTML • CSS • JavaScript • Python</p>
              <p className="project-description">
                Laundry queue app to help track intake and output across service
                days, optimizing workflow for busy laundromats.
              </p>
              
           </a>
            
            <a href="https://../" target="_blank" class="project-card">
            
              <h3 className="project-title">Sleep & Study Analytics</h3>
              <p className="project-tech">Python • React • Data Analysis</p>
              <p className="project-description">
                Research tool exploring correlations between sleep patterns and
                academic performance using data visualization.
              </p>
              
            </a>
           
           <a href=" https://e-mart-three.vercel.app/" target="_blank" class="project-card">
            
              <h3 className="project-title">AgriConnect</h3>
              <p className="project-tech">HTML • CSS • Jascript</p>
              <p className="project-description">
                Smart agricultural platform connecting farmers with AI-driven
                insights for crop optimization and market connections.
              </p>  
            
            </a>
            
           <a href="https://../" target="_blank" class="project-card">
            
              <h3 className="project-title">TaskFlow</h3>
              <p className="project-tech">JavaScript • CSS • Database Design</p>
              <p className="project-description">
                Minimal task management system designed for teams who need clarity
                without complexity  .
              </p>
      
            </a>
          
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services fade-in" id="services">
        <div className="container">
          <h2>Services</h2>
          <div className="services-list">
            <div className="service-item">
              <h4>App Development</h4>
            </div>
            <div className="service-item">
              <h4>AI-Aided Systems Design</h4>
            </div>
            <div className="service-item">
              <h4>Architecture Planning & Roadmaps</h4>
            </div>
            <div className="service-item">
              <h4>Database-Driven Insights</h4>
            </div>
            <div className="service-item">
              <h4>Agricultural & Utility Tech Consulting</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact fade-in" id="contact">
        <div className="container">
          <div className="contact-content">
            <h2>Let's Connect</h2>
            <p>
              Ready to build something meaningful together? Let's discuss your
              project.
            </p>
              
            <div className="contact-buttons">
              <a
                href="mailto:orjid7@gmail.com"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send an E-mail
              </a>
          
              <a
                href="https://wa.me/+2349038655650"
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;