import React, { useEffect, useState } from 'react';


export default function ScrollProgress() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" style={{ width: `${scrollTop}%` }}></div>
    </div>
  );
}
