import React, { useState } from 'react';
import './Contact.css';
import LINKED from '../../assets/linkedin.png';
import GIT from '../../assets/github.png';
import Swal from 'sweetalert2'; // Import SweetAlert2

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if(!email || !name || !message){
        Swal.fire({
            title: 'Fill All Fields',
            confirmButtonText: 'OK',
          });
        return;
    }

    try {
      const response = await fetch('https://getform.io/f/alljmzqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }), // Send form data
      });

      if (response.ok) {
        Swal.fire({
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will get back to you soon!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        // Clear the form after successful submission
        setName('');
        setEmail('');
        setMessage('');
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <section id="Contact" className="contact--main">
      <div className="contact--div1">
        <p className="contact--p1">
          Contact Me For <span className="lol2">Collaboration</span>
        </p>
        <p className="contact--p2">
          Reach out to discuss your project needs and let's work together to achieve your business goals!
        </p>
        <div className="contact--socials">
        <a href="https://linkedin.com/in/ali-ahmed-taha-b68644254" target="_blank" rel="noopener noreferrer">
          <img src={LINKED} className="imgimg" alt="LinkedIn" />
        </a>
        <a href="https://github.com/ShinigamiDesu" target="_blank" rel="noopener noreferrer">
          <img src={GIT} className="imgimg" alt="GitHub" />
        </a>
        </div>
      </div>

      <div className="contact--div2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Your Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button onClick={handleSubmit} className="submit-button">
          Submit
        </button>
      </div>
    </section>
  );
}

export default Contact;
