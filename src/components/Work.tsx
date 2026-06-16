import { useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  useEffect(() => {
    let translateX = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const workContainer = document.querySelector(".work-container");

      if (!box.length || !workContainer) {
        return;
      }

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parent = box[0].parentElement;

      if (!parent) {
        return;
      }

      const parentWidth = parent.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {[
            {
              title: "Full Stack E-Commerce Platform",
              category: "React / Next.js / Zod",
              tools: "React, Next.js, Zod, Node.js, Express.js",
              image: "ecommerce.png",
            },
            {
              title: "Pick-and-Place Robot Prototype",
              category: "Hardware Build",
              tools: "Ultrasonic sensors, servo motors, autonomous navigation",
              image: "pick and place.png",
            },
            {
              title: "Robotics Simulation Engineer",
              category: "CoppeliaSim / Python",
              tools: "Inverse kinematics, motion scripting, collision detection",
              image: "pick and place.png",
            },
            {
              title: "Personal Portfolio Website",
              category: "HTML / CSS / JavaScript",
              tools: "Responsive UI, scroll animations, interactive components",
              image: "portfolio.png",
            },
            {
              title: "Pop Balloon Game",
              category: "Python / Pygame",
              tools: "2D game logic, scoring, difficulty scaling",
              image: "pop balloon.png.png",
            },
            {
              title: "Data Science Coursework",
              category: "Python / Analytics",
              tools: "Pandas, NumPy, Matplotlib, machine learning basics",
              image: "data science.png",
            },
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
