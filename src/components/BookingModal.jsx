import { useMemo, useState } from 'react'

export default function BookingModal({ car, onClose, onSubmit }) {
  const [duration, setDuration] = useState('')
  const [delivery, setDelivery] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', pickupDate: '', pickupTime: '', notes: '', terms: false })

  const total = useMemo(() => {
    const days = Number(duration || 0)
    return days * 1500 + (delivery ? 200 : 0)
  }, [duration, delivery])

  if (!car) return null

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  function submitBooking() {
    if (!form.name || !form.email || !form.phone || !form.pickupDate || !form.pickupTime || !duration || !form.terms) {
      alert('Please fill in all required fields including Date and Time.')
      return
    }
    const orderId = 'VM-' + Math.floor(1000 + Math.random() * 9000)
    onSubmit({ orderId, vehicle: car.name, date: form.pickupDate, time: form.pickupTime, total })
    alert(`Booking Submitted!\n\nOrder ID: ${orderId}\nVehicle: ${car.name}\nTotal Price: $${total.toLocaleString()}\n\nYou can track your status in the dashboard.`)
    onClose()
  }

  return (
    <div className="custom-modal-backdrop">
      <div className="custom-modal bg-dark text-light border border-secondary rounded-4">
        <div className="modal-header border-secondary">
          <h5 className="modal-title text-gold fw-bold">Book Your Vehicle</h5>
          <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
        </div>
        <div className="modal-body">
          <form id="bookingForm">
            <div className="row g-3">
              <div className="col-12">
                <label className="form-label text-muted">Selected Car</label>
                <input type="text" value={car.name} readOnly className="form-control bg-black border-secondary text-light" />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} type="text" className="form-control bg-black border-secondary text-light" required />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Email Address</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" className="form-control bg-black border-secondary text-light" required />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} type="tel" className="form-control bg-black border-secondary text-light" required />
              </div>
              <div className="col-md-6 d-flex align-items-end">
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" checked={delivery} onChange={(e) => setDelivery(e.target.checked)} id="deliveryOption" />
                  <label className="form-check-label text-light small" htmlFor="deliveryOption">Add delivery service (+$200)</label>
                </div>
              </div>
              {delivery && (
                <div className="col-12">
                  <label className="form-label text-muted">Delivery Address</label>
                  <input type="text" className="form-control bg-black border-secondary text-light" placeholder="Enter delivery address" />
                </div>
              )}
              <div className="col-md-6">
                <label className="form-label text-muted">Pickup Date</label>
                <input name="pickupDate" value={form.pickupDate} onChange={handleChange} type="date" className="form-control bg-black border-secondary text-light" required />
              </div>
              <div className="col-md-6">
                <label className="form-label text-muted">Pickup Time</label>
                <input name="pickupTime" value={form.pickupTime} onChange={handleChange} type="time" className="form-control bg-black border-secondary text-light" required />
              </div>
              <div className="col-12">
                <label className="form-label text-muted">Rental Duration</label>
                <select className="form-select bg-black border-secondary text-light" value={duration} onChange={(e) => setDuration(e.target.value)} required>
                  <option value="" disabled>Select rental duration...</option>
                  <option value="3">3 Days - $4,500</option>
                  <option value="7">1 Week - $10,500</option>
                  <option value="14">2 Weeks - $21,000</option>
                  <option value="30">1 Month - $45,000</option>
                </select>
              </div>
              <div className="col-12">
                <div className="p-3 bg-black border border-secondary rounded">
                  <h6 className="text-gold fw-bold mb-2">Price Summary</h6>
                  <div className="d-flex justify-content-between mb-2"><span className="text-muted">Base Price (per day):</span><span className="text-light">$1,500</span></div>
                  <div className="d-flex justify-content-between mb-2"><span className="text-muted">Duration:</span><span className="text-light">{duration ? duration + ' days' : '-'}</span></div>
                  <div className="d-flex justify-content-between mb-2"><span className="text-muted">Delivery Fee:</span><span className="text-light">${delivery ? 200 : 0}</span></div>
                  <hr className="border-secondary" />
                  <div className="d-flex justify-content-between"><span className="text-gold fw-bold">Total Price:</span><span className="text-gold fw-bold">${total.toLocaleString()}</span></div>
                </div>
              </div>
              <div className="col-12">
                <label className="form-label text-muted">Special Requests (Optional)</label>
                <textarea name="notes" value={form.notes} onChange={handleChange} className="form-control bg-black border-secondary text-light" rows="3" placeholder="Any special requests or preferences?"></textarea>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" name="terms" checked={form.terms} onChange={handleChange} type="checkbox" id="termsCheck" required />
                  <label className="form-check-label text-light small" htmlFor="termsCheck">I agree to the rental terms and conditions, including insurance requirements and vehicle care policies.</label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer border-secondary justify-content-between">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="rememberDetails" />
            <label className="form-check-label text-light small" htmlFor="rememberDetails">Remember my details</label>
          </div>
          <div>
            <button type="button" className="btn btn-secondary me-2" onClick={onClose}>Cancel</button>
            <button type="button" className="btn btn-primary" onClick={submitBooking}>Complete Booking</button>
          </div>
        </div>
      </div>
    </div>
  )
}
