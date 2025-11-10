import { useState } from "react";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Project Card */}
      <div
        className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <h3 className="text-xl font-bold text-red-700">{project.title}</h3>
        <p className="text-gray-600 mt-2 mb-4">{project.description}</p>

        <img
  src={project.image}
  alt={project.title}
  className="max-w-sm w-full rounded-lg shadow mb-4 mx-auto"
/>

        <div className="mt-3 text-sm text-gray-500">
          <strong>Tools:</strong> {project.tools.join(", ")}
        </div>

        {project.github && (
          <div className="mt-3">
            <a
              href={project.github}
              target="_blank"
              className="text-blue-600 font-semibold hover:underline"
            >
              View GitHub →
            </a>
          </div>
        )}
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 max-w-2xl w-full relative">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black"
              onClick={() => setOpen(false)}
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {project.title}
            </h2>

            {/* Screenshot */}
            {project.image && (
              <img
                src={project.image}
                alt="Project screenshot"
                className="w-full rounded-lg shadow mb-4"
              />
            )}

            <p className="text-gray-700 mb-4">{project.description}</p>

            <h3 className="font-semibold text-gray-900 mb-2">Tools Used:</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              {project.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                className="inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
              >
                View GitHub Repo
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}





