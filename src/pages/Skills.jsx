import '../App.css';

const Skills = () => {
  const dataSkills = [
    {
      category: "Data Analytics",
      skills: [
        { name: "SQL", level: 90 },
        { name: "Python (Pandas, NumPy)", level: 85 },
        { name: "R", level: 75 },
        { name: "Tableau", level: 80 },
        { name: "Power BI", level: 70 },
        { name: "Excel (Advanced)", level: 85 }
      ]
    },
    {
      category: "Machine Learning",
      skills: [
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow/Keras", level: 75 },
        { name: "PyTorch", level: 70 },
        { name: "Natural Language Processing", level: 65 },
        { name: "Computer Vision", level: 60 },
        { name: "Model Deployment", level: 70 }
      ]
    },
  
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        
        <div className="skills-container">
          {dataSkills.map((category, index) => (
            <div key={index} className="skills-category">
              <h3>{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%`, backgroundColor: `rgba(212, 160, 23, ${0.4 + (skill.level/100 * 0.6)})` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;