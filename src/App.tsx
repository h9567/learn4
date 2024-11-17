import React from 'react';
import Navbar from './components/Navbar';
import CourseCard from './components/CourseCard';
import CategoryList from './components/CategoryList';
import { Sparkles, TrendingUp } from 'lucide-react';

const featuredCourses = [
  {
    title: "Complete Web Development Bootcamp 2024",
    instructor: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    rating: 4.8,
    students: 15420,
    duration: "32h",
    price: "Free",
    previewUrl: "https://www.youtube.com/watch?v=0pThnRneDjw"
  },
  {
    title: "Data Science and Machine Learning Masterclass",
    instructor: "Michael Chen",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800",
    rating: 4.9,
    students: 12350,
    duration: "45h",
    price: "Free",
    previewUrl: "https://www.youtube.com/watch?v=NWONeJKn6kc"
  },
  {
    title: "Digital Marketing Strategy",
    instructor: "Emma Davis",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    rating: 4.7,
    students: 8940,
    duration: "28h",
    price: "Free",
    previewUrl: "https://www.youtube.com/watch?v=nU-IIXBWlS4"
  },
  {
    title: "UI/UX Design Fundamentals",
    instructor: "Alex Turner",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800",
    rating: 4.8,
    students: 10280,
    duration: "36h",
    price: "Free",
    previewUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Learn4: Free Education for Everyone
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Access quality education completely free. Learn from industry experts and transform your career.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
              Start Learning Now
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Sparkles className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold">Browse Categories</h2>
          </div>
          <CategoryList />
        </section>

        {/* Featured Courses Section */}
        <section>
          <div className="flex items-center mb-8">
            <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold">Featured Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;