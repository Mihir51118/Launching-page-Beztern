import React from 'react';
import { MessageCircle, ChevronDown, Clock, Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '9079195956';
    const message = 'Hello! I\'m interested in BEZTERN.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Enhanced real-time business status
  const getBusinessStatus = () => {
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = currentHour * 60 + currentMinute; // Convert to minutes
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[currentDay];
    
    // Business hours: 9:00 AM - 5:00 PM (540 minutes to 1020 minutes)
    const openTime = 9 * 60; // 9:00 AM in minutes (540)
    const closeTime = 17 * 60; // 5:00 PM in minutes (1020)
    
    // Check if it's weekend (Saturday = 6, Sunday = 0)
    const isWeekend = currentDay === 0 || currentDay === 6;
    
    // Format current time for display
    const formatTime = (hour: number, minute: number) => {
      const period = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
    };
    
    const currentTimeDisplay = formatTime(currentHour, currentMinute);
    
    // Calculate next opening time
    const getNextOpeningTime = () => {
      if (isWeekend) {
        // If it's weekend, next opening is Monday 9 AM
        const daysUntilMonday = currentDay === 0 ? 1 : 2; // Sunday = 1 day, Saturday = 2 days
        return `Monday at 9:00 AM`;
      } else if (currentTime >= closeTime) {
        // If after closing time on weekday, next opening is tomorrow 9 AM (or Monday if Friday)
        if (currentDay === 5) { // Friday
          return `Monday at 9:00 AM`;
        } else {
          const tomorrow = days[currentDay + 1];
          return `${tomorrow} at 9:00 AM`;
        }
      } else {
        // If before opening time on weekday
        return `Today at 9:00 AM`;
      }
    };
    
    let status, statusText, statusColor, nextOpening, todayHours;
    
    if (isWeekend) {
      status = 'Closed';
      statusText = 'Closed today';
      statusColor = 'text-red-400';
      nextOpening = getNextOpeningTime();
      todayHours = 'Closed';
    } else if (currentTime >= openTime && currentTime < closeTime) {
      status = 'Open';
      statusText = `Open now • Closes at 5:00 PM`;
      statusColor = 'text-green-400';
      nextOpening = null;
      todayHours = '9:00 AM – 5:00 PM';
    } else {
      status = 'Closed';
      statusText = 'Closed today';
      statusColor = 'text-red-400';
      nextOpening = getNextOpeningTime();
      todayHours = '9:00 AM – 5:00 PM';
    }
    
    return { 
      dayName, 
      status, 
      statusText, 
      statusColor, 
      currentDay, 
      currentTimeDisplay,
      nextOpening,
      todayHours,
      isCurrentlyOpen: status === 'Open'
    };
  };

  // Use React state to force re-renders every minute
  const [currentTime, setCurrentTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const businessStatus = getBusinessStatus();

  const businessHours = [
    { day: 'Mon', hours: '09:00 AM – 05:00 PM', isOpen: true, dayIndex: 1 },
    { day: 'Tue', hours: '09:00 AM – 05:00 PM', isOpen: true, dayIndex: 2 },
    { day: 'Wed', hours: '09:00 AM – 05:00 PM', isOpen: true, dayIndex: 3 },
    { day: 'Thu', hours: '09:00 AM – 05:00 PM', isOpen: true, dayIndex: 4 },
    { day: 'Fri', hours: '09:00 AM – 05:00 PM', isOpen: true, dayIndex: 5 },
    { day: 'Sat', hours: 'Closed', isOpen: false, dayIndex: 6 },
    { day: 'Sun', hours: 'Closed', isOpen: false, dayIndex: 0 }
  ];

  const [showAllHours, setShowAllHours] = React.useState(false);

  return (
    <div className="relative z-10 bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          Contact Us
        </h2>
        
        <div className="mb-8">
          <p className="text-xl text-white mb-2">Better yet, see us in person!</p>
          <p className="text-white/80 mb-8">
            We love our customers, so feel free to visit during normal business hours.
          </p>
          
          <button 
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Message us on WhatsApp
          </button>
        </div>
        
        <div className="space-y-4 text-white">
          <h3 className="text-2xl font-bold">BEZTERN</h3>
          <p className="text-white/80">Sagwara, राजस्थान, भारत</p>
          <p className="text-white/80">9079195956</p>
          
          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-4 flex items-center justify-center gap-2">
              <Clock className="h-5 w-5" />
              Hours
            </h4>
            
            {/* Enhanced Real-time Status Display */}
            <div className="mb-6 bg-white/5 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
              {/* Current Status */}
              <div className="mb-3">
                <p className={`text-xl font-bold ${businessStatus.statusColor}`}>
                  {businessStatus.statusText}
                </p>
              </div>
              
              {/* Current Time & Day */}
              <div className="flex items-center justify-center gap-4 text-sm text-white/80 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{businessStatus.dayName}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{businessStatus.currentTimeDisplay}</span>
                </div>
              </div>
              
              {/* Today's Hours */}
              <div className="text-white/90 mb-3">
                <span className="text-sm text-white/60">Today's Hours: </span>
                <span className="font-medium">{businessStatus.todayHours}</span>
              </div>
              
              {/* Next Opening Time (if closed) */}
              {businessStatus.nextOpening && (
                <div className="text-blue-400 text-sm">
                  <span className="text-white/60">Next Opening: </span>
                  <span className="font-medium">{businessStatus.nextOpening}</span>
                </div>
              )}
            </div>
            
            {/* Hours Toggle */}
            <button
              onClick={() => setShowAllHours(!showAllHours)}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <span className="text-sm">View all hours</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${showAllHours ? 'rotate-180' : ''}`} />
            </button>
            
            {/* All Hours Dropdown - Real-time highlighting */}
            {showAllHours && (
              <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-xs mx-auto">
                {businessHours.map((item, index) => {
                  const isToday = item.dayIndex === businessStatus.currentDay;
                  return (
                    <div 
                      key={index} 
                      className={`flex justify-between items-center py-2 text-sm ${
                        isToday ? 'bg-white/10 rounded px-2' : ''
                      }`}
                    >
                      <span className={`${isToday ? 'text-white font-semibold' : 'text-white/80'}`}>
                        {item.day}
                        {isToday && <span className="ml-1 text-xs text-blue-400">(Today)</span>}
                      </span>
                      <span className={`${
                        item.isOpen 
                          ? (isToday ? 'text-white font-semibold' : 'text-white') 
                          : 'text-red-400'
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            
            {/* Schedule Notes */}
            <div className="mt-6 text-xs text-white/60 max-w-md mx-auto">
              <p>• Hours may vary on holidays</p>
              <p>• Contact us for special appointments</p>
              <p>• Status updates automatically every minute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;