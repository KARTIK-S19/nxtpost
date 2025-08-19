"use client"
import React from 'react'
import Spline from '@splinetool/react-spline';
import { useEffect, useState, useRef } from 'react';

const SplineComponent = () => {

  const [displayedHeading, setDisplayedHeading] = useState('');
  const [displayedParagraph, setDisplayedParagraph] = useState('');
  const [headingComplete, setHeadingComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const headingText = "Welcome to NxtPost — Your AI Partner for Effortless Business & Personal Growth";
  const paragraphText = "Create engaging content in seconds, amplify your brand's reach, and let innovation work for you — all powered by NxtPost's intelligent automation";
  
  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const currentRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);
  
  useEffect(() => {
    if (!isVisible) return;
    
    let headingIndex = 0;
    
    const typeHeading = () => {
      if (headingIndex < headingText.length) {
        setDisplayedHeading(headingText.slice(0, headingIndex + 1));
        headingIndex++;
        setTimeout(typeHeading, 50); // Adjust speed here (lower = faster)
      } else {
        setHeadingComplete(true);
      }
    };
    
    typeHeading();
  }, [isVisible]);
  
  useEffect(() => {
    if (!headingComplete || !isVisible) return;
    
    let paragraphIndex = 0;
    
    const typeParagraph = () => {
      if (paragraphIndex < paragraphText.length) {
        setDisplayedParagraph(paragraphText.slice(0, paragraphIndex + 1));
        paragraphIndex++;
        setTimeout(typeParagraph, 30); // Adjust speed here (lower = faster)
      }
    };
    
    // Small delay before starting paragraph
    setTimeout(typeParagraph, 300);
  }, [headingComplete, isVisible]);

  return (
    <section ref={sectionRef} className='h-screen'>
    <div className='absolute left-10 h-150 w-160 mt-8'>
        <Spline scene="https://prod.spline.design/TAG6XQit4ldA1lOf/scene.splinecode" />
    </div>
    <div className='absolute right-10 w-200 h-screen bg-slate-900 z-99 flex items-center justify-center'>
      <section className='m-8 '>
        <h2 className='text-white text-3xl font-bold mb-4'>
            {displayedHeading}
            <span className={`inline-block w-0.5 h-8 bg-white ml-1 ${headingComplete ? 'animate-pulse' : 'animate-pulse'}`}></span>
          </h2>
          <p className='text-gray-300'>
            {displayedParagraph}
            {headingComplete && displayedParagraph.length < paragraphText.length && (
              <span className='inline-block w-0.5 h-5 bg-gray-300 ml-1 animate-pulse'></span>
            )}
          </p>
      </section>
    </div>

    </section>
  )
}

export default SplineComponent