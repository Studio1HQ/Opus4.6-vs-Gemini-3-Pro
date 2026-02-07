import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <a href="/" className="footer-logo">FinTrack</a>
                    <p className="footer-text">
                        Simple, secure financial management for modern businesses.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Twitter size={20} /></a>
                        <a href="#" className="social-link"><Linkedin size={20} /></a>
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                    </div>
                </div>

                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h4 className="column-title">Product</h4>
                        <ul className="footer-links">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Integrations</a></li>
                            <li><a href="#">Changelog</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="column-title">Resources</h4>
                        <ul className="footer-links">
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4 className="column-title">Company</h4>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} FinTrack. All rights reserved.</p>
            </div>

            <style>{`
        .footer {
          background-color: #111827;
          color: #f3f4f6;
          padding-top: 4rem;
          padding-bottom: 2rem;
        }
        .footer-content {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        .footer-brand {
          max-width: 300px;
        }
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          display: block;
          margin-bottom: 1rem;
        }
        .footer-text {
          color: #9ca3af;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-link {
          color: #9ca3af;
          transition: var(--transition);
        }
        .social-link:hover {
          color: white;
        }
        
        .footer-links-grid {
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }
        .column-title {
          color: white;
          font-weight: 600;
          margin-bottom: 1.25rem;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #9ca3af;
          font-size: 0.95rem;
          transition: var(--transition);
        }
        .footer-links a:hover {
          color: white;
        }
        
        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .footer-content {
             flex-direction: column;
          }
          .footer-links-grid {
            gap: 2rem;
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
