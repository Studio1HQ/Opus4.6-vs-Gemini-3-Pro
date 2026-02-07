import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        quote: "FinTrack completely transformed how we manage our finances. The automation tools alone saved us 10+ hours a month.",
        author: "Sarah Jenkins",
        role: "Founder, Design Studio",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        quote: "Finally, a financial tool that makes sense for small businesses. The interface is intuitive and clean.",
        author: "Michael Chen",
        role: "CEO, TechStart Inc",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        quote: "The customer support is outstanding. They helped us set up our custom invoicing workflow in minutes.",
        author: "Emily Rodriguez",
        role: "Freelance Consultant",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section testimonials-section">
            <div className="container">
                <h2 className="section-title">Trusted by thousands</h2>
                <p className="section-subtitle">
                    Join 10,000+ businesses who trust FinTrack with their financial management.
                </p>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="var(--color-primary)" stroke="none" />
                                ))}
                            </div>
                            <p className="quote">"{item.quote}"</p>
                            <div className="author-info">
                                <img src={item.avatar} alt={item.author} className="avatar" />
                                <div>
                                    <h4 className="author-name">{item.author}</h4>
                                    <p className="author-role">{item.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .testimonials-section {
          background-color: var(--color-background);
        }
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .testimonial-card {
          padding: 2rem;
          background: var(--color-background-alt);
          border-radius: 1rem;
        }
        .stars {
          display: flex;
          gap: 4px;
          margin-bottom: 1rem;
          color: var(--color-primary);
        }
        .quote {
          font-size: 1.125rem;
          font-style: italic;
          margin-bottom: 1.5rem;
          color: var(--color-text);
          line-height: 1.6;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }
        .author-name {
          font-weight: 600;
          font-size: 1rem;
        }
        .author-role {
          font-size: 0.875rem;
          color: var(--color-text-light);
        }
      `}</style>
        </section>
    );
};

export default Testimonials;
