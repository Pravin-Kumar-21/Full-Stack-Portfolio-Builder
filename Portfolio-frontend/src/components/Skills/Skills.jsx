import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Skills.css";


const skills = [
  {
    "icon": "https://img.icons8.com/color/96/css3.png",
    "lang_name": "CSS",
    "exp_level": "Experienced"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000",
    "lang_name": "Postman",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=zFAYIdFZlGxP&format=png&color=000000",
    "lang_name": "Docker",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=122187&format=png&color=000000",
    "lang_name": "DjangoRest Framework",
    "exp_level": "Experienced"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=78Fr72VCwbPq&format=png&color=000000",
    "lang_name": "SCSS",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000",
    "lang_name": "MYSQL",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=40253&format=png&color=000000",
    "lang_name": "JQuery",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=aGBLcugRkYpT&format=png&color=000000",
    "lang_name": "Elasticsearch",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=123603&format=png&color=000000",
    "lang_name": "React JS",
    "exp_level": "Experienced"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=XPdRFanRZtNK&format=png&color=000000",
    "lang_name": "Django",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/?size=100&id=e6uRfPIDgoXi&format=png&color=000000",
    "lang_name": "AWS",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/color/96/html-5--v1.png",
    "lang_name": "HTML",
    "exp_level": "Experienced"
  },
  {
    "icon": "https://img.icons8.com/fluency/96/c-plus-plus-logo.png",
    "lang_name": "C++",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/color/96/tailwind_css.png",
    "lang_name": "Tailwind CSS",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/color/96/linux--v2.png",
    "lang_name": "Linux",
    "exp_level": "Experienced"
  },
  {
    "icon": "https://img.icons8.com/color/96/git.png",
    "lang_name": "Version Control",
    "exp_level": "Experienced"
  },
  {
    "icon": "https://img.icons8.com/color/96/postgreesql.png",
    "lang_name": "PostgreSQL",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/color/96/figma--v1.png",
    "lang_name": "Figma",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/color/96/javascript--v1.png",
    "lang_name": "Javascript",
    "exp_level": "Intermediate"
  },
  {
    "icon": "https://img.icons8.com/color/96/python--v1.png",
    "lang_name": "Python",
    "exp_level": "Experienced"
  }
]

const Skills = () => {
  const responsive = {
    0: { items: 1 },
    512: { items: 1 },
    640: {items: 2 },
    1024: { items: 5 },
  };

  const items = skills.map((skill, index) => (
    <div className="mylang fade-in" title={skill.lang_name} key={index}>
      <div className="lang-info">
        <div className="lang-img">
          <img src={skill.icon} alt={skill.lang_name} />
        </div>
        <h3>{skill.lang_name}</h3>
        <p className={`exp-level ${skill.exp_level}`}>{skill.exp_level}</p>
      </div>
    </div>
  ));

  return (
    <section id="skills">
      <div className="skill-main">
        <div className="skill-heading">My Skills</div>
        <div className="sub-heading">
          Crafted through passion, honed by practice.
        </div>

        <div className="lang-carousel">
          <AliceCarousel
            infinite
            autoPlay
            autoPlayInterval={2000}
            disableButtonsControls
            disableDotsControls
            mouseTracking
            animationDuration={800}
            animationType="fadeout"
            items={items}
            responsive={responsive}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
