// app/components/RootFont.tsx
"use client";
import { useEffect } from "react";

const RootFont = () => {
  useEffect(() => {
    const setRem = () => {
      const html = document.documentElement;
      const screenWidth = html.clientWidth;
      const rootFontSize = screenWidth / 10; // 设计稿 375px -> 37.5px
      html.style.fontSize = rootFontSize + "px";
    };
    setRem();
    window.addEventListener("resize", setRem);
    return () => window.removeEventListener("resize", setRem);
  }, []);

  return null;
};

export default RootFont;
