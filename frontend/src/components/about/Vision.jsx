import { CheckCircle } from "lucide-react";

const Vision = () => {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
        Our Vision
      </h3>
      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
        To be the global leader in IT innovation, recognized for transforming
        businesses through technology and creating a digital future where every
        organization can thrive and reach its full potential.
      </p>
      <ul className="space-y-3">
        <li className="flex items-start gap-3 text-slate-300">
          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base">
            Lead the industry in technological innovation and excellence
          </span>
        </li>
        <li className="flex items-start gap-3 text-slate-300">
          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base">
            Expand our global footprint while maintaining personalized service
          </span>
        </li>
        <li className="flex items-start gap-3 text-slate-300">
          <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
          <span className="text-sm sm:text-base">
            Create sustainable impact through responsible technology practices
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Vision;
