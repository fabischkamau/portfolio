import setup from "~/images/setup.jpg";
import coding from "~/images/lauren-mancke-aOC7TSLb1o8-unsplash.jpg";
import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { cn } from "~/utils/cssutils";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1...",
    imageUrl: setup,
    link: "https://example.com/project1", // Link to project 1
    technologies: ["React", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "Description of project 2...",
    imageUrl: coding,
    link: "https://example.com/project2", // Link to project 2
    technologies: ["Vue.js", "SCSS"],
  },
  // Add more projects as needed
];
type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies?: string[];
};
export default function ProjectsSection({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  return (
    <section className="container mx-auto px-4 pt-20 space-y-5">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
        My Projects
      </h1>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200",
          className
        )}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg shadow-sm overflow-hidden mt-5 pt-10 hover:border-2 hover:border-sky-600"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline inline-flex gap-x-2"
                >
                  <span>View Project</span>
                  <ArrowRight className="size-5" />
                </Link>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies
                    ? project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {tech}
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
