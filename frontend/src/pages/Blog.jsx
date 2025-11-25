import React, { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  Search,
  TrendingUp,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import PageHeader from "../components/blog/PageHeader";
import SearchBar from "../components/blog/SearchBar";
import CategoryFilter from "../components/blog/CategoryFilter";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogGrid from "../components/blog/BlogGrid";
import NoResults from "../components/blog/NoResults";
import Newsletter from "../components/blog/NewsLetter";

// Main Blog Component
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "Cybersecurity",
    "Cloud Computing",
    "AI & ML",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the future of web development, from AI integration to progressive web apps and beyond.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
      category: "Web Development",
      author: "Sarah Johnson",
      date: "Oct 8, 2024",
      readTime: "5 min read",
      views: "2.3K",
      comments: 45,
      gradient: "from-blue-600 to-cyan-600",
      featured: true,
    },
    {
      id: 2,
      title: "Building Secure Mobile Apps: Best Practices Guide",
      excerpt:
        "Learn essential security practices for mobile app development to protect user data and prevent vulnerabilities.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      category: "Mobile Apps",
      author: "Michael Chen",
      date: "Oct 5, 2024",
      readTime: "7 min read",
      views: "1.8K",
      comments: 32,
      gradient: "from-purple-600 to-pink-600",
      featured: false,
    },
    {
      id: 3,
      title: "Cybersecurity Threats in 2024: What Businesses Need to Know",
      excerpt:
        "Stay ahead of emerging cybersecurity threats and learn how to protect your business infrastructure effectively.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      category: "Cybersecurity",
      author: "Emily Rodriguez",
      date: "Oct 3, 2024",
      readTime: "6 min read",
      views: "3.1K",
      comments: 58,
      gradient: "from-red-600 to-orange-600",
      featured: true,
    },
    {
      id: 4,
      title: "Cloud Migration Strategy: A Complete Roadmap",
      excerpt:
        "Discover proven strategies for successful cloud migration and how to optimize your infrastructure for scalability.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
      category: "Cloud Computing",
      author: "David Kim",
      date: "Oct 1, 2024",
      readTime: "8 min read",
      views: "2.7K",
      comments: 41,
      gradient: "from-green-600 to-emerald-600",
      featured: false,
    },
    {
      id: 5,
      title: "AI in Software Development: Boosting Productivity",
      excerpt:
        "How artificial intelligence is revolutionizing software development workflows and enhancing developer productivity.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      category: "AI & ML",
      author: "Sarah Johnson",
      date: "Sep 28, 2024",
      readTime: "6 min read",
      views: "4.2K",
      comments: 67,
      gradient: "from-indigo-600 to-purple-600",
      featured: false,
    },
    {
      id: 6,
      title: "Responsive Design: Mobile-First Approach Explained",
      excerpt:
        "Master the mobile-first design methodology and create websites that deliver exceptional user experiences across all devices.",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop",
      category: "Web Development",
      author: "Michael Chen",
      date: "Sep 25, 2024",
      readTime: "5 min read",
      views: "1.9K",
      comments: 28,
      gradient: "from-blue-600 to-cyan-600",
      featured: false,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const showFeatured =
    featuredPost && selectedCategory === "All" && !searchQuery;
  const displayPosts = showFeatured
    ? filteredPosts.filter((post) => !post.featured)
    : filteredPosts;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <PageHeader />

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {showFeatured && <FeaturedPost post={featuredPost} />}

        {displayPosts.length > 0 ? (
          <BlogGrid posts={displayPosts} />
        ) : (
          <NoResults />
        )}

        <Newsletter />
      </div>
    </section>
  );
};

export default Blog;
