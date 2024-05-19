import { cn } from "@/lib/utils";
import React from "react";

const Smile = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      className={cn(
        " transition-all duration-300 cursor-pointer",
        className
      )}
    >
      <defs>
        <radialGradient id="ccclaymoji-grad-dark" r="93%" cx="20%" cy="20%">
          <stop
            offset="70%"
            stopColor="hsl(41, 100%, 67%)"
            stopOpacity="0"
          ></stop>
          <stop offset="97%" stopColor="#c89924" stopOpacity="1"></stop>
        </radialGradient>
        <radialGradient id="ccclaymoji-grad-light" r="65%" cx="28%" cy="20%">
          <stop offset="0%" stopColor="#fffd88" stopOpacity="0.75"></stop>
          <stop
            offset="100%"
            stopColor="hsl(41, 100%, 67%)"
            stopOpacity="0"
          ></stop>
        </radialGradient>
        <filter
          id="ccclaymoji-blur"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="30"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
        <filter
          id="inner-blur"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="2"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
        <filter
          id="eye-shadow"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow
            stdDeviation="10"
            dx="10"
            dy="10"
            floodColor="#000000"
            floodOpacity="0.2"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="dropShadow"
          ></feDropShadow>
        </filter>
        <linearGradient id="eye-light" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#555555" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="black" stopOpacity="0"></stop>
        </linearGradient>
        <linearGradient id="mouth-light" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ff8670" stopOpacity="1"></stop>
          <stop
            offset="100%"
            stopColor="hsla(353, 98%, 41%, 1.00)"
            stopOpacity="0"
          ></stop>
        </linearGradient>
        <filter
          id="mouth-shadow"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feDropShadow
            stdDeviation="10"
            dx="10"
            dy="10"
            floodColor="#950000"
            floodOpacity="0.2"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="dropShadow"
          ></feDropShadow>
        </filter>
      </defs>
      <g strokeLinecap="round">
        <path
          d="M650 449.99998478233977C650 602.9582058065985 552.9582210242588 726.9541626799139 400 726.9541626799139C247.04245283018867 726.9541626799139 150 602.9582058065985 150 449.99998478233977C150 297.04243761252843 247.04245283018867 173.04580688476562 400 173.04580688476562C552.9582210242588 173.04580688476562 650 297.04243761252843 650 449.99998478233977Z "
          fill="#c89924"
          opacity="0.25"
          filter="url(#ccclaymoji-blur)"
        ></path>
        <path
          d="M650 399.99999613096236C650 561.6737853047515 561.6737891737891 635.7549818859482 400 635.7549818859482C238.3269230769231 635.7549818859482 150 561.6737853047515 150 399.99999613096236C150 238.3269192078854 238.3269230769231 164.24501037597656 400 164.24501037597656C561.6737891737891 164.24501037597656 650 238.3269192078854 650 399.99999613096236Z "
          fill="hsl(41, 100%, 67%)"
        ></path>
        <path
          d="M650 399.99999613096236C650 561.6737853047515 561.6737891737891 635.7549818859482 400 635.7549818859482C238.3269230769231 635.7549818859482 150 561.6737853047515 150 399.99999613096236C150 238.3269192078854 238.3269230769231 164.24501037597656 400 164.24501037597656C561.6737891737891 164.24501037597656 650 238.3269192078854 650 399.99999613096236Z "
          fill="url(#ccclaymoji-grad-dark)"
        ></path>
        <path
          d="M650 399.99999613096236C650 561.6737853047515 561.6737891737891 635.7549818859482 400 635.7549818859482C238.3269230769231 635.7549818859482 150 561.6737853047515 150 399.99999613096236C150 238.3269192078854 238.3269230769231 164.24501037597656 400 164.24501037597656C561.6737891737891 164.24501037597656 650 238.3269192078854 650 399.99999613096236Z "
          fill="url(#ccclaymoji-grad-light)"
        ></path>
        <path
          d="M321 387.75Q352 332.75 371 387.75 "
          strokeWidth="20"
          stroke="black"
          fill="none"
          filter="url(#eye-shadow)"
        ></path>
        <path
          d="M321 387.75Q352 332.75 371 387.75 "
          strokeWidth="6.666666666666667"
          stroke="url(#eye-light)"
          fill="none"
          filter="url(#inner-blur)"
        ></path>
        <path
          d="M421.5 393.25Q449.5 320.25 478.5 393.25 "
          strokeWidth="20"
          stroke="black"
          fill="none"
          filter="url(#eye-shadow)"
        ></path>
        <path
          d="M421.5 393.25Q449.5 320.25 478.5 393.25 "
          strokeWidth="6.666666666666667"
          stroke="url(#eye-light)"
          fill="none"
          filter="url(#inner-blur)"
        ></path>
        <path
          d="M342 461.5Q382 575.5 464 461.5 "
          strokeWidth="20"
          stroke="hsla(353, 98%, 41%, 1.00)"
          fill="none"
          filter="url(#mouth-shadow)"
          transform="rotate(349, 400, 400)"
        ></path>
        <path
          d="M342 461.5Q382 575.5 464 461.5 "
          strokeWidth="6.666666666666667"
          stroke="url(#mouth-light)"
          fill="none"
          filter="url(#inner-blur)"
          transform="rotate(349, 400, 400)"
        ></path>
      </g>
    </svg>
  );
};

export default Smile;
