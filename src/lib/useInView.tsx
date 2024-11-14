import { useEffect, useState } from 'react';

const useInView = (threshold = 0) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsInView(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    });

    const element = document.getElementById('footer');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  return isInView;
};

export default useInView;
