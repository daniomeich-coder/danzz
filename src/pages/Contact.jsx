import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <>
      <header className="bg-dark py-5 border-bottom border-secondary">
        <div className="container py-5 text-center">
          <h1 className="display-3 fw-bold text-gold">GET IN TOUCH</h1>
          <p className="lead text-muted">Ready to drive your dream car? Our team is here to help.</p>
        </div>
      </header>

      <section className="section-padding">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <h2 className="text-gold fw-bold mb-4">Contact Information</h2>
              <p className="text-muted mb-5">Visit our showroom or reach out to us through any of the following channels. We are open 7 days a week.</p>
              <div className="d-flex mb-4"><div className="me-4 text-gold fs-2">⌖</div><div><h5 className="fw-bold mb-1">Our Showroom</h5><p className="text-muted">123 Performance Way, Silicon Valley, CA 94025</p></div></div>
              <div className="d-flex mb-4"><div className="me-4 text-gold fs-2">☎</div><div><h5 className="fw-bold mb-1">Phone Number</h5><p className="text-muted">+1 (555) 123-4567</p></div></div>
              <div className="d-flex mb-4"><div className="me-4 text-gold fs-2">✉</div><div><h5 className="fw-bold mb-1">Email Address</h5><p className="text-muted">contact@velocitymotors.com</p></div></div>
            </div>
            <div className="col-lg-7">
              <div className="p-5 border border-secondary rounded-4 bg-dark">
                <h3 className="fw-bold mb-4 text-gold">Send a Message</h3>
                {sent && <div className="alert alert-success">Your inquiry was submitted successfully.</div>}
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Full Name</label>
                      <input type="text" className="form-control bg-black border-secondary text-light p-3" placeholder="Enter your name" required />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small">Email Address</label>
                      <input type="email" className="form-control bg-black border-secondary text-light p-3" placeholder="Enter your email" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label text-muted small">Interested Model</label>
                      <select className="form-select bg-black border-secondary text-light p-3">
                        <option>Choose a model...</option>
                        <option>Porsche 911 Turbo S</option>
                        <option>Ferrari Roma</option>
                        <option>Lamborghini Aventador SVJ</option>
                        <option>Range Rover SVR</option>
                        <option>McLaren 750S</option>
                        <option>BMW M4 Competition</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label text-muted small">Your Message</label>
                      <textarea className="form-control bg-black border-secondary text-light p-3" rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary btn-lg w-100 py-3 mt-3">Submit Inquiry</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-black p-0">
        <div className="container-fluid p-0">
          <div className="map-box">
            <div className="text-center">
              <div className="text-gold mb-3 fs-1">▧</div>
              <h4 className="text-gold fw-bold">Interactive Map Placeholder</h4>
              <p className="text-muted">In a production environment, an interactive Google Map would be embedded here.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
