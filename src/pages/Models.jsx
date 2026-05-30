import { useState } from 'react'
import { cars } from '../data/cars.js'
import CarCard from '../components/CarCard.jsx'
import BookingModal from '../components/BookingModal.jsx'

export default function Models() {
  const [selectedCar, setSelectedCar] = useState(null)
  const [orders, setOrders] = useState([])
  const [showDashboard, setShowDashboard] = useState(false)

  function addOrder(order) {
    setOrders([order, ...orders])
    setShowDashboard(true)
  }

  return (
    <>
      <header className="bg-dark py-5 border-bottom border-secondary">
        <div className="container py-5 text-center">
          <h1 className="display-3 fw-bold text-gold">THE COLLECTION</h1>
          <p className="lead text-light">Discover our curated selection of high-performance vehicles.</p>
        </div>
      </header>

      <section className="bg-black py-4 border-bottom border-secondary">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
            <h4 className="text-gold fw-bold mb-0">Order Status Dashboard</h4>
            <button className="btn btn-outline-gold btn-sm" onClick={() => setShowDashboard(!showDashboard)}>View Activity Log</button>
          </div>
          {showDashboard && (
            <div className="mt-4">
              <div className="table-responsive">
                <table className="table table-dark table-hover border-secondary">
                  <thead>
                    <tr>
                      <th className="text-gold">Order ID</th>
                      <th className="text-gold">Vehicle</th>
                      <th className="text-gold">Status</th>
                      <th className="text-gold">Ready for Pickup</th>
                      <th className="text-gold">Activity Log</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.length === 0 ? (
                      <tr><td colSpan="5" className="text-center text-muted">No active orders found. Please book a car to see status.</td></tr>
                    ) : orders.map(order => (
                      <tr key={order.orderId}>
                        <td>{order.orderId}</td>
                        <td>{order.vehicle}</td>
                        <td><span className="badge bg-warning text-dark">Pending</span></td>
                        <td>{order.date} at {order.time}</td>
                        <td className="small">Order Received - Verifying Details</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row g-4">
            {cars.map(car => <CarCard key={car.id} car={car} onBook={setSelectedCar} />)}
          </div>
        </div>
      </section>

      <BookingModal car={selectedCar} onClose={() => setSelectedCar(null)} onSubmit={addOrder} />
    </>
  )
}
