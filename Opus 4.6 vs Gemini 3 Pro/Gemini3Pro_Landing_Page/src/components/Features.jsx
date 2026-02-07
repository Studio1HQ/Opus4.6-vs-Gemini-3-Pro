import React from 'react';
import { PieChart, FileText, TrendingUp, ShieldCheck } from 'lucide-react';

const features = [
    {
        icon: <PieChart size={32} />,
        title: "Expense Tracking",
        description: "Automatically categorize expenses and monitor cash flow in real-time. Never lose track of where your money goes."
    },
    {
        icon: <FileText size={32} />,
        title: "Smart Invoicing",
        description: "Create and send professional invoices in seconds. Get paid faster with automated reminders and payment tracking."
    },
    {
        icon: <TrendingUp size={32} />,
        title: "Financial Analytics",
        description: "Visual reports that help you understand your business health. Spot trends and make data-driven decisions."
    },
    {
        icon: <ShieldCheck size={32} />,
        title: "Bank-Grade Security",
        description: "Your data is encrypted and secure. We use the same security standards as major banks to keep your information safe."
    }
];

const Features = () => {
    return (
        <section id="features" className="section features-section">
            <div className="container">
                <h2 className="section-title">Everything you need to grow</h2>
                <p className="section-subtitle">
                    Powerful tools designed to help you manage your business finances with ease.
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .features-section {
          background-color: white;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }
        .feature-card {
          padding: 2rem;
          border-radius: 1rem;
          background-color: white;
          border: 1px solid var(--color-border);
          transition: var(--transition);
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          border-color: var(--color-primary);
        }
        .feature-icon {
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          background: var(--color-background-alt);
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0.75rem;
        }
        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }
        .feature-description {
          color: var(--color-text-light);
          line-height: 1.6;
        }
      `}</style>
        </section>
    );
};

export default Features;
