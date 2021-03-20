import React, { useState } from 'react';


const Contact = () =>{

  const [data,setdate] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.name}. My mobile Mumber is ${data.phone} AND email is ${data.email}, Here is what I want to say ${data.message}`
    );
  };

  const InputEvent = (event) => {
    
    const {name, value} = event.target;
    
    setdate((preVal) => {
      return {
        ...preVal,
        [name] : value,
      };
    }); 
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container-fluid contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent}  placeholder="Enter Your FullName" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Mobile Number" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} ></textarea>
              </div>
              <div className="col-12 text-center">
                <button  className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;