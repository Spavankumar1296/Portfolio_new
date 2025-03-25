import React,{useState} from 'react'
import './Contact.css'
const Contact = () => {
        const [result, setResult] = useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "2c591b57-4e69-4178-9e92-dd8597a8f8dc");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };
  return (
    <div className='bg-white'>
        <h1 className='text-center md:text-4xl sm:3xl font-semibold tracking-tight text-balance mb-6  text-gray-900 '>Let's Talk</h1>
        <div className=''>
            <form onSubmit={onSubmit} className=" mx-auto max-w-xl md:mt-20 sm:mt-2.5">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6">
                    <input type="text" name="name" id="name" placeholder='Name' className="input-box" required/>
                    <input type="email" name="Email" id="Email" placeholder='Email' className="input-box" required/>
                    <textarea name="Message" id="Message" placeholder='Message' className="input-box" required></textarea>
                </div>
                <div className='mt-10'>
                    <button type="submit" className='Submit-Box'>Send</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact