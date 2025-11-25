import { ArrowRight, Box } from "lucide-react";

const Project = () => {
  const projectExamples = [
    {
      title: "Healthcare Management System",
      tech: "React, Node.js, PostgreSQL",
      category: "Healthcare",
      desc: "HIPAA-compliant patient management platform",
    },
    {
      title: "E-commerce Platform",
      tech: "Next.js, Python, MongoDB",
      category: "Retail",
      desc: "Multi-vendor marketplace with 100K+ users",
    },
    {
      title: "Financial Analytics Tool",
      tech: "Angular, Java, Oracle",
      category: "Finance",
      desc: "Real-time trading analytics dashboard",
    },
  ];

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-400">
            Real-world solutions we've delivered for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projectExamples.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-purple-500 transition group"
            >
              <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <Box className="w-20 h-20 text-white opacity-50" />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3">{project.desc}</p>
                <div className="text-xs text-slate-500 mb-4">
                  <span className="font-semibold text-slate-400">Tech:</span>{" "}
                  {project.tech}
                </div>
                <a
                  href="#"
                  className="text-purple-400 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
