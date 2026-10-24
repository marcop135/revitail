import { prerender } from 'react-dom/static';
import App from './App';

// Build-time only: scripts/prerender.mjs writes this markup into dist/index.html
// so crawlers and AI agents that never run JavaScript still read the page.
export async function render() {
  // Large Suspense boundaries are otherwise outlined and patched in by inline
  // scripts, which the CSP (script-src 'self') blocks.
  const { prelude } = await prerender(<App path='/' />, {
    progressiveChunkSize: Infinity,
  });
  return new Response(prelude).text();
}
