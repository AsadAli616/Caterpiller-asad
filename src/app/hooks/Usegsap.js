"use client";
// useGsap.js
import { useEffect } from "react";
import gsap from "gsap";

const useGsapTimeline = (target, animations, timelineOptions = {}) => {
    useEffect(() => {
        if (target.current) {
            const tl = gsap.timeline(timelineOptions);

            // Add each animation step to the timeline
            animations.forEach((animation) => {
                tl.to(target.current, animation);
            });
        }
    }, [target, animations, timelineOptions]);
};

export default useGsapTimeline;
