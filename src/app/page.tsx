"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    const handler = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return (
    <div className={styles.container} style={{ width: width, height: height }}>
      <p style={{ margin: 0 }}>굿</p>
    </div>
  );
}
