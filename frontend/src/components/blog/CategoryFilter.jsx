const CategoryFilter = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => (
  <div className="flex flex-wrap justify-center gap-3 mb-8 sm:mb-12">
    {categories.map((category, index) => (
      <button
        key={index}
        onClick={() => setSelectedCategory(category)}
        className={`cursor-pointer px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
          selectedCategory === category
            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
            : "bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

export default CategoryFilter;
