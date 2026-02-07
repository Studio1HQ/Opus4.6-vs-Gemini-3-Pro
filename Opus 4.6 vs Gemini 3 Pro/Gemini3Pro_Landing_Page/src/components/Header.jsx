import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container header-content">
                <a href="/" className="logo">
                    FinTrack
                </a>
                <nav className="nav">
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#pricing" className="nav-link">Pricing</a>
                    <a href="#testimonials" className="nav-link">Testimonials</a>
                </nav>
                <a href="#signup" className="btn btn-primary">Get Started</a>
            </div>
            <style>{`
        .header {
          padding: 1.5rem 0;
          position: sticky;
          top: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(5px);
          z-index: 100;
          border-bottom: 1px solid var(--color-border);
        }
        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          letter-spacing: -0.5px;
        }
        .nav {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          color: var(--color-text-light);
          transition: var(--transition);
        }
        .nav-link:hover {
          color: var(--color-primary);
        }
        @media (max-width: 768px) {
          .nav {
            display: none;
          }
        }
      `}</style>
        </header>
    );
};

export default Header;
