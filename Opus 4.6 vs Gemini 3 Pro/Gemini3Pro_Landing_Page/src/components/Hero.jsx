import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Smart Financial Management for <span className="highlight">Modern Business</span>
                    </h1>
                    <p className="hero-subtitle">
                        Track expenses, manage invoices, and gain real-time insights into your business finances. Simple, powerful, and secure.
                    </p>
                    <div className="hero-actions">
                        <a href="#signup" className="btn btn-primary">
                            Start Free Trial <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                        </a>
                        <a href="#demo" className="btn btn-outline">Watch Demo</a>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Placeholder for Hero Image */}
                    <div className="image-placeholder">
                        <div className="dashboard-mockup">
                            <div className="mockup-header">
                                <span className="dot"></span>
                                <span className="dot"></span>
                                <span className="dot"></span>
                            </div>
                            <div className="mockup-body">
                                <div className="chart-preview"></div>
                                <div className="stats-row">
                                    <div className="stat-box"></div>
                                    <div className="stat-box"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .hero {
          padding: 6rem 0;
          background: linear-gradient(to bottom, var(--color-background-alt), var(--color-background));
        }
        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-title {
          font-size: 3.5rem;
          line-height: 1.2;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }
        .highlight {
          color: var(--color-primary);
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--color-text-light);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }
        .hero-actions {
          display: flex;
          gap: 1rem;
        }
        
        /* Simple CSS illustration for dashboard mockup */
        .image-placeholder {
          background: white;
          border-radius: 1rem;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          padding: 1rem;
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          transition: transform 0.5s ease;
        }
        .image-placeholder:hover {
          transform: perspective(1000px) rotateY(0) rotateX(0);
        }
        .dashboard-mockup {
          background: var(--color-background-alt);
          border-radius: 0.5rem;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }
        .mockup-header {
          background: white;
          padding: 0.75rem;
          border-bottom: 1px solid var(--color-border);
          display: flex;
          gap: 6px;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #e5e7eb;
        }
        .mockup-header .dot:nth-child(1) { background-color: #ef4444; }
        .mockup-header .dot:nth-child(2) { background-color: #f59e0b; }
        .mockup-header .dot:nth-child(3) { background-color: #10b981; }
        
        .mockup-body {
          padding: 1.5rem;
          height: 250px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .chart-preview {
          flex: 1;
          background: white;
          border-radius: 0.5rem;
          background-image: linear-gradient(to right, var(--color-primary-hover) 0%, var(--color-primary) 100%);
          opacity: 0.1;
        }
        .stats-row {
          display: flex;
          gap: 1rem;
          height: 60px;
        }
        .stat-box {
          flex: 1;
          background: white;
          border-radius: 0.5rem;
        }
        
        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .image-placeholder {
            transform: none;
            margin-top: 2rem;
          }
          .image-placeholder:hover {
            transform: none;
          }
        }
        @media (max-width: 480px) {
           .hero-title {
             font-size: 2.5rem;
           }
           .hero-actions {
             flex-direction: column;
           }
        }
      `}</style>
        </section>
    );
};

export default Hero;
