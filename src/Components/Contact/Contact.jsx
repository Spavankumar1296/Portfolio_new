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
<section id='contact' className="bg-white py-12 px-4 sm:px-8 lg:px-16">
  <div className=' max-w-6xl mx-auto'>
    <h1 className='text-center text-3xl md:text-4xl font-semibold tracking-tight text-balance mb-8 md:mb-12 text-gray-900'>
      Let's Talk
    </h1>
    
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-16'>
      <div className='w-full lg:w-1/2 space-y-6 px-4 sm:px-0'>
        <div className='flex justify-start items-start gap-4'>
          <img 
            className='w-6 h-6 mt-1' 
            src="https://img.icons8.com/ios-filled/50/22C3E6/address--v1.png" 
            alt="Address icon" 
          />
          <div>
            <p className='font-light text-sm sm:text-base font-serif'>0-0, Main Street, Ibrahimbad (Village)</p>
            <p className='font-light text-sm sm:text-base font-serif'>Srikakulam, AndhraPradesh, India</p>
          </div>
        </div>
        
        <div className='flex justify-start items-center gap-4'>
          <img 
            className='w-6 h-6' 
            src="https://img.icons8.com/ios-filled/50/22C3E6/phone.png" 
            alt="Phone icon" 
          />
          <p className='text-sm sm:text-base'>9154593068</p>
        </div>
        
        <div className='flex justify-start items-center gap-4'>
          <img 
            className='w-6 h-6' 
            src="https://img.icons8.com/deco-glyph/48/22C3E6/new-post.png" 
            alt="Email icon" 
          />
          <p className='text-sm sm:text-base break-all'>pavankumarseepana1210@gmail.com</p>
        </div>
      </div>
    
      <div className='w-full lg:w-1/2 px-4 sm:px-0'>
        <form onSubmit={onSubmit} className="w-full max-w-md mx-auto lg:mx-0">
          <div className="grid grid-cols-1 gap-6">
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder='Name' 
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              required
            />
            <input 
              type="email" 
              name="Email" 
              id="Email" 
              placeholder='Email' 
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              required
            />
            <textarea 
              name="Message" 
              id="Message" 
              placeholder='Message' 
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              required
            ></textarea>
          </div>
          
          <div className='mt-8'>
            <button 
              type="submit" 
              className='w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300 text-sm sm:text-base'
            >
              Send
            </button>
          </div>
        
        </form>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact