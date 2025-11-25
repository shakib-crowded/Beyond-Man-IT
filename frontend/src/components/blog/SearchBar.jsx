import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery }) => (
  <div className="max-w-2xl mx-auto mb-8 sm:mb-12">
    <div className="relative">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search articles..."
        className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-12 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
      />
    </div>
  </div>
);

export default SearchBar;
