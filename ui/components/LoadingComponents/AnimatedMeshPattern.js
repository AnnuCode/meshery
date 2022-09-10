import React, { useState, useEffect } from "react";
import "./animatedMeshPattern.css";

function getClassName(className, isActive) {
  if (!isActive) {
    return className;
  }

  return `${className} active`;
}

const AnimatedMeshPattern = (props) => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(!isActive);
    }, 2000);
  }, [isActive]);

  return (
    <div>
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 694 574.24"
        width="694"
        height="574.239990234375"
        {...props}
      >
        <title>Service Mesh Pattern</title>
        <path
          d="M428.2,74.48c9.95,12.47,17.31,26.45,22.92,41.3,7.23,19.15,10.52,39.07,6.39,59.27-5.54,27.11-21.4,46.2-47.91,55.38-10.31,3.56-21,5-31.64.54a14.3,14.3,0,0,1-4.07-2.22,26.82,26.82,0,0,1-6.73,17.12,16,16,0,0,1,4.37-1.25c1.47-.27,3-.48,4.44-.61,14.18-1.17,27.85-4.17,40.81-10.37,20-9.59,36.76-23.25,51-40.14A137.44,137.44,0,0,0,488,162.15a173.76,173.76,0,0,0,14.29-52.66c1.83-15.69,1.34-31.08-.23-46.62-.38-3.75-2-5.3-5.37-5.9-8.67-1.54-17.34-3.27-25.86-5.34-22.28-5.41-44.74-10-67.06-15.16-7.93-1.85-15.91-3.52-23.87-5.28,5.84,5.57,12.12,10.15,18.19,15C408.89,54.77,419.52,63.6,428.2,74.48Z"
          fill="#00b39f"
          className={getClassName("svg-elem-1", isActive)}
        ></path>
        <path
          d="M183,267.57c6.84-28.72,18.13-55.07,41.46-74.49,21.25-17.69,45.31-23.2,71.83-14,13.39,4.63,24.86,12.12,31,25.73a15.11,15.11,0,0,1,1.29,3.81,26.71,26.71,0,0,1,15.18-7.2c-.34-.23-.71-.49-1.1-.81-8.15-6.55-15.89-13.68-25.34-18.5-33.63-17.13-69-19.34-104.84-10.2-38.06,9.69-67.48,32.78-91.64,63.16-2.7,3.41-2.48,5.61-.26,9.06,18.74,29.12,37.27,58.36,55.88,87.56,2.47,3.87,5,7.67,8.38,12.77.37-8.61-1.46-15.49-2.42-22.42C179.79,303.82,178.64,285.68,183,267.57Z"
          fill="#00d3a9"
          className={getClassName("svg-elem-2", isActive)}
        ></path>
        <path
          d="M240.26,65.46a350.85,350.85,0,0,1,39.05-4.32c11.88-.65,23.48,1.69,34.95,4.69,27.18,7.11,51.56,19,69.43,41.51,17.06,21.46,21.16,45.54,12,71.36-4.68,13.2-12.59,24.16-26.1,30.1a7.83,7.83,0,0,1-3.05.81,26.73,26.73,0,0,1,7.22,15.73,21.54,21.54,0,0,1,2.05-2.77c9.9-11.77,18.86-24.12,24-38.86a153.77,153.77,0,0,0,8.28-60.26,147.12,147.12,0,0,0-14.83-57.52c-12.63-25.47-30.81-46.43-53-64.06-3.31-2.63-5.71-2.32-9.16-.1-28.56,18.37-57.29,36.48-85.9,54.77-4.45,2.84-9.21,5.31-13.51,9.34A38.32,38.32,0,0,0,240.26,65.46Z"
          fill="#00d3a9"
          className={getClassName("svg-elem-3", isActive)}
        ></path>
        <path
          d="M159.91,183.81c11.25-14.22,22-28.93,37.13-39.45,28-19.42,58.23-32,93-27.16,28,3.92,48.25,19.19,58.35,46.17,4.34,11.59,5.7,23.57.62,35.54a10.13,10.13,0,0,1-1.25,2.29,26.73,26.73,0,0,1,15.83,5.7,9.22,9.22,0,0,1-.28-1.2,41.49,41.49,0,0,1-.39-4.46c-.9-11.81-2.82-23.37-7.06-34.54-9-23.68-24.39-42.47-43.39-58.82-28-24.11-61-34.45-97.23-35.83-10.28-.39-20.59-.5-30.89.85-7.12.93-7.65,1-9.18,8q-9.93,45.29-19.92,90.57c-1.73,7.87-3.41,15.74-5.36,24.72C154.47,192.06,156.87,187.66,159.91,183.81Z"
          fill="#00b39f"
          className={getClassName("svg-elem-4", isActive)}
        ></path>
        <path
          d="M573.57,212.33c-18.8-29.26-37.38-58.66-56.16-87.94-2.49-3.88-4.47-8.22-8.64-12.52,1.2,10.21,2.06,19.1,3.32,27.94,2.63,18.44,2.6,36.71-2.27,54.85-7.66,28.5-20.4,53.82-44.38,72.22-13.14,10.08-28.32,14.7-44.66,14.91-11.45.15-22.34-3.16-32.47-8.59-8.83-4.74-16.36-10.9-20.8-20.16-1.4-2.93-2-4.7-1.55-5.89a26.85,26.85,0,0,1-16,7.65,39,39,0,0,1,4.5,3.36c8.39,6.82,16.78,13.65,26.66,18.35,27.51,13.07,56.59,15.85,86.18,11.19,44.63-7,78.45-32.09,106.19-66.53C576,218,575.68,215.61,573.57,212.33Z"
          fill="#00d3a9"
          className={getClassName("svg-elem-5", isActive)}
        ></path>
        <path
          d="M514.42,296.67c-27.69,27.8-60.83,43.33-100.72,43.44-27.83.08-57.32-18.2-67.2-45-4.09-11.1-6.82-22.36-2.6-34.06,1.12-3.1,1.88-5.07,2.73-6.06a26.8,26.8,0,0,1-16.6-6,17.93,17.93,0,0,1,.91,4.63c.88,8.58,1.34,17.28,3.9,25.57,13.7,44.19,43.16,74.42,84.8,92.74,26.59,11.7,54.91,15.27,84,12.25,13-1.36,13.07-1.12,15.66-12.51,7.15-31.44,14.33-62.88,21.24-94.37,1.17-5.3,3.27-10.54,3.17-17.38-1.63,2.21-2.51,3.37-3.35,4.56C532.28,275.64,524.13,286.91,514.42,296.67Z"
          fill="#00b39f"
          className={getClassName("svg-elem-6", isActive)}
        ></path>
        <path
          d="M270.54,387.45c-12.68-14.24-21.76-30.69-28.07-48.55-6-17.07-9.54-34.62-6.67-52.9,4.17-26.56,17.65-46.41,42.47-57.5,12-5.39,24.71-7.94,37.79-2.92a18.8,18.8,0,0,1,4.08,1.92,26.81,26.81,0,0,1,5.63-15.9,23.85,23.85,0,0,1-3.22.42,164.8,164.8,0,0,0-21.22,2.7c-24.23,5.14-44.33,17.82-62,34.53-23.56,22.23-38.71,49.24-45.08,81.15-3.87,19.38-4.4,38.82-2.94,58.46.57,7.58,3.71,10.29,11.3,11.83,31.76,6.45,63.29,14,95,20.88,5.39,1.18,10.68,3.18,17.82,3.4-5.2-4-9.23-7.06-13.27-10.13C291,406.38,279.88,397.92,270.54,387.45Z"
          fill="#00b39f"
          className={getClassName("svg-elem-7", isActive)}
        ></path>
        <path
          d="M459.87,390.07c-11.29,2-22.65,3.38-34.06,4.48-9.3.9-18.76,1.36-27.9,0a157.33,157.33,0,0,1-38.4-10.52c-19.13-8-36.49-18.59-49.37-35.3C294.61,328.6,289.36,306.13,297,281.6c4.33-13.88,11.47-26.27,25.52-33,2.51-1.19,4.23-1.75,5.44-1.58a26.84,26.84,0,0,1-7.64-15.65,29.38,29.38,0,0,1-2,2.59c-6.46,7.81-13.07,15.52-17.76,24.63-11.31,22-15.45,45.39-14.84,70a144.87,144.87,0,0,0,11.05,52.87c12.17,29,31.52,52.61,56.06,72.15,3.84,3.06,6.59,3.38,10.88.59,24.72-16,49.67-31.72,74.54-47.53,8.22-5.24,16.41-10.52,24.73-15.86A3,3,0,0,0,459.87,390.07Z"
          fill="#00d3a9"
          className={getClassName("svg-elem-8", isActive)}
        ></path>
        <polygon
          points="321.68 506.1 321.68 509.53 321.68 525.71 321.68 545.44 321.68 574.24 398.36 574.24 398.36 558.06 337.86 558.06 337.86 545.44 337.86 541.89 384.34 541.89 384.34 525.71 337.86 525.71 337.86 509.53 398.36 509.53 398.36 493.36 321.68 493.36 321.68 506.1"
          fill="#3c494f"
        ></polygon>
        <path
          d="M694,553.1a20.35,20.35,0,0,1-1.67,8.2,21,21,0,0,1-4.58,6.74,22.24,22.24,0,0,1-6.75,4.53,20.69,20.69,0,0,1-8.25,1.67h-75.7v-17h75.7a4,4,0,0,0,4.1-4.1v-6.58a4,4,0,0,0-4.1-4.09H618.29a20.3,20.3,0,0,1-8.19-1.67,21.5,21.5,0,0,1-11.38-11.38,20.38,20.38,0,0,1-1.67-8.2V514.6a20.73,20.73,0,0,1,1.67-8.25,21.81,21.81,0,0,1,4.58-6.74,21.5,21.5,0,0,1,6.8-4.58,20.13,20.13,0,0,1,8.19-1.67H694V510.5H618.29a4.06,4.06,0,0,0-4.1,4.1v6.58a4.06,4.06,0,0,0,4.1,4.1h54.46A20.69,20.69,0,0,1,681,527a21.71,21.71,0,0,1,11.33,11.32,20.73,20.73,0,0,1,1.67,8.25Z"
          fill="#3c494f"
        ></path>
        <path
          d="M419.75,508.78h41.49V525.6H427.82V541h7.66l29.34,33.21h20L455.45,541H466.9a12.56,12.56,0,0,0,12.56-12.56V505.92a12.56,12.56,0,0,0-12.56-12.56h-63v80.88h16.17Z"
          fill="#3c494f"
        ></path>
        <path
          d="M62,540.9H63.2a12.38,12.38,0,0,0,12.47-12.46V505.82A12.38,12.38,0,0,0,63.2,493.36H0v80.88H16.23l-.29-65.52H57.4v16.53H24.06V540.9"
          fill="#3c494f"
        ></path>
        <polygon
          points="106.96 493.36 74.6 574.24 93.06 574.24 115.05 517.62 130.73 558.06 105.24 558.06 99.2 574.24 155.51 574.24 123.14 493.36 106.96 493.36"
          fill="#3c494f"
        ></polygon>
        <path
          d="M197.75,493.36h31.93V510.5H148.77V493.36h49"
          fill="#3c494f"
        ></path>
        <rect
          x="180.65"
          y="517.68"
          width="17.15"
          height="56.56"
          fill="#3c494f"
        ></rect>
        <path
          d="M284.2,493.36h31.93V510.5h-80.9V493.36h49"
          fill="#3c494f"
        ></path>
        <rect
          x="267.1"
          y="517.68"
          width="17.15"
          height="56.56"
          fill="#3c494f"
        ></rect>
        <path
          d="M591.5,574.24H574.35v-59a4.59,4.59,0,0,0-.38-1.84,4.86,4.86,0,0,0-1-1.5,4.77,4.77,0,0,0-1.51-1,4.58,4.58,0,0,0-1.83-.38H490.34V493.36h79.27a21.09,21.09,0,0,1,8.46,1.72,21.68,21.68,0,0,1,11.7,11.7,21.14,21.14,0,0,1,1.73,8.47Zm-75.76,0H498.59V519.49h17.15Z"
          fill="#3c494f"
        ></path>
      </svg>
    </div>
  );
};

export default AnimatedMeshPattern;
