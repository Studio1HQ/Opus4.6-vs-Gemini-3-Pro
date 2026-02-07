import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    description: 'For freelancers and sole traders getting started.',
    features: ['Up to 50 transactions/mo', 'Basic reports', '1 bank connection', 'Email support'],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For growing businesses that need more power.',
    features: [
      'Unlimited transactions',
      'Advanced reports & forecasts',
      'Unlimited bank connections',
      'Invoice automation',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Business',
    price: '$79',
    period: '/mo',
    description: 'For teams managing complex finances.',
    features: [
      'Everything in Pro',
      'Multi-user access',
      'Custom dashboards',
      'API access',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">Simple, transparent pricing</h2>
        <p className="section-subtitle">No hidden fees. Cancel anytime.</p>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card${plan.highlighted ? ' pricing-card--highlighted' : ''}`}
            >
              {plan.highlighted && <span className="pricing-badge">Most Popular</span>}
              <h3 className="pricing-name">{plan.name}</h3>
              <p className="pricing-price">
                {plan.price}
                <span className="pricing-period">{plan.period}</span>
              </p>
              <p className="pricing-desc">{plan.description}</p>
              <ul className="pricing-features">
                {plan.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-outline'} btn-block`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

