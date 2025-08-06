import SocialIcon from '../components/Socialicon';
import '../App.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In <span>Touch</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href="mailto:amnanaveed189@gmail.com">amnanaveed189@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <a href="tel:+92 3265322400">+92 3265322400</a>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Lahore, Pakistan</p>
              </div>
            </div>
            
            <div className="social-links">
              <SocialIcon platform="linkedin" url="https://www.linkedin.com/in/amna-naveed-750590312/" />
              <SocialIcon platform="github" url="https://github.com/AmnaNaveed189" />
              <SocialIcon platform="kaggle" url="https://www.kaggle.com/amnanaveed2024ds42" />
              <SocialIcon platform="email" url="amnanaveed189@gmail.com" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send Me a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="contactName">Your Name</label>
            <input 
              type="text" 
              id="contactName" 
              name="name" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
            <input 
              type="email" 
              id="contactEmail" 
              name="email" 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="contactMessage">Message</label>
            <textarea 
              id="contactMessage" 
              name="message" 
              rows="5" 
              required
            ></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;