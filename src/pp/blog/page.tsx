import Image from "next/image";
import { Clock, Calendar, Search, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Protein Supplements in Modern Diet",
    excerpt:
      "Discover how protein supplements can help bridge nutritional gaps in today's fast-paced lifestyle...",
    category: "Nutrition",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image:
      "https://res.cloudinary.com/dn633knvv/image/upload/v1709723673/nutrition-blog_ouy7jl.jpg",
  },
  {
    id: 2,
    title: "Understanding Micronutrients: A Complete Guide",
    excerpt:
      "Learn about essential vitamins and minerals your body needs for optimal functioning...",
    category: "Wellness",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    image:
      "https://res.cloudinary.com/dn633knvv/image/upload/v1709723673/micronutrients-blog_dt7uqi.jpg",
  },
  {
    id: 3,
    title: "Fitness 101: Creating Sustainable Workout Routines",
    excerpt:
      "Practical tips for building exercise habits that last beyond New Year resolutions...",
    category: "Fitness",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    image:
      "https://res.cloudinary.com/dn633knvv/image/upload/v1709723673/fitness-blog_rvqllh.jpg",
  },
];

const categories = ["All", "Nutrition", "Wellness", "Fitness", "Recipes"];

export default function BlogPage() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Health & Wellness Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert insights, nutrition tips, and fitness guidance to help you
            achieve your wellness goals
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search
              className="absolute right-4 top-3.5 text-gray-400"
              size={20}
            />
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-96">
              <Image
                src="https://picsum.photos/id/345/200/300"
                alt="Featured Post"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="text-orange-500 font-semibold">
                FEATURED POST
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-6">
                Holistic Approaches to Modern Health Challenges
              </h2>
              <p className="text-gray-600 mb-6">
                Explore integrated solutions combining nutrition, exercise, and
                mental wellness for comprehensive health benefits...
              </p>
              <div className="flex items-center space-x-4 text-gray-500">
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  <span>Mar 18, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={`https://picsum.photos/id/${index + 340}/200/300`}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <span className="text-orange-500 font-semibold text-sm">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="mt-4 inline-flex items-center text-orange-500 font-semibold hover:text-orange-600"
                >
                  Read More
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center space-x-4">
          <button className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">
            Previous
          </button>
          <button className="px-4 py-2 rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-50">
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
