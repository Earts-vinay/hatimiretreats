import React, { useState } from "react";

const Guest_Details_form = () => {
      // State for registration form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [companyName, setCompanyName] = useState('');

  return (
    <div className="orderform px-4 py-4 rounded ">
    <p className="text-white">Guest Details</p>
     <form>
       <div className="py-3">
         <label htmlFor="nameInput" className="form-label text-white">Name</label>
         <input
           type="text"
           className="form-control bg-transparent  payment_form  payment_form"
           id="nameInput"
           value={name}
           onChange={(e) => setName(e.target.value)}
           required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="emailInput" className="form-label text-white">Email</label>
         <input
           type="email"
           className="form-control bg-transparent  payment_form"
           id="emailInput"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="mobileInput" className="form-label text-white">Mobile Number</label>
         <input
           type="text"
           className="form-control bg-transparent  payment_form"
           id="mobileInput"
           value={mobileNumber}
           onChange={(e) => setMobileNumber(e.target.value)}
           required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="gstInput" className="form-label text-white">GST Number</label>
         <input
           type="text"
           className="form-control bg-transparent  payment_form"
           id="gstInput"
           value={gstNumber}
           onChange={(e) => setGstNumber(e.target.value)}
           required
         />
       </div>
       <div className="mb-3">
         <label htmlFor="companyInput" className="form-label text-white">Company Name</label>
         <input
           type="text"
           className="form-control bg-transparent  payment_form"
           id="companyInput"
           value={companyName}
           onChange={(e) => setCompanyName(e.target.value)}
           required
         />
       </div>
     </form>
    </div>
  )
}

export default Guest_Details_form