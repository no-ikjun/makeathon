"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

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
      <div className={styles.upper_space} style={{ width: width, height: height * 0.26 }}>
        <div className={styles.building} style={{ backgroundColor: "white", width: height * 0.26, height: height * 0.26 }}>
          <p>건물</p>
        </div>
      </div>
      <div className={styles.road} style={{ width: width, height: height * 0.48 - 120 }}>
        <Image className={styles.car_icon} src="/car.png" alt="car" width="100" height="100" />
        <Image className={styles.car_crash} src="/car_crash.png" alt="car" width="100" height="100" />
        <Image className={styles.color_light} src="/color_light.png" alt="car" width="200" height="200" />
        <div className={styles.road_div} style={{ width: width, height: 20 }}>
          <div className={styles.road_line} style={{ width: width / 6 - 30 }}>
            {""}
          </div>
          <div className={styles.road_line} style={{ width: width / 6 - 30 }}>
            {""}
          </div>
          <div className={styles.road_line} style={{ width: width / 6 - 30 }}>
            {""}
          </div>
          <div className={styles.road_line} style={{ width: width / 6 - 30 }}>
            {""}
          </div>
          <div className={styles.road_line} style={{ width: width / 6 - 30 }}>
            {""}
          </div>
          <div className={styles.road_line} style={{ width: width / 6 - 30 }}>
            {""}
          </div>
        </div>
      </div>
    </div>
  );
}
