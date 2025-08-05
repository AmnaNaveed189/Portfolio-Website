// Certificates.js
import { certificates } from '../data/certificates';

const Certificates = () => {
  return (
    <div className="certificates-page">
      <h1>My Certifications</h1>
      <div className="certificates-grid">
        {certificates.map(cert => (
          <div key={cert.id} className="certificate-card">
            {cert.image && (
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={`${cert.issuer} ${cert.title}`}
                  className="certificate-image"
                />
              </div>
            )}
            <div className="certificate-content">
              <h3>{cert.title}</h3>
              <p>Issued by {cert.issuer} | {cert.date}</p>
              <p className="certificate-desc">{cert.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates