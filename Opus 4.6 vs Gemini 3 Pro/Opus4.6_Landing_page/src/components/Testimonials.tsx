import './Testimonials.css';

const testimonials = [
  {
    quote:
      'FinTrack replaced three separate tools for us. Now everything lives in one place and our bookkeeping takes half the time.',
    name: 'Sarah Chen',
    role: 'Founder, Bloom Studio',
  },
  {
    quote:
      "The cash flow forecasting alone is worth it. I finally feel confident about our financial runway.",
    name: 'Marcus Rivera',
    role: 'CEO, NovaPack',
  },
  {
    quote:
      'We switched from spreadsheets to FinTrack in an afternoon. The bank sync feature is an absolute game-changer.',
    name: 'Priya Sharma',
    role: 'CFO, Greenline Logistics',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <h2 className="section-title">Loved by business owners</h2>
        <p className="section-subtitle">
          Join thousands of companies managing their finances with FinTrack.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <footer className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

