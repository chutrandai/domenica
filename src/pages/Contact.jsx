const Contact = () => {

  return (
    <div className="contactdiv" >
      <form  className='contact-form' /*method="POST"*/>
        <div className='contact-infos'>
        <h1 className='contact-title'>Contact Us</h1>
        <div className='contact-info' >
        <h4>Full Name</h4>
        <input placeholder='Enter Full Name...' type="text" name="" id="" required/>
        <hr />
        <h4>Email</h4>
        <input placeholder='Enter Full Email...' type="email" name="" id="" required/>
        <hr />
        <h4>Phone</h4>
        <input placeholder='XXX XXX XXXX' type="tel" name="telphone" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" required/>
        <hr />
        </div>
        </div>
        <div className='contact-message'>
          <h3 className='message-title'>Message</h3>
          <textarea className='message-area' placeholder='Write text here...' name="" id="" required></textarea>
          <button className='submit-button' type='submit'>Submit</button>
        </div> 
      </form>
      </div>
  )
}

export default Contact