import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <header className="hero-section text-center">
        <div className="container">
          <h1 className="hero-title mb-4">Unleash the Power</h1>
          <p className="lead mb-5 text-light">Experience the pinnacle of automotive engineering and luxury.</p>
          <Link to="/models" className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow">Explore Models</Link>
        </div>
      </header>

      <section className="section-padding bg-dark">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800" className="img-fluid rounded-4 shadow-lg" alt="Luxury Car" />
            </div>
            <div className="col-lg-6 ps-lg-5">
              <h2 className="text-gold mb-4 display-5 fw-bold">The Art of Performance</h2>
              <p className="text-muted mb-4 lead">At Velocity Motors, we don't just sell cars; we provide a gateway to extraordinary driving experiences. Every vehicle in our collection is handpicked for its superior engineering, breathtaking design, and unparalleled luxury.</p>
              <p className="text-muted mb-5">Whether you are looking for the raw power of a supercar or the refined elegance of a luxury sedan, our team of experts is here to guide you to your perfect match.</p>
              <Link to="/about" className="btn btn-outline-light btn-lg px-4 py-2">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#111' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-gold fw-bold display-6">Why Velocity Motors?</h2>
            <div className="mx-auto mt-2" style={{ width: '80px', height: '3px', backgroundColor: '#d4af37' }}></div>
          </div>
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-5 border border-secondary rounded-4 h-100">
                <div className="mb-4 text-gold fs-1">✓</div>
                <h4 className="fw-bold mb-3">Certified Quality</h4>
                <p className="text-muted">Every car undergoes a rigorous inspection to ensure it meets our highest standards.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-5 border border-secondary rounded-4 h-100">
                <div className="mb-4 text-gold fs-1">⚡</div>
                <h4 className="fw-bold mb-3">Performance Ready</h4>
                <p className="text-muted">Our cars are tuned and maintained to deliver the peak performance you expect.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-5 border border-secondary rounded-4 h-100">
                <div className="mb-4 text-gold fs-1">☎</div>
                <h4 className="fw-bold mb-3">Expert Support</h4>
                <p className="text-muted">Our dedicated concierge service is available to assist with any inquiry needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
