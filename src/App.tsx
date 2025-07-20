import React, { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Logo from './components/Logo';
import CountdownTimer from './components/CountdownTimer';
import EmailSignup from './components/EmailSignup';
import BlogSection from './components/BlogSection';
import BlogPost from './components/BlogPost';
import SocialSection from './components/SocialSection';
import ContactSection from './components/ContactSection';
import ReviewsSection from './components/ReviewsSection';
import FooterSection from './components/FooterSection';

function App() {
  const [showBlogPost, setShowBlogPost] = useState(false);

  const handleContinueReading = () => {
    setShowBlogPost(true);
  };

  const handleBackToBlog = () => {
    setShowBlogPost(false);
  };

  if (showBlogPost) {
    return <BlogPost onBack={handleBackToBlog} />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-[5%]">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo with 20px minimum padding */}
          <div className="px-5">
            <Logo />
          </div>
          
          {/* Main Headline Stack */}
          <div className="mb-8">
            <h1 className="font-montserrat font-black text-white leading-tight tracking-wider-plus
                         text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[64px]
                         animate-fade-in-up animation-delay-100 will-change-transform">
              BE BOLD
            </h1>
            <h1 className="font-montserrat font-black text-white leading-tight tracking-wider-plus
                         text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[64px]
                         animate-fade-in-up animation-delay-200 will-change-transform">
              BE TIMELESS
            </h1>
            <h1 className="font-montserrat font-black text-white leading-tight tracking-wider-plus
                         text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[72px]
                         animate-fade-in-up animation-delay-300 will-change-transform">
              BE BEZTERN
            </h1>
          </div>
          
          {/* Subheading */}
          <p className="font-poppins text-beztern-light-gray mb-12 max-w-[600px] mx-auto leading-relaxed
                       text-base sm:text-lg md:text-xl lg:text-[20px]
                       animate-fade-in-up animation-delay-400 will-change-transform">
            Discover trendy streetwear and oversized tees at unbeatable prices.
          </p>

          {/* Email Signup */}
          <div className="mb-12 animate-fade-in-up animation-delay-500 will-change-transform">
            <EmailSignup />
          </div>
          
          {/* Call-to-Action Button */}
          <div className="animate-fade-in-up animation-delay-900">
            <a 
              href="https://www.instagram.com/beztern/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-black font-montserrat font-bold
                       w-[200px] h-[50px] rounded-[25px] text-[16px]
                       transition-all duration-300 hover:scale-105 
                       focus:outline-none focus:ring-2 focus:ring-white/30
                       flex items-center justify-center
                       shadow-lg hover:shadow-xl"
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="relative z-10 bg-black py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-montserrat font-black text-white text-6xl sm:text-7xl md:text-8xl mb-8">
            COMING SOON
          </h2>
        </div>
      </div>

      {/* Blog Section */}
      <BlogSection onContinueReading={handleContinueReading} />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Social Section */}
      <SocialSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default App;