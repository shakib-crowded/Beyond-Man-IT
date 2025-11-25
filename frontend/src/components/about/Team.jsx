const Team = () => {
  const team = [
    {
      name: "Shakib Ansari",
      role: "Founder & CEO ",
      image: "https://beyondman.dev/Resources/images/shakib_image.jpg",
      gradient: "from-blue-600 to-cyan-600",
    },
    // {
    //   name: "Michael Chen",
    //   role: "CTO",
    //   image:
    //     "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
    //   gradient: "from-purple-600 to-pink-600",
    // },
    // {
    //   name: "Emily Rodriguez",
    //   role: "Head of Design",
    //   image:
    //     "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    //   gradient: "from-orange-600 to-red-600",
    // },
    // {
    //   name: "David Kim",
    //   role: "Lead Developer",
    //   image:
    //     "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    //   gradient: "from-green-600 to-emerald-600",
    // },
  ];
  return (
    <div id="our-team" className="mb-12 sm:mb-16 lg:mb-20">
      <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">
        Meet Our{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Leadership
        </span>
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {team.map((member, index) => (
          <div key={index} className="group relative">
            <div className="relative overflow-hidden rounded-2xl mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 sm:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${member.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
              ></div>
            </div>
            <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
            <p className="text-sm text-slate-400">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
