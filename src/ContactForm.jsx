import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <label>Name</label>
        <input type="text" placeholder='name'/>
        <label>Email</label>
        <input type="text" placeholder='email'/>
        <label>Request</label>
        <input type="text" placeholder='request'/>
        <button>Send Request</button>
        {/* On click send an email to Mom at a custom domain */}
    </div>
  )
}

export default ContactForm