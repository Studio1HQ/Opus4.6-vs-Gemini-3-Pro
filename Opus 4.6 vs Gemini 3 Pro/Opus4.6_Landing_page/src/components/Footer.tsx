import './Footer.css';

const links = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Legal: ['Privacy', 'Terms', 'Security'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="navbar-brand">
            <span className="brand-icon">📊</span> FinTrack
          </span>
          <p className="footer-tagline">
            Financial clarity for every business.
          </p>
        </div>
        <div className="footer-links">
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="footer-col">
              <h4>{category}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} FinTrack. All rights reserved.</p>
      </div>
    </footer>
  );
}

