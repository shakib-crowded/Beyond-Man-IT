import { ChevronRight } from "lucide-react";
import { useContext } from "react";
import { GetStartedContext } from "../../pages/GetStarted";

const Services = () => {
  const { currentStep, services, handleServiceSelect } =
    useContext(GetStartedContext);

  return (
    <>
      {currentStep === 1 && (
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Choose Your Service
            </h2>
            <p className="text-lg text-slate-400">
              Select the type of project you want to build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className="bg-slate-800 rounded-xl border border-slate-700 hover:border-purple-500 transition cursor-pointer group overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${service.gradient} p-6`}>
                  <div className="text-white mb-4 group-hover:scale-110 transition">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-purple-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Select Service</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
