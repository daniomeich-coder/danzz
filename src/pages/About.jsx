export default function About() {
  return (
    <>
      <header className="section-padding about-hero">
        <div className="container py-5 text-center">
          <h1 className="display-3 fw-bold text-gold">OUR STORY</h1>
          <p className="lead text-light mx-auto" style={{ maxWidth: '800px' }}>A legacy of speed, a commitment to luxury, and a passion for the extraordinary.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="text-gold fw-bold mb-4">Founded on Excellence</h2>
              <p className="text-muted lead mb-4">Velocity Motors began in 1995 with a single mission: to bring the world's most exceptional automobiles to the most discerning drivers.</p>
              <p className="text-muted mb-4">Over the past three decades, we have grown from a small boutique showroom to a global leader in luxury and performance vehicle distribution.</p>
              <div className="row g-4 mt-2">
                <div className="col-6">
                  <h3 className="text-gold fw-bold mb-0">30+</h3>
                  <p className="text-muted small">Years Experience</p>
                </div>
                <div className="col-6">
                  <h3 className="text-gold fw-bold mb-0">500+</h3>
                  <p className="text-muted small">Cars Delivered</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&q=80&w=800" className="img-fluid rounded-4 shadow" alt="Showroom" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="p-5 border border-secondary rounded-4 h-100 bg-black">
                <h3 className="text-gold fw-bold mb-4">Our Mission</h3>
                <p className="text-muted">To redefine the automotive buying experience by offering an unparalleled selection of premium vehicles and personalized services.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-5 border border-secondary rounded-4 h-100 bg-black">
                <h3 className="text-gold fw-bold mb-4">Our Vision</h3>
                <p className="text-muted">To be the most trusted destination for automotive enthusiasts, where performance meets luxury and every drive is unforgettable.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-gold fw-bold display-6">Meet Our Leadership</h2>
            <div className="mx-auto mt-2" style={{ width: '80px', height: '3px', backgroundColor: '#d4af37' }}></div>
          </div>
          <div className="row g-4">
            {[
              ['Julian Vance', 'Founder & CEO', 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'],
              ['Elena Rodriguez', 'Chief Operating Officer', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'],
              ['Marcus Thorne', 'Director of Performance', 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400']
            ].map(([name, role, image]) => (
              <div className="col-md-4" key={name}>
                <div className="card text-center border-0 bg-transparent">
                  <img src={image} className="card-img-top rounded-circle mx-auto mt-4 shadow" style={{ width: '200px', height: '200px', objectFit: 'cover' }} alt={name} />
                  <div className="card-body">
                    <h5 className="text-gold fw-bold">{name}</h5>
                    <p className="text-muted">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
