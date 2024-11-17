import React from 'react';
import { Clock, Users, Star, PlayCircle } from 'lucide-react';

interface CourseCardProps {
  title: string;
  instructor: string;
  image: string;
  rating: number;
  students: number;
  duration: string;
  price: string;
  previewUrl: string;
}

export default function CourseCard({
  title,
  instructor,
  image,
  rating,
  students,
  duration,
  price,
  previewUrl,
}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48 group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <PlayCircle className="h-12 w-12 text-white" />
        </a>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{instructor}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
            {price}
          </span>
          <button className="btn-primary">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}