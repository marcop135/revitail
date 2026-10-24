import React, { useRef } from 'react';
import { useOnScreen } from '../hooks/useOnScreen';

// Mirrors vite.config.js, .lintstagedrc.js, ci.yml and release.yml. Change the
// copy here when one of those changes.
const STEPS = [
  {
    when: 'While you type',
    where: 'npm run dev',
    title: 'The dev server lints',
    body: 'vite-plugin-eslint2 and vite-plugin-stylelint report problems in the terminal as you save.',
    checks: ['ESLint', 'Stylelint'],
    tone: 'text-vite',
  },
  {
    when: 'On commit',
    where: 'Husky + lint-staged',
    title: 'Staged files get fixed',
    body: 'The pre-commit hook runs the fixers on staged files only, so a commit stays fast.',
    checks: ['eslint --fix', 'stylelint --fix', 'prettier --write'],
    tone: 'text-react',
  },
  {
    when: 'On pull request',
    where: 'GitHub Actions, Node 22',
    title: 'CI runs every gate',
    body: 'npm run release:check is the one command CI runs, and the same one you can run locally.',
    checks: ['lint', 'format:check', 'test:ci', 'build', 'audit:prod'],
    tone: 'text-vite',
  },
  {
    when: 'On tag',
    where: 'release.yml',
    title: 'The release writes itself',
    body: 'A vX.Y.Z tag re-runs the gates and publishes a GitHub Release with notes taken from CHANGELOG.md.',
    checks: ['release:check', 'GitHub Release'],
    tone: 'text-react',
  },
];

function Pipeline() {
  const stageRef = useRef(null);
  const run = useOnScreen(stageRef);

  return (
    // Full-bleed band: the shadow paints past the container and the clip-path
    // keeps it from adding horizontal scroll.
    <section
      id='pipeline'
      aria-labelledby='pipeline-heading'
      className='bg-surface text-ink py-16 [box-shadow:0_0_0_100vmax_var(--surface)] [clip-path:inset(0_-100vmax)] lg:py-24'
    >
      <div className='mb-12 max-w-2xl'>
        <p className='text-vite mb-3 font-mono text-xs font-bold tracking-wider uppercase'>
          Pipeline
        </p>
        <h2
          id='pipeline-heading'
          className='font-display text-4xl leading-none font-bold tracking-[-0.02em] sm:text-5xl'
        >
          From save to release
        </h2>
        <p className='text-muted mt-4'>
          Every check runs as early as it can, and CI runs them all again before
          a merge.
        </p>
      </div>

      <ol
        ref={stageRef}
        data-run={run || undefined}
        className='pl-stage grid gap-x-4 gap-y-8 md:grid-cols-2 xl:grid-cols-4'
        role='list'
      >
        {STEPS.map(({ when, where, title, body, checks, tone }, index) => (
          <li key={when} className='pl-step reveal flex flex-col'>
            <div className='mb-4 flex items-center gap-3' aria-hidden='true'>
              <span className='pl-badge bg-bolt text-on-bolt grid size-9 shrink-0 place-items-center rounded-full font-mono text-sm font-bold'>
                {index + 1}
              </span>
              <span className='relative h-4 flex-1 overflow-hidden'>
                <span
                  className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 ${index < STEPS.length - 1 ? 'bg-[linear-gradient(90deg,var(--bolt),#bd34fe_50%,#58c4dc)] opacity-70' : 'bg-line'}`}
                />
                <span className='pl-comet absolute inset-0'>
                  <span className='absolute top-1/2 right-0 h-1 w-14 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,transparent,var(--bolt))] opacity-80 shadow-[0_0_0.375rem_rgb(255_197_23/0.5)]' />
                </span>
              </span>
            </div>
            <article className='pl-card border-line bg-canvas flex flex-1 flex-col rounded-md border p-5'>
              <p className={`font-mono text-xs font-bold uppercase ${tone}`}>
                {when}
              </p>
              <h3 className='mt-1 text-xl font-semibold'>{title}</h3>
              <p className='text-muted mt-1 font-mono text-xs'>{where}</p>
              <p className='text-muted mt-3 mb-5 text-sm'>{body}</p>
              <ul className='mt-auto flex flex-wrap gap-1.5' role='list'>
                {checks.map((check) => (
                  <li
                    key={check}
                    className='pl-chip border-line rounded border px-2 py-0.5 font-mono text-xs'
                  >
                    {check}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default React.memo(Pipeline);
