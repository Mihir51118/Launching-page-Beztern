import React from 'react';
import { ArrowLeft, Facebook, Twitter } from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            All Posts
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          CLOTH IS NOT PART OF FABRIC?
        </h1>
        
        {/* Date */}
        <p className="text-gray-500 mb-8">4 June 2025</p>
        
        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800" 
            alt="BEZTERN T-shirt"
            className="w-full h-64 sm:h-80 object-cover rounded-lg"
          />
        </div>
        
        {/* Share Section */}
        <div className="mb-8">
          <p className="text-sm text-gray-600 mb-3">Share this post:</p>
          <div className="flex gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors">
              <Facebook className="h-4 w-4" />
            </button>
            <button className="bg-blue-400 hover:bg-blue-500 text-white p-2 rounded-full transition-colors">
              <Twitter className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        {/* Blog Content */}
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            In the world of fashion and textiles, there's often confusion about the relationship between cloth and fabric. 
            Many people use these terms interchangeably, but understanding their distinction is crucial for anyone interested 
            in the fashion industry, especially in streetwear and contemporary clothing design.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            At BEZTERN, we believe in educating our community about the materials that make up the clothing we wear every day. 
            This knowledge helps us make better choices about quality, sustainability, and style.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Basics</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Fabric is the broader term that encompasses all textile materials created by weaving, knitting, crocheting, 
            or bonding fibers together. Cloth, on the other hand, typically refers to a piece of fabric that has been 
            cut and prepared for a specific use.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            When we design our oversized tees and streetwear pieces at BEZTERN, we carefully select fabrics based on 
            their properties: breathability, durability, comfort, and how they drape on the body. Each fabric choice 
            directly impacts the final product's quality and wearability.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why This Matters for Streetwear</h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            In streetwear fashion, the choice of fabric can make or break a design. The right fabric ensures that 
            oversized silhouettes maintain their shape while providing the comfort and movement that street fashion demands.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            As we prepare for our launch, we're committed to sourcing the finest fabrics that align with our vision 
            of bold, timeless streetwear. Stay tuned for more insights into our design process and the materials 
            that make BEZTERN special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;