// BlogCard Component

import { ArrowRight } from "lucide-react";
import ArticleMeta from "./ArticleMeta";
import CategoryBadge from "./CategoryBadge";

const BlogCard = ({ post }) => (
  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col">
    {/* Image */}
    <div className="relative h-48 sm:h-56 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
      ></div>
      <div className="absolute top-4 left-4">
        <CategoryBadge
          category={post.category}
          gradient={post.gradient}
          className="text-xs px-3 py-1.5"
        />
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
        {post.title}
      </h3>
      <p className="text-sm text-slate-400 mb-4 line-clamp-3 flex-grow">
        {post.excerpt}
      </p>

      <ArticleMeta
        author={post.author}
        date={post.date}
        readTime={post.readTime}
        className="mb-4 text-xs"
      />

      <button className="flex items-center gap-2 text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300">
        Read More
        <ArrowRight className="w-4 h-4 text-purple-400" />
      </button>
    </div>
  </div>
);

export default BlogCard;
