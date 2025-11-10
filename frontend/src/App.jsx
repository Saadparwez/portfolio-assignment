import { useState, useEffect } from 'react'
import ProjectCard from './components/ProjectCard'
import rutgersLogo from './assets/Rutgers-logo.jpg'
import purdueLogo from './assets/Purdue-logo.png'
import elevateLogo from "./assets/elevate.png";
import wongLogo from "./assets/wong fleming.png";
import petrominLogo from "./assets/petromin.png";

function App() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json')
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        }
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">

{/* 🧭 Responsive Navbar */}
<nav className="bg-white shadow-md fixed w-full top-0 z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">

    {/* Logo */}
    <a
      href="#home"
      className="text-2xl font-bold text-gray-800 hover:text-red-700 transition"
    >
      Portfolio
    </a>

    {/* Desktop Menu */}
    <div className="hidden md:flex space-x-6">
      <a href="#home" className="text-gray-600 hover:text-red-700 transition">Home</a>
      <a href="#experience" className="text-gray-600 hover:text-red-700 transition">Work Experience</a>
      <a href="#projects" className="text-gray-600 hover:text-red-700 transition">Projects</a>
      <a href="#skills" className="text-gray-600 hover:text-red-700 transition">Skills</a>
      <a href="#contact" className="text-gray-600 hover:text-red-700 transition">Contact</a>
    </div>

    {/* Mobile Hamburger Button */}
    <button
      className="md:hidden text-gray-700 text-3xl focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      {menuOpen ? "✖" : "☰"}
    </button>
  </div>

  {/* Mobile Menu Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-lg border-t border-gray-200 animate-slideDown">
      <a
        onClick={() => setMenuOpen(false)}
        href="#home"
        className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
      >
        Home
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="#experience"
        className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
      >
        Work Experience
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="#projects"
        className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
      >
        Projects
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="#skills"
        className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
      >
        Skills
      </a>

      <a
        onClick={() => setMenuOpen(false)}
        href="#contact"
        className="block px-6 py-3 text-gray-700 hover:bg-gray-100"
      >
        Contact
      </a>
    </div>
  )}
</nav>



      {/* 🏠 Hero Section */}
      <section id="home" className="pt-24 pb-20 bg-gradient-to-br from-red-50 to-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Hello, I'm <span className="text-red-700">Saad Parwez!</span>
          </h1>

          {/* 🎓 University Logos */}
          <div className="flex justify-center gap-6 mb-4">
            <img src={rutgersLogo} alt="Rutgers Logo" className="h-20 w-auto rounded shadow-md hover:scale-110 transition-transform" />
            <img src={purdueLogo} alt="Purdue Logo" className="h-20 w-auto rounded shadow-md hover:scale-110 transition-transform" />
          </div>

          <p className="text-gray-700 font-medium mb-8">
            Rutgers Business School <br />
            Purdue University – Mitchell E. Daniels Jr. School of Business
          </p>

          <p className="text-xl text-gray-700 mb-8">
            I am an entry-level Legal Operations and Supply Chain Professional passionate about 
            optimizing processes and building data-driven solutions for efficiency and impact.
            I completed my undergraduate studies in Supply Chain and Marketing Science from Rutgers University. 
            Currently, I am pursuing my Master of Science in Business Analytics and Information Management at Purdue University.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="px-8 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-white text-red-700 border-2 border-red-700 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* 💼 Work Experience */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Work Experience</h2>

          <div className="relative border-l-4 border-red-700 ml-4">
            {[ 
              {
                title: "Legal Operations Coordinator",
                company: "Elevate Services",
                duration: "Sep 2023 – Aug 2025",
                description:
                  "Assist with document processing, legal billing, and metric reporting for enterprise clients, improving operational efficiency.",
                logo: elevateLogo,
              },
              {
                title: "Administrative Assistant / Financial Analyst",
                company: "Wong Fleming, P.C.",
                duration: "Oct 2020 – Oct 2021",
                description:
                  "Reduced attorney research time by 40% and created Excel dashboards for cost tracking.",
                logo: wongLogo,
              },
              {
                title: "Supply Chain Rotational Intern",
                company: "Petromin Corporation",
                duration: "Aug 2017 – Sep 2017",
                description:
                  "Developed demand forecasts and logistics cost optimization models.",
                logo: petrominLogo,
              }
            ].map((job, index) => (
              <div key={index} className="mb-12 ml-6 group">
                <div className="absolute -left-3.5 w-7 h-7 bg-red-700 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition"></div>

                <div className="bg-white shadow-md hover:shadow-xl px-6 py-5 rounded-xl transition-all">
                  <div className="flex items-center gap-4">
                    <img src={job.logo} className="h-12 w-12 rounded-md shadow" />
                    <div>
                      <h3 className="text-xl font-semibold text-red-700">{job.title}</h3>
                      <p className="text-gray-500 text-sm">{job.company} • {job.duration}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-700">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 Projects */}
      <section id="projects" className="py-16 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
  Projects & Achievements
</h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>

{/* 🧩 Skills Section with Progress Bars */}
<section id="skills" className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
      Skills & Proficiency
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          name: "Python",
          percent: 75,
          description:
            "Experienced in Python for data analysis, web scraping, and data visualization.",
          color: "bg-green-600"
        },
        {
          name: "Data Analysis (Excel, SQL)",
          percent: 75,
          description:
            "Skilled in using Excel, SQL, while also learning NoSQL as part of my graduate coursework.",
          color: "bg-green-500"
        },
        {
          name: "Supply Chain Strategy",
          percent: 85,
          description:
            "Experienced in procurement planning, forecasting, logistics, and optimization.",
          color: "bg-blue-600"
        },
        {
          name: "Project Management",
          percent: 85,
          description:
            "Strong organizational and leadership skills with experience leading team-based projects.",
          color: "bg-indigo-600"
        },
        {
          name: "Leadership & Communication",
          percent: 87,
          description:
            "Excellent communicator with strong collaboration, presentation, and leadership skills.",
          color: "bg-red-600"
        },
        {
          name: "Legal Research and Legal Bill Review",
          percent: 70,
          description:
            "Skilled in legal workflow optimization, billing review, and intermediate proficiency in legal research and eDiscovery tools.",
          color: "bg-purple-600"
        }
      ].map((skill, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
        >
          {/* Skill Name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {skill.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">{skill.description}</p>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`${skill.color} h-3 rounded-full transition-all duration-700`}
              style={{ width: `${skill.percent}%` }}
            ></div>
          </div>

          {/* Percentage */}
          <p className="text-right text-sm font-semibold text-gray-700 mt-1">
            {skill.percent}%
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* 📬 Contact Section */}
<section id="contact" className="py-16 bg-white">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-12 text-gray-900">Contact</h2>

    {formSubmitted && (
      <p className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
        Thank you! Your message has been sent.
      </p>
    )}

    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-700"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-700"
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-700"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition shadow-lg"
      >
        Send Message
      </button>
    </form>

    {/* ✔️ Direct Email and LinkedIn links */}
    <div className="mt-8 text-center space-y-3">
      <p className="text-gray-600">Or reach out directly:</p>

      <a
        href="mailto:sparwez@purdue.edu"
        className="block text-red-700 font-semibold hover:underline"
      >
        sparwez@purdue.edu
      </a>

      <a
        href="https://www.linkedin.com/in/saad-parwez-1a811a145/"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-700 font-semibold hover:underline"
      >
        LinkedIn Profile
      </a>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-red-700 text-white py-6">
        <p className="text-center">© {new Date().getFullYear()} Saad Parwez | Purdue University</p>
      </footer>
    </div>
  )
}

export default App
