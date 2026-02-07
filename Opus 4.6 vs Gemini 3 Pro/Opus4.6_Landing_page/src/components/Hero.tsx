import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <span className="hero-badge">Trusted by 2,000+ businesses</span>
        <h1 className="hero-title">
          Simple financial management<br />for growing businesses
        </h1>
        <p className="hero-subtitle">
          Track expenses, send invoices, and manage cash flow — all in one
          intuitive dashboard. Spend less time on bookkeeping and more time
          building your business.
        </p>
        <div className="hero-actions">
          <a href="#pricing" className="btn btn-primary">Start Free Trial</a>
          <a href="#features" className="btn btn-outline">See How It Works</a>
        </div>
      </div>
    </section>
  );
}

