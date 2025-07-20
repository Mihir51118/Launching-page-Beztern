import React from 'react';

interface BlogSectionProps {
  onContinueReading: () => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onContinueReading }) => {
  return (
    <div className="relative z-10 bg-black py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
          BEZTERN
        </h2>
        
        {/* Blog post card */}
        <div className="bg-white rounded-lg overflow-hidden max-w-sm mx-auto mb-16">
          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <img 
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400" 
              alt="BEZTERN T-shirt"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">4 June 2025</p>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              CLOTH IS NOT<br />
              PART OF FABRIC?
            </h3>
            <button 
              onClick={onContinueReading}
              className="text-gray-900 font-medium hover:underline transition-all duration-300"
            >
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;