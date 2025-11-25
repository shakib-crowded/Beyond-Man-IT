import { Search } from "lucide-react";

const NoResults = () => (
  <div className="text-center py-12">
    <div className="inline-flex p-6 rounded-full bg-slate-800/50 mb-4">
      <Search className="w-12 h-12 text-slate-500" />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
    <p className="text-slate-400">
      Try adjusting your search or filter criteria
    </p>
  </div>
);

export default NoResults;
