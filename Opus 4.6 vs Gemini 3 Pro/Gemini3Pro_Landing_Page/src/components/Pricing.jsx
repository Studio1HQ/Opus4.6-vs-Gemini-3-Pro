import React from 'react';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Starter",
        price: "$0",
        period: "/month",
        description: "Perfect for freelancers and side hustlers.",
        features: ["5 Invoices per month", "Basic Expense Tracking", "1 User", "Email Support"],
        highlight: false,
        cta: "Start for Free"
    },
    {
        name: "Growth",
        price: "$29",
        period: "/month",
        description: "For small businesses scaling up.",
        features: ["Unlimited Invoices", "Advanced Reports", "5 Users", "Priority Support", "Receipt Scanning"],
        highlight: true,
        cta: "Start Free Trial"
    },
    {
        name: "Pro",
        price: "$79",
        period: "/month",
        description: "For established teams and agencies.",
        features: ["Unlimited Users", "API Access", "Custom Integrations", "Dedicated Account Manager", "Audit Logs"],
        highlight: false,
        cta: "Contact Sales"
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section pricing-section">
            <div className="container">
                <h2 className="section-title">Simple, transparent pricing</h2>
                <p className="section-subtitle">
                    Choose the plan that fits your business needs. No hidden fees. Cancel anytime.
                </p>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className={`pricing-card ${plan.highlight ? 'highlighted' : ''}`}>
                            <div className="pricing-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <div className="plan-price">
                                    <span className="amount">{plan.price}</span>
                                    <span className="period">{plan.period}</span>
                                </div>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="feature-item">
                                        <Check size={18} className="check-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} full-width`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
        .pricing-section {
          background-color: var(--color-background-alt);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
          align-items: center; /* helps align cards if they have different heights */
        }
        .pricing-card {
          background: white;
          padding: 2.5rem;
          border-radius: 1rem;
          border: 1px solid var(--color-border);
          position: relative;
        }
        .pricing-card.highlighted {
          border-color: var(--color-primary);
          box-shadow: 0 20px 40px -10px rgba(79, 70, 229, 0.2);
          transform: scale(1.05); /* Slight pop */
          z-index: 10;
        }
        /* Reset scale on mobile for better stacking */
        @media (max-width: 900px) {
           .pricing-card.highlighted {
             transform: none;
           }
        }
        
        .plan-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--color-text);
          margin-bottom: 0.5rem;
        }
        .plan-price {
          display: flex;
          align-items: baseline;
          margin-bottom: 1rem;
        }
        .amount {
          font-size: 3rem;
          font-weight: 800;
          color: var(--color-text);
        }
        .period {
          color: var(--color-text-light);
          margin-left: 0.5rem;
        }
        .plan-description {
          color: var(--color-text-light);
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }
        
        .plan-features {
          list-style: none;
          margin-bottom: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--color-text);
        }
        .check-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        
        .full-width {
          width: 100%;
        }
      `}</style>
        </section>
    );
};

export default Pricing;
