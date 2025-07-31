import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BugReportIcon from "@mui/icons-material/BugReport";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

const skillsData = [
  {
    icon: <CodeIcon style={{ fontSize: "48px", color: "#3f51b5" }} />,
    title: "Full-Stack Web Development",
    description:
      "Building responsive web apps using Java, Spring Boot, React.js, Node.js, and MySQL.",
  },
  {
    icon: <StorageIcon style={{ fontSize: "48px", color: "#009688" }} />,
    title: "Database Design & Integration",
    description:
      "Designing efficient MySQL schemas and integrating them into dynamic web applications.",
  },
  {
    icon: <BugReportIcon style={{ fontSize: "48px", color: "#f44336" }} />,
    title: "Testing & Debugging",
    description:
      "Ensuring software reliability through thorough debugging and real-world testing practices.",
  },
  {
    icon: <DesignServicesIcon style={{ fontSize: "48px", color: "#673ab7" }} />,
    title: "UI/UX Design",
    description:
      "Creating clean and interactive user interfaces using HTML, CSS, Bootstrap, and React.",
  },
];

const Skills = () => (
  <section className="skills py-5" id="skills">
    <div className="container">
      <h2 className="text-center mb-5 skills-heading">Skills</h2>
      <div className="row">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
