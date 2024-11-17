import React from 'react';
import { Code, Palette, Calculator, Music, Camera, Globe, Brain, BarChart } from 'lucide-react';

const categories = [
  { icon: Code, name: 'Programming', count: 328 },
  { icon: Palette, name: 'Design', count: 245 },
  { icon: Calculator, name: 'Mathematics', count: 189 },
  { icon: Music, name: 'Music', count: 204 },
  { icon: Camera, name: 'Photography', count: 156 },
  { icon: Globe, name: 'Languages', count: 267 },
  { icon: Brain, name: 'Personal Development', count: 198 },
  { icon: BarChart, name: 'Business', count: 312 },
];

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(({ icon: Icon, name, count }) => (
        <button
          key={name}
          className="flex flex-col items-center p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
        >
          <Icon className="h-8 w-8 text-purple-600 mb-3" />
          <h3 className="text-sm font-semibold text-center">{name}</h3>
          <span className="text-xs text-gray-500">{count} courses</span>
        </button>
      ))}
    </div>
  );
}