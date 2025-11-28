import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = ({ projects, setActiveProject }) => {
  return (
    <>
      {/* Projects Stack */}
      <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
          >
            {/* Project Content Container */}
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="relative lg:w-1/2 h-64 sm:h-80 lg:h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                  <span
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white shadow-lg`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs sm:text-sm bg-slate-700/50 text-slate-300 rounded-lg border border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {project.results.map((result, index) => {
                      const Icon = result.icon;
                      return (
                        <div key={index} className="text-center">
                          <div
                            className={`inline-flex p-2 sm:p-2.5 rounded-lg bg-gradient-to-br ${project.gradient} mb-2`}
                          >
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div className="text-lg sm:text-xl font-bold text-white">
                            {result.label}
                          </div>
                          <div className="text-xs sm:text-sm text-slate-400">
                            {result.subtitle}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link
                    to={project.demoLink}
                    target="_blank"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300`}
                  >
                    <span className="text-sm sm:text-base">Live Demo</span>
                    <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div
              className={`absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity duration-500`}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
