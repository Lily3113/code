
import React, { useState } from 'react';

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: 'General Inquiry', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Support Cards Data
  const supportCards = [
    { title: "Call Us Directly", text: "Let's discuss how our tailored strategies can help your brand thrive online.", icon: "📞" },
    { title: "Visit Our Office", text: "Our doors are always open! Come by anytime to discuss how we can help.", icon: "🏢" },
    { title: "Email Support", text: "Reach out to us anytime at our email—we're ready to help you grow.", icon: "✉️" },
  ];

  return (
    <div className="container" style={{ marginTop: '50px' }}>
     
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '42px', marginBottom: '10px' }}>Contact us</h1>
        <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto' }}>
          Get in touch with us to discuss your digital marketing needs. Whether you're looking for
          strategy, branding, or full-service campaigns, our team is ready.
        </p>
      </div>

      {/* Main Hero Image */}
      <div className="image-wrapper" style={{ height: '300px', marginBottom: '80px' }}>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Office" />
        <div className="tape" style={{ top: '-15px', right: '-40px', transform: 'rotate(45deg)' }}></div>
      </div>

      {/* Split Layout: Info (Left) & Form (Right) */}
      <div className="contact-container">
       
        {/* LEFT: Navy Info Box */}
        <div className="contact-info-box">
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Contact Information</h2>
          <p style={{ opacity: 0.7, marginBottom: '40px' }}>Say something to start a live chat!</p>

          <div className="contact-info-item">
            <span>📞</span> <span>+1234567890</span>
          </div>
          <div className="contact-info-item">
            <span>✉️</span> <span>prelusive@gmail.com</span>
          </div>
          <div className="contact-info-item">
            <span>📍</span> <span>123 Takue_thebrain Street Murehwa,<br/>Harare Zimbabwe 02156</span>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '15px', marginTop: 'auto', paddingTop: '40px' }}>
            <div className="icon-box" style={{ width: '30px', height: '30px', background: '#FFB84C', color: '#0B1C36' }}>Fb</div>
            <div className="icon-box" style={{ width: '30px', height: '30px', background: 'white', color: '#0B1C36' }}>Tw</div>
            <div className="icon-box" style={{ width: '30px', height: '30px', background: '#FFB84C', color: '#0B1C36' }}>Li</div>
          </div>

          {/* Geometric Circles (Bottom Right Decoration) */}
          <div className="circle-deco" style={{ width: '150px', height: '150px', bottom: '-50px', right: '-50px' }}></div>
          <div className="circle-deco" style={{ width: '100px', height: '100px', bottom: '30px', right: '30px' }}></div>
        </div>

        {/* RIGHT: White Form */}
        <div className="contact-form-box">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group" style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', fontWeight: '600' }}>First Name</label>
                <input type="text" name="firstName" className="form-input" placeholder="Doe" onChange={handleChange} />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', fontWeight: '600' }}>Last Name</label>
                <input type="text" name="lastName" className="form-input" placeholder="Smith" onChange={handleChange} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group" style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', fontWeight: '600' }}>Email</label>
                <input type="email" name="email" className="form-input" placeholder="example@gmail.com" onChange={handleChange} />
              </div>
              <div className="form-group" style={{ flex: 1 }}>
                <label style={{ fontSize: '12px', fontWeight: '600' }}>Phone Number</label>
                <input type="text" name="phone" className="form-input" placeholder="+1 012 3456 789" onChange={handleChange} />
              </div>
            </div>

            <div className="form-group">
              <label style={{ fontSize: '12px', fontWeight: '600' }}>Select Subject?</label>
              <div className="radio-group">
                {['General Inquiry', 'Marketing', 'Support', 'Other'].map((opt) => (
                  <label key={opt} className="radio-label">
                    <input
                      type="radio"
                      name="subject"
                      value={opt}
                      checked={formData.subject === opt}
                      onChange={handleChange}
                    /> {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label style={{ fontSize: '12px', fontWeight: '600' }}>Message</label>
              <input type="text" name="message" className="form-input" placeholder="Write your message.." onChange={handleChange} />
            </div>

            <div style={{ textAlign: 'right', marginTop: '30px' }}>
              <button className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>

      {/* Bottom 3 Cards */}
      <div className="grid-3" style={{ marginBottom: '100px' }}>
        {supportCards.map((card, idx) => (
          <div key={idx} className="support-card">
            <div className="icon-box" style={{ background: '#E8F0FE', marginBottom: '15px' }}>{card.icon}</div>
            <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>{card.title}</h3>
            <p style={{ fontSize: '13px', color: '#666' }}>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;  
