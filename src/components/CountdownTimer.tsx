import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to 30 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center group">
      <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-3 sm:p-4 mb-2 transition-all duration-300 group-hover:bg-white/25 group-hover:scale-105 min-w-[60px] sm:min-w-[80px]">
        <span className="text-xl sm:text-3xl md:text-4xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-white/80 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 sm:gap-6 mb-8">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;