"use client";

import { useEffect, useRef, useState } from "react";

const DynamicComponent = () => {
  const targetDivRef = useRef<HTMLElement | null>(null);
  const [windowInnerHeight, setWindowInnerHeight] = useState(0);

  useEffect(() => {
    targetDivRef.current = document.getElementById("gamesContainer");
    setWindowInnerHeight(window.innerHeight);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          console.log("Bottom of div intersecting with viewport");
        }
      },
      { threshold: 0.5, root: document }
    );

    if (targetDivRef.current) {
      observer.observe(targetDivRef.current);
    }

    // Cleanup
    return () => {
      if (targetDivRef.current) {
        observer.unobserve(targetDivRef.current);
      }
    };
  }, []);

  return <></>;
};

export default DynamicComponent;
