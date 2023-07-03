import React, { useState } from "react";

function DonationForm({ orgId }) {

  const [donation, setDonation] = useState({
    amount: '',
    note: '',
  })

  return (
    <div>
      <h1>Donation Form</h1>
      <p>{orgId}</p>
      <form>
        <input
          type='number'
          name='amount'
          placeholder='Amount'
        />
        <input
          type='text'
          name='note'
          placeholder='Note'
        />
      </form>
    </div>
  )
}

export default DonationForm