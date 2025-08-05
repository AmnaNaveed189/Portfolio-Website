import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';

const iconMap = {
  linkedin: faLinkedinIn,
  github: faGithub,
  kaggle: faKaggle,
  email: faEnvelope
};

const SocialIcon = ({ platform, url }) => {
  const icon = iconMap[platform];
  
  return (
    <a 
      href={platform === 'email' ? `mailto:${url}` : url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`social-icon ${platform}-icon`}
      aria-label={`${platform} profile`}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default SocialIcon;