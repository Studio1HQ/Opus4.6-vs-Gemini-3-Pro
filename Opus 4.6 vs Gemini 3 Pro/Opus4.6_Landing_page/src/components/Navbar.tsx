import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="navbar-brand">
          <span className="brand-icon">📊</span> FinTrack
        </a>
        <ul className="navbar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
        <a href="#pricing" className="btn btn-small">Get Started</a>
      </div>
    </nav>
  );
}

