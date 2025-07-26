import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./Skills.css";

const mockLangIcons = [
  {
    id: 1,
    lang_name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    exp_level: "Expert",
  },
  {
    id: 2,
    lang_name: "Python",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    exp_level: "Expert",
  },
  {
    id: 3,
    lang_name: "React",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    exp_level: "Intermediate",
  },
  {
    id: 4,
    lang_name: "Django",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    exp_level: "Intermediate",
  },
  {
    id: 5,
    lang_name: "PostgreSQL",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    exp_level: "Beginner",
  },
];

const Skills = () => {
  const [icons] = useState(mockLangIcons);

  const responsive = {
    0: { items: 1 },
    512: { items: 2 },
    768: { items: 3 },
    1024: { items: 5 },
  };

  const items = icons.map((icon) => (
    <div className="mylang fade-in" title={icon.lang_name} key={icon.id}>
      <div className="lang-info">
        <div className="lang-img">
          <img src={icon.icon} alt={icon.lang_name} />
        </div>
        <h3>{icon.lang_name}</h3>
        <p className={`exp-level ${icon.exp_level}`}>{icon.exp_level}</p>
      </div>
    </div>
  ));

  return (
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
  );
};

export default Skills;
