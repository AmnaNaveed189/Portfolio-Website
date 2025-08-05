import '../App.css';
import profileImage from '../assets/image/Me.jpeg';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="hero">
          <div className="hero-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="hero-content">
            <h1>Hi, I'm <span >Amna Naveed</span></h1>
            <h2>Data Analyst & Machine Learning Engineer</h2>
            <p>
              Passionate about turning data into meaningful insights and building intelligent systems.
              With expertise in statistical analysis, predictive modeling, and data visualization.
            </p>
            <a href="#about" className="btn">Learn More About Me</a>
          </div>
        </div>
        
        <div className="about" id="about">
          <h3>About Me</h3>
          <p>
            I'm currently pursuing a Bachelor's degree in Data Science in University of Engineering and Technology Lahore, where I am honing my skills in data analysis, machine learning, and artificial intelligence. 
            I specialize in extracting insights from complex datasets and implementing 
            machine learning solutions to solve real-world problems.
          </p>
          <div className="highlights">
            <div className="highlight-item">
              <h4>10+</h4>
              <p>Projects Completed</p>
            </div>
            <div className="highlight-item">
              <h4>5+</h4>
              <p>Certificates</p>
            </div>
            <div className="highlight-item">
              <h4>100%</h4>
              <p>Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;