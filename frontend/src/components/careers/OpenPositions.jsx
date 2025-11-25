import { Award, Briefcase, Clock, MapPin, Users } from "lucide-react";

const OpenPostions = ({ handleApplyClick }) => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120k - $160k",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"],
      description:
        "We are looking for an experienced Full Stack Developer to join our engineering team and build scalable web applications.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "San Francisco",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100k - $140k",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      description:
        "Join our frontend team to create beautiful, responsive, and performant user interfaces for our products.",
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110k - $150k",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"],
      description:
        "Help us build and maintain robust CI/CD pipelines and cloud infrastructure for our applications.",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Design",
      location: "London",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90k - $120k",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      description:
        "Create intuitive and beautiful user experiences for our web and mobile applications.",
    },
    {
      id: 5,
      title: "Product Manager",
      department: "Product",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "5+ years",
      salary: "$130k - $170k",
      skills: [
        "Product Strategy",
        "Agile",
        "Data Analysis",
        "Stakeholder Management",
      ],
      description:
        "Lead product development initiatives and drive our product roadmap forward.",
    },
    {
      id: 6,
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$105k - $145k",
      skills: ["Penetration Testing", "SIEM", "Security Audits", "Compliance"],
      description:
        "Protect our infrastructure and applications from security threats and ensure compliance.",
    },
  ];

  return (
    <div className="bg-slate-800/50 py-20 border-y border-slate-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
          <p className="text-lg text-slate-400">
            Explore exciting opportunities to join our team
          </p>
        </div>

        <div className="space-y-6">
          {openPositions.map((job) => (
            <div
              key={job.id}
              className="bg-slate-800 rounded-xl border border-slate-700 hover:border-orange-500 transition overflow-hidden"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-3">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Award className="w-4 h-4" />
                            {job.experience}
                          </span>
                        </div>
                        <p className="text-slate-300 mb-4">{job.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 lg:items-end">
                    <div className="text-2xl font-bold text-orange-400">
                      {job.salary}
                    </div>
                    <button
                      onClick={() => handleApplyClick(job)}
                      className="cursor-pointer bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-yellow-700 transition shadow-lg"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OpenPostions;
