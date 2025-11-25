import { CheckCircle } from "lucide-react";

const Mission = () => {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
        Our Mission
      </h3>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
        To empower businesses with innovative technology solutions that drive
        growth, efficiency, and digital transformation. We are committed to
        delivering exceptional value through cutting-edge development, strategic
        consulting, and unwavering support.
      </p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-slate-300">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base">
            Deliver world-class IT solutions tailored to client needs
          </span>
        </li>
        <li className="flex items-start gap-3 text-slate-300">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base">
            Foster innovation through continuous learning and adaptation
          </span>
        </li>
        <li className="flex items-start gap-3 text-slate-300">
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base">
            Build long-lasting partnerships based on trust and results
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Mission;
