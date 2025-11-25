const CategoryBadge = ({ category, gradient, className = "" }) => (
  <span
    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r ${gradient} text-white shadow-lg ${className}`}
  >
    {category}
  </span>
);

export default CategoryBadge;
