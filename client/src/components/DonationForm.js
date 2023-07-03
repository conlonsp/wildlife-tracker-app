import React, { useState } from "react";

function DonationForm({ orgId }) {

  const [donation, setDonation] = useState({
    amount: '',
    note: '',
  })

  function handleChange(e) {
    setDonation({
      ...donation,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Donation Form</h1>
      <p>{orgId}</p>
      <form>
        <input
          type='number'
          name='amount'
          placeholder='Amount'
          value={donation.amount}
          onChange={handleChange}
        />
        <input
          type='text'
          name='note'
          placeholder='Note'
          value={donation.note}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default DonationForm