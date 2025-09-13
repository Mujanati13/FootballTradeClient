import './Contact.css';

function Contact() {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with the Football Marketplace team</p>
        </div>
      </div>
      
      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                We'd love to hear from you! Whether you have questions about our platform,
                need support, or want to provide feedback, we're here to help.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>General Support</h3>
                    <button 
                      className="email-button"
                      onClick={() => handleEmailClick('soudani29@gmail.com')}
                    >
                      soudani29@gmail.com
                    </button>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">💼</div>
                  <div className="contact-details">
                    <h3>Business Inquiries</h3>
                    <button 
                      className="email-button"
                      onClick={() => handleEmailClick('soudani29@gmail.com')}
                    >
                      soudani29@gmail.com
                    </button>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">🛠️</div>
                  <div className="contact-details">
                    <h3>Technical Support</h3>
                    <button 
                      className="email-button"
                      onClick={() => handleEmailClick('soudani29@gmail.com')}
                    >
                      soudani29@gmail.com
                    </button>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="contact-icon">💡</div>
                  <div className="contact-details">
                    <h3>Feedback & Suggestions</h3>
                    <button 
                      className="email-button"
                      onClick={() => handleEmailClick('soudani29@gmail.com')}
                    >
                      soudani29@gmail.com
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-additional">
              <h2>Other Ways to Reach Us</h2>
              
              <div className="contact-card">
                <h3>Response Times</h3>
                <ul>
                  <li>General Support: Within 24 hours</li>
                  <li>Technical Issues: Within 12 hours</li>
                  <li>Business Inquiries: Within 48 hours</li>
                  <li>Urgent Issues: Within 6 hours</li>
                </ul>
              </div>
              
              <div className="contact-card">
                <h3>Office Hours</h3>
                <p>
                  <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (UTC)<br/>
                  <strong>Saturday:</strong> 10:00 AM - 4:00 PM (UTC)<br/>
                  <strong>Sunday:</strong> Closed
                </p>
              </div>
              
              <div className="contact-card">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a href="#" className="social-link">Twitter</a>
                  <a href="#" className="social-link">Facebook</a>
                  <a href="#" className="social-link">Instagram</a>
                  <a href="#" className="social-link">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
