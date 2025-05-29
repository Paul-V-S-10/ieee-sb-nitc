"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer/Footer";

export default function ContentWrapper({ children }) {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const fullHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
      setPageHeight(fullHeight);
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(document.body);

    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <>
      {children}
      <Footer fullHeight={pageHeight} />
    </>
  );
}
