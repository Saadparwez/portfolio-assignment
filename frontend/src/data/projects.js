// src/data/projects.js

import deansListImg from "../assets/deans-list.png";
import pythonDemo from "../assets/Video-Demo.mp4";

// If you ever add a screenshot for Python or Demand Planning:
// import pythonScreenshot from "../assets/python-screenshot.png";
// import demandScreenshot from "../assets/demand-planning.png";

const projects = [
  {
    id: 1,
    title: "Python EDA Project",
    description:
      "A Python-based project demonstrating exploratory data analysis, workflow automation, and data cleaning using Pandas and NumPy. The project automated multi-step processes and improved reporting speed.",
    tools: ["Python", "Pandas", "NumPy", "Jupyter Notebook"],
    github: "https://github.com/your-username/your-python-project",
    image: null, // no screenshot for now
    demo: pythonDemo, // working mp4 demo file
  },

  {
    id: 2,
    title: "Dean’s List Honors – Rutgers Business School",
    description:
      "Recognized for academic excellence and maintaining a GPA of 3.5 or above across multiple semesters at Rutgers Business School.",
    tools: ["Academic Achievement", "GPA 3.5+ Requirement"],
    github: null,
    image: deansListImg,
    demo: null,
  },

  {
    id: 3,
    title: "Demand Planning & Procurement Cost Projection",
    description:
      "A demand planning assignment converting finished product demand forecasts into detailed component requirement projections. These requirements were then translated into projected raw material procurement costs across a 3-month horizon.",
    tools: ["Excel"],
    github: null,
    image: null, // add an image later if you have one
    demo: null,
  },
];

export default projects;

