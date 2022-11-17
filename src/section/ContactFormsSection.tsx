// import React, { useState } from 'react'
// import { validate } from '../contexts/validation'



// const ContactFormsSection = () => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [comments, setComments] = useState('')
//     const [errors, setErrors] = useState({})
//     const [submitted, setSubmitted] = useState(false)
//     const [failedSubmit, setFailedSubmit] = useState(false)
  
  
//       const handleChange = (e:any) => {
//       const {id, value} = e.target
  
//       switch(id) {
//           case 'name':
//           setName(value)
//           break
//           case 'email':
//           setEmail(value)
//           break
//           case 'comments':
//           setComments(value)
//           break
//       }
  
//       setErrors({...errors, [id]: validate(e)})
//       }
  
//     const handleSubmit = (e) => {
//       e.preventDefault()
//       setFailedSubmit(false)
//       setSubmitted(false)
  
//       setErrors(validate(e, {name, email, comments}))

  return (
    <section className="contact">
      <div className="container">
        <h3>Come in Contact with Us</h3>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div>
            <input id="name" className={(errors.name ? 'error': '')} value={name} onChange={handleChange} type="text" placeholder="Your Name" />
            <div className="errorMessage">{errors.name}</div>
          </div>
          <div>
            <input id="email" className={(errors.email ? 'error': '')} value={email} onChange={handleChange} type="email" placeholder="Your Mail" />
            <div className="errorMessage">{errors.email}</div>
          </div>
          <div className="textarea">
            <textarea id="comments" className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
            <div className="errorMessage">{errors.comments}</div>
          </div>
          <div className="formBtn">
            <button type="submit" className="btn-red">Post Comments</button>
          </div>
        </form>    
      </div>
    </section>
  )
}

export default ContactFormsSection