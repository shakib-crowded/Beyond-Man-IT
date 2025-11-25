import { Briefcase } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white mb-6">
            <Briefcase className="w-4 h-4" />
            <span>Join Our Growing Team</span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Build Your Career With Us
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Join a team of passionate innovators building the future of
            technology. We are always looking for talented individuals to help
            us grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
