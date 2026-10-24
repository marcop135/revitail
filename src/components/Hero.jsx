import React from 'react';
import Quickstart from './Quickstart';
import StackIllustration from './StackIllustration';

function Hero() {
  return (
    <section
      aria-labelledby='hero-heading'
      className='grid grid-cols-[minmax(0,1fr)] items-center gap-x-12 gap-y-10 pt-6 pb-16 sm:pt-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:pb-24'
    >
      <div className='flex min-w-0 flex-col items-start'>
        <h1
          id='hero-heading'
          className='font-display text-ink/85 animate-rise text-6xl leading-[0.95] font-bold tracking-[-0.03em] text-balance sm:text-7xl lg:text-8xl'
        >
          <span className='from-brand-from to-brand-to -ml-[0.06em] inline-block bg-linear-to-r bg-clip-text text-transparent'>
            Revitail
          </span>
          <span className='sr-only'>: </span>
          <span className='text-muted mt-4 block font-sans text-2xl leading-snug font-normal tracking-normal sm:text-3xl'>
            Start fresh. Revitalize your next React project.
          </span>
        </h1>
        <p className='text-muted animate-rise mt-6 text-lg text-pretty [animation-delay:120ms]'>
          React, Vite and Tailwind CSS, with linters, tests and CI already wired
          up and passing.
        </p>
      </div>
      <div className='animate-rise w-full [animation-delay:240ms] lg:col-span-2 lg:row-start-2'>
        <Quickstart />
      </div>
      <div className='animate-rise [animation-delay:180ms] lg:col-start-2 lg:row-start-1'>
        <StackIllustration />
      </div>
    </section>
  );
}

export default React.memo(Hero);
