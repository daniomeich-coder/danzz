export default function CarCard({ car, onBook }) {
  const prices = [
    ['3 Days', '$4,500'],
    ['1 Week', '$10,500'],
    ['2 Weeks', '$21,000'],
    ['1 Month', '$45,000']
  ]
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card h-100 shadow car-card">
        <img src={car.image} className="card-img-top" alt={car.name} />
        <div className="card-body">
          <h5 className="card-title fw-bold">{car.name}</h5>
          <p className="card-text text-gold small">{car.description}</p>
          <div className="specs-section mb-3">
            <h6 className="text-gold fw-bold mb-2">Specifications</h6>
            <ul className="list-unstyled text-muted small">
              {car.specs.map((spec) => <li key={spec}><strong>{spec.split(':')[0]}:</strong>{' '}{spec.split(':').slice(1).join(':').trim()}</li>)}
            </ul>
          </div>
          <div className="pricing-section mb-3">
            <h6 className="text-gold fw-bold mb-2">Rental Pricing</h6>
            <div className="price-grid">
              {prices.map(([label, price]) => (
                <div className="price-item" key={label}>
                  <small className="text-light">{label}</small>
                  <p className="text-gold fw-bold mb-0">{price}</p>
                </div>
              ))}
            </div>
            <small className="text-muted d-block mt-2">*Base price: $1,500/day</small>
          </div>
          <button className="btn btn-primary w-100 mt-auto" onClick={() => onBook(car)}>Book Now</button>
        </div>
      </div>
    </div>
  )
}
