import './Features.css';

const features = [
  {
    icon: '💰',
    title: 'Expense Tracking',
    description:
      'Automatically categorize and track every transaction. Get real-time visibility into where your money goes.',
  },
  {
    icon: '📄',
    title: 'Invoicing',
    description:
      'Create professional invoices in seconds. Set up recurring billing and get paid faster with online payments.',
  },
  {
    icon: '📈',
    title: 'Cash Flow Insights',
    description:
      'Visual dashboards and forecasts so you always know your financial position — today and months ahead.',
  },
  {
    icon: '🔗',
    title: 'Bank Sync',
    description:
      'Connect your bank accounts for automatic imports. Reconcile transactions with a single click.',
  },
];

export default function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Everything you need to stay on top of your finances</h2>
        <p className="section-subtitle">
          Powerful tools, simple interface — designed for business owners, not accountants.
        </p>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

