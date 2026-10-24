import React, { useRef } from 'react';
import { REPO_URL } from '../constants';
import { useOnScreen } from '../hooks/useOnScreen';

// Mirrors the release:check script in package.json.
const GATES = [
  ['lint', 'ESLint, Stylelint, HTMLHint'],
  ['format:check', 'Prettier'],
  ['test:ci', 'Vitest'],
  ['build', 'Vite'],
  ['audit:prod', 'npm audit'],
];

function Closing() {
  const termRef = useRef(null);
  const run = useOnScreen(termRef, 0.5);

  return (
    <section
      id='get-started'
      aria-labelledby='closing-heading'
      className='border-line border-t py-16 lg:py-24'
    >
      {/* Gradient hairline border: the outer layer paints it, the inner card
          sits one pixel in. */}
      <div className='reveal rounded-2xl bg-[linear-gradient(135deg,rgb(97_218_251/0.45),rgb(189_52_254/0.35)_55%,rgb(255_197_23/0.35))] p-px shadow-[0_1.5rem_3rem_-2rem_rgb(0_0_0/0.35)]'>
        <div className='bg-surface text-ink relative isolate grid grid-cols-[minmax(0,1fr)] gap-10 overflow-hidden rounded-[calc(1rem-1px)] p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:p-14'>
          <div
            aria-hidden='true'
            className='absolute -top-1/3 -left-1/4 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(189_52_254/0.12),transparent)] blur-2xl'
          />
          <div
            aria-hidden='true'
            className='absolute -right-1/4 -bottom-1/2 -z-10 size-[36rem] rounded-full bg-[radial-gradient(closest-side,rgb(88_196_220/0.08),transparent)] blur-2xl'
          />
          <div
            aria-hidden='true'
            className='absolute inset-0 -z-10 bg-[linear-gradient(to_right,color-mix(in_oklab,var(--line)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklab,var(--line)_60%,transparent)_1px,transparent_1px)] mask-[radial-gradient(ellipse_at_center,black,transparent_75%)] bg-size-[2.5rem_2.5rem]'
          />

          <div>
            <h2
              id='closing-heading'
              className='font-display text-4xl leading-none font-bold tracking-[-0.02em] text-balance sm:text-5xl lg:text-6xl'
            >
              Start your next app on{' '}
              <span className='bg-[linear-gradient(90deg,var(--brand-from),var(--vite))] bg-clip-text text-transparent'>
                Revitail
              </span>
            </h2>
            <p className='text-muted mt-5 max-w-xl text-lg text-pretty'>
              Free and open source under MIT. Clone it, run npm install, and the
              dev server, linters, tests and CI already work. Delete the demo
              page and build yours.
            </p>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a
                href={REPO_URL}
                className='focus-ring bg-cta text-on-cta group inline-flex min-h-14 items-center gap-2 rounded-lg px-7 text-lg font-semibold transition hover:-translate-y-0.5 hover:brightness-110'
              >
                Get it on GitHub
                <span
                  aria-hidden='true'
                  className='transition-transform group-hover:translate-x-1'
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <figure
            ref={termRef}
            data-run={run || undefined}
            className='cl-term border-line bg-canvas text-ink rounded-xl border font-mono text-[0.8125rem] shadow-[0_1.5rem_3rem_-1.75rem_rgb(0_0_0/0.3)]'
          >
            <div
              aria-hidden='true'
              className='border-line flex items-center gap-1.5 border-b px-4 py-3'
            >
              <span className='size-2.5 rounded-full bg-[#ff5f57]' />
              <span className='bg-bolt size-2.5 rounded-full' />
              <span className='size-2.5 rounded-full bg-[#58c4dc]' />
            </div>
            <figcaption className='sr-only'>
              npm run release:check passing every gate: lint, format check,
              tests, build and production audit.
            </figcaption>
            <ol aria-hidden='true' className='space-y-2 p-5'>
              <li className='cl-line'>
                <span className='text-react'>$</span> npm run release:check
              </li>
              {GATES.map(([gate, tools]) => (
                <li key={gate} className='cl-line flex gap-3'>
                  <span className='text-pass'>✓</span>
                  <span className='w-28 shrink-0'>{gate}</span>
                  <span className='text-muted truncate'>{tools}</span>
                </li>
              ))}
              <li className='cl-line text-pass pt-2 font-bold'>
                All gates passed.
              </li>
            </ol>
          </figure>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Closing);
