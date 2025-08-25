import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Skills.css";

const Skills = ({ skills = [] }) => {
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
