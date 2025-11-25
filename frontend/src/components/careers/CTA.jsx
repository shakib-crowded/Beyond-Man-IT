import { Users } from "lucide-react";

const CTA = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 rounded-2xl p-12 text-center text-white shadow-2xl shadow-orange-500/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="relative z-10">
          <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">Do not See Your Role?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            We are always looking for talented individuals. Send us your resume
            and we will keep you in mind for future opportunities.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition shadow-lg">
            Send General Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
