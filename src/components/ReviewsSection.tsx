import React from 'react';
import { Star } from 'lucide-react';

const ReviewsSection: React.FC = () => {
  const reviews = [
    {
      id: 1,
      category: "streetwears",
      review: "Review 1",
      rating: 4,
      date: "13/5/2025"
    },
    {
      id: 2,
      category: "beztern",
      review: "Review 2",
      rating: 5,
      date: "13/5/2025"
    },
    {
      id: 3,
      category: "clothing",
      review: "Review 3",
      rating: 4,
      date: "13/5/2025"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="relative z-10 bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg p-6 text-center">
              {/* Avatar placeholder */}
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-gray-400 font-bold">A</span>
              </div>
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-3">
                {renderStars(review.rating)}
              </div>
              
              {/* Category */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {review.category}
              </h3>
              
              {/* Review text */}
              <p className="text-gray-600 mb-4 italic">
                "{review.review}"
              </p>
              
              {/* Date */}
              <p className="text-sm text-gray-500">
                Anonymous - {review.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;