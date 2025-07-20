import React, { useState, useEffect } from 'react';

const RealTimeClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(time);

  const TimeUnit: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center group">
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 sm:p-6 mb-2 transition-all duration-300 group-hover:bg-white/25 group-hover:scale-105 min-w-[80px] sm:min-w-[100px]">
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tabular-nums">
          {value}
        </span>
      </div>
      <span className="text-sm sm:text-base text-white/80 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-4 sm:gap-8 mb-8">
      <TimeUnit value={hours} label="Hours" />
      <TimeUnit value={minutes} label="Minutes" />
      <TimeUnit value={seconds} label="Seconds" />
    </div>
  );
};

export default RealTimeClock;