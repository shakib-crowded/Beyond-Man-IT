import { ArrowRight, TrendingUp } from "lucide-react";
import CategoryBadge from "../blog/CategoryBadge";
import ArticleMeta from "../blog/ArticleMeta";
import ArticleStats from "../blog/ArticleStats";

const FeaturedPost = ({ post }) => (
  <div className="mb-12 sm:mb-16 lg:mb-20">
    <div className="flex items-center gap-2 mb-4">
      <TrendingUp className="w-5 h-5 text-yellow-400" />
      <span className="text-yellow-400 font-semibold text-sm sm:text-base">
        Featured Article
      </span>
    </div>
    <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
          ></div>
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
            <CategoryBadge category={post.category} gradient={post.gradient} />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {post.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <ArticleMeta
              author={post.author}
              date={post.date}
              readTime={post.readTime}
              className="mb-6 text-xs sm:text-sm"
            />

            <ArticleStats views={post.views} comments={post.comments} />
          </div>

          <button
            className={`mt-6 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${post.gradient} text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300`}
          >
            <span>Read Full Article</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedPost;
