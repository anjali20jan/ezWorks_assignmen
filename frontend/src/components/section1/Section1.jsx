import React, { useState } from 'react'
import Button from '../BUTTON/Button'

import './Section1.css'
// import React from 'react'

function Section1() {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      setMessage(""); // Reset message

      try {
          const response = await fetch("http://localhost:5000/submit", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email }),
          });

          const data = await response.json();
          if (response.ok) {
              setMessage(` ${data.message}`);
          } else {
              setMessage(` ${data.error}`);
          }
      }catch (error) {
        console.error("Fetch error:", error);
          setMessage(" Error submitting form");
      }
  };

  return (
    <div className="container">
            <div className="box1">
                <img src="./EZ Works Blue/EZ Works Blue@2x.png" alt="" />
                <h2>Suite Of Business Support Services</h2>
                <div className="para">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed</p>
                </div>
                {/* <div className="flexcards">
                  <Section2/>
                </div> */}
                 <form className='form'  onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                {/* <button type="submit">Submit</button> */}
                <Button text={'Contact Us'} />
                
            </form>
            <p>{message}</p>

            </div>
        </div>
      
 
  )
}
   
//   );
// }


export default Section1



