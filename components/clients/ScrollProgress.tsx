"use client";

import { useEffect, useState } from "react";

const getDocHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
};

const calculateScrollPercentage = () => {
  return (
    ((window.innerHeight + document.documentElement.scrollTop) /
      getDocHeight()) *
    100
  );
};

export function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPercentage(calculateScrollPercentage());
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="sticky top-0 h-[5px] bg-[#0052B4]"
      style={{ width: `${scrollPercentage}%` }}
    />
  );
}
