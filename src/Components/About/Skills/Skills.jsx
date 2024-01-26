import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation } from "react-router-dom";
const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "Javascript",
    percentage: "75",
  },

  {
    id: 3,
    title: "Css",
    percentage: "80",
  },

  {
    id: 4,
    title: "React",
    percentage: "70",
  },
  {
    id: 5,
    title: "Redux",
    percentage: "50",
  },

  {
    id: 6,
    title: "Wordpress",
    percentage: "50",
  },

  {
    id: 7,
    title: "git",
    percentage: "60",
  },

  {
    id: 8,
    title: "GitHub",
    percentage: "65",
  },
  {
    id: 9,
    title: "Framer Motion",
    percentage: "35",
  },
  {
    id: 10,
    title: "sass",
    percentage: "35",
  },
  {
    id: 11,
    title: "Bootstrap",
    percentage: "70",
  },  {
    id: 12,
    title: "ReactBootstrap",
    percentage: "50",
  },
];
const Skills = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition >= 390) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            <div className="progress__circle">
              <CircularProgressbar
                value={animate ? percentage : 0}
                strokeWidth={7.5}
                text={`${animate ? percentage : 0}%`}
              />
            </div>
            <h3 className="skills__title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
