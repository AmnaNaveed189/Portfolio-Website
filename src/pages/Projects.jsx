import ProjectCard from '../components/ProjectCard';
import hr from '../assets/Projects/HR-Analytics.jpg'
import ecommerce from '../assets/Projects/Ecommerce.jpg'
import covid_19 from '../assets/Projects/COVID-19.jpg'
import heartattack from '../assets/Projects/heart-attack.webp'
import diabetes from '../assets/Projects/Diabetes.jpg'
import covid_19_dashboard from '../assets/Projects/COVID-19 Analytics Dashboard.png'
import diabetes_dashboard from '../assets/Projects/Diabetes Patient Analysis Dashboard.png'
import hr_dashboard from '../assets/Projects/HR Analytics Dashboard Image.png'
import heartattack_dashboard from '../assets/Projects/HeartAttack.png'
import scal from '../assets/Projects/SCAL.png'
import RFM from '../assets/Projects/RFM-Metrics.webp'
import diabetes_patient from '../assets/Projects/Diabetes_Patient_Readmission.png'
import Diabetes_Patient from '../assets/Projects/Diabetes_Patient.jpg'
import Br from '../assets/Projects/Br. Dashboards.png'
import BrImage from '../assets/Projects/Br Image.png'
import '../App.css';

const Projects = () => {
  // All projects in a single array
  const projects = [
    {
      title: "Brazilian Ecommerce Public Dataset Analysis",
      description: "Analyzing customer behavior, sales trends, and product performance in the Brazilian e-commerce market",
      technologies: ["DAX", "Power Bi", "Data Analysis", "Data Visualization"],
      githubUrl: "https://github.com/AmnaNaveed189/Elevvo_Pathways_Internship_Projects.git",
      liveUrl: Br,
      image: BrImage
    },
    {
      title: "Diabetes Patient Readmission Risk Analysis",
      description: "Analyzing patient data to predict the likelihood of readmission",
      technologies: ["SQL", "DAX", "Power Bi", "Data Analysis", "Data Visualization"],
      githubUrl: "https://github.com/AmnaNaveed189/Data-Analytics-Projects.git",
      liveUrl: diabetes_patient,
      image: Diabetes_Patient
    },
    {
      title: "Customer Segmentation using RFM Analysis",
      description: "Segmentation of customers based on Recency, Frequency, and Monetary metrics to identify high-value customers",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis", "Data Visualization"],
      githubUrl: "https://github.com/AmnaNaveed189/Elevvo_Pathways_Internship_Projects.git",
      
      image: RFM
    },
    {
      title: "HR Analytics Dashboard",
      description: "Interactive dashboard analyzing Attrition Rate by Age groups, Education Departments, etc",
      technologies: ["Tableau", "csv", "Data Analysis", "Data Visualization"],
      githubUrl: "https://github.com/AmnaNaveed189/Data-Analytics-Projects.git",
      liveUrl: hr_dashboard,
      image: hr
    },
    {
      title: "Supply Chain and Logistics Management",
      description: "Comprehensive Dashboards design to analyze Sales Performance,Supplier Performance, Finances, Logistics, ",
      technologies: ["SQL", "Power Bi", "Queries", "Data Visualization", "Data Analysis", "DAX"],
      githubUrl: "https://github.com/AmnaNaveed189/Data-Analytics-Projects.git",
      liveUrl: scal,
      image: ecommerce
    },
    {
      title: "COVID-19 Data Analysis",
      description: "Detailed Dashboard to Analyze Positive cases, Death Cases, Average Death Rate",
      technologies: ["Power BI", "DAX", "Python", "Data Cleaning", "Data Analysis","Data Visualization"],
      githubUrl: "https://github.com/AmnaNaveed189/Data-Analytics-Projects.git",
      liveUrl: covid_19_dashboard,
      image: covid_19
    },
    {
      title: "HeartAttack Data Analysis",
      description: "Interactive Dashboard to analyze AGe and Troponin of HeartAttack Patients",
      technologies: ["Power Bi", "Data Analysis", "Data Visualization"],
      githubUrl: "https://github.com/AmnaNaveed189/Data-Analytics-Projects.git",
      liveUrl: heartattack_dashboard,
      image: heartattack
    },
    {
      title: "Diabetes Analytics Dashboard",
      description: "Comprehensive Dashboard to analyze Diabetic Patients",
      technologies: ["Power Bi", "Data Analysis", "Data Visualization"],
      githubUrl: "https://github.com/AmnaNaveed189/Data-Analytics-Projects.git",
      liveUrl: diabetes_dashboard,
      image: diabetes
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
                
        {/* Render all projects in a single grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;