import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
    {posts.map((post) => (
      <BlogCard key={post.id} post={post} />
    ))}
  </div>
);

export default BlogGrid;
