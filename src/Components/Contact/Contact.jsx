import React from 'react'
import './Contact.css';
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

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
    <div className='contact'>
        <div className='contact_col'>
            <h3> Seend us a message <img src={msg_icon} alt='' /> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                elit. Voluptatem excepturi natus, iure necessitatibus 
                pariatur, libero doloremque omnis 
                expedita saepe adipisci ipsa voluptatum 
                veniam aut quas autem cumque odio, reprehenderit iste!
            </p>
            <ul>
                <li><img src={mail_icon} />CONTACT US</li>
                <li><img src={phone_icon} />465468468486486</li>
                <li><img src={location_icon} />uzbekistan Tashkent</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type='text' name='name' placeholder='enter your name' required />

                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='enter your number' required />

                <label>Write your message here </label>
                <textarea name='message'  rows='6' cols='10' placeholder='enter your messege'></textarea>
                <button type='submit' className='btn dark-btn'>
                    Sumbit now
                    <img src={white_arrow} alt='' />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact