import { useEffect, useRef } from "react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const modalRef = useRef();

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-6 w-full max-w-2xl relative shadow-xl 
                   max-h-[90vh] min-h-[200px] overflow-y-auto"
      >
        {/* Absolute Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-gray-700 hover:text-red-700 transition z-50"
        >
          ×
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 pr-10">
          {project.title}
        </h2>

        {/* FIXED: Constrained & clipped image */}
        {project.image && (
          <div className="w-full max-h-[250px] overflow-hidden flex justify-center mb-4">
            <img
              src={project.image}
              alt="Project screenshot"
              className="max-h-[250px] object-contain"
            />
          </div>
        )}

        {/* Description */}
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
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
          >
            View GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

