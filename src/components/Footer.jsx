import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="text-gold fw-bold mb-4">VELOCITY MOTORS</h5>
            <p className="text-muted">Providing luxury and performance vehicles to enthusiasts worldwide. Your journey to excellence starts here.</p>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <h6 className="text-light fw-bold mb-4">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/">Home</Link></li>
              <li className="mb-2"><Link to="/models">Models</Link></li>
              <li className="mb-2"><Link to="/about">About Us</Link></li>
              <li className="mb-2"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h6 className="text-light fw-bold mb-4">Car Categories</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><Link to="/models">Supercars</Link></li>
              <li className="mb-2"><Link to="/models">Luxury Sedans</Link></li>
              <li className="mb-2"><Link to="/models">Performance SUVs</Link></li>
              <li className="mb-2"><Link to="/models">Electric Exotics</Link></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h6 className="text-light fw-bold mb-4">Newsletter</h6>
            <p className="text-muted small">Stay updated with our latest arrivals and exclusive events.</p>
            <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" className="form-control bg-dark border-secondary text-light" placeholder="Email Address" />
              <button type="button" className="btn btn-primary">Join</button>
            </form>
          </div>
        </div>
        <hr className="my-5 border-secondary" />
        <div className="text-center text-muted small">
          <p>&copy; 2026 Velocity Motors. All rights reserved. Created for Academic Project.</p>
        </div>
      </div>
    </footer>
  )
}
