# Changelog

- **Format:** Based on [Keep a Changelog](https://keepachangelog.com).
- **Voice:** Use the imperative, like a commit message. Write add, fix, increase, force, not added, fixed, increased, forced.
- **Length:** Keep each bullet on one line, max 120 characters (link URLs do not count toward the cap, only the visible text does).
- **Links:** Add inline markdown links for related PRs, docs, and external references when they help the reader.

## [1.14.1] - 2026-11-05

### Changed

- Update dependencies within their semver ranges ([#302](https://github.com/marcop135/revitail/pull/302)).

## [1.14.0] - 2026-11-05

### Changed

- Check for npm and GitHub Actions updates monthly, and group npm minor and patch updates.
- Move site analytics to a cookieless Matomo Tag Manager container, adding time on page and errors ([#299](https://github.com/marcop135/revitail/pull/299), [#296](https://github.com/marcop135/revitail/issues/296)).
- List anonymous interaction events in the site's privacy page ([#299](https://github.com/marcop135/revitail/pull/299)).

### Fixed

- Restore ESLint 9, so dependencies install again after ESLint 10 conflicted with the React plugin ([#298](https://github.com/marcop135/revitail/pull/298), [#297](https://github.com/marcop135/revitail/issues/297)).

## [1.13.4] - 2026-11-05

### Changed

- Raise the ESLint floor to 9.39.5 ([#291](https://github.com/marcop135/revitail/pull/291)).
- Use the README hero design for the site's Open Graph image ([#291](https://github.com/marcop135/revitail/pull/291), [#290](https://github.com/marcop135/revitail/issues/290)).
- Show the GitHub link in the site header on small screens ([#291](https://github.com/marcop135/revitail/pull/291)).

## [1.13.3] - 2026-11-03

### Changed

- Update dependencies within their semver ranges.

## [1.13.2] - 2026-11-03

### Changed

- Use the theme-aware favicon in the site header and hide its navigation on small screens ([#286](https://github.com/marcop135/revitail/pull/286), [#285](https://github.com/marcop135/revitail/issues/285)).

### Fixed

- Keep the site's closing terminal readable without JavaScript ([#286](https://github.com/marcop135/revitail/pull/286)).
- Disable animation delays in the site's reduced-motion view ([#286](https://github.com/marcop135/revitail/pull/286)).
- Return HTTP 404 for unknown site URLs ([#286](https://github.com/marcop135/revitail/pull/286)).

## [1.13.1] - 2026-11-03

### Changed

- Soften README shadows and add a theme-aware sprout badge ([#282](https://github.com/marcop135/revitail/pull/282), [#281](https://github.com/marcop135/revitail/issues/281)).
- Add matching favicons that follow the system color scheme ([#282](https://github.com/marcop135/revitail/pull/282)).
- Upgrade Vitest and its coverage provider to 5.1.0 ([#280](https://github.com/marcop135/revitail/pull/280)).

## [1.13.0] - 2026-10-24

### Added

- Prerender the home page so crawlers and AI agents read it without JavaScript ([#265](https://github.com/marcop135/revitail/pull/265), [#276](https://github.com/marcop135/revitail/issues/276)).
- Expand the JSON-LD graph and add Content Signals to `robots.txt` ([#265](https://github.com/marcop135/revitail/pull/265)).
- Animate the hero, the quick start and the pipeline ([#265](https://github.com/marcop135/revitail/pull/265)).

### Changed

- Redesign the closing section ([#265](https://github.com/marcop135/revitail/pull/265)).

## [1.12.1] - 2026-10-24

### Removed

- Remove the `test:ui` script; its `@vitest/ui` dependency was never installed ([#262](https://github.com/marcop135/revitail/pull/262)).

### Fixed

- Fix the site's 404, error and privacy pages ([#262](https://github.com/marcop135/revitail/pull/262), [#275](https://github.com/marcop135/revitail/issues/275)).
- Keep the lockfile and pending `[Unreleased]` notes in step with scheduled patch releases ([#262](https://github.com/marcop135/revitail/pull/262), [#270](https://github.com/marcop135/revitail/issues/270)).

## [1.12.0] - 2026-10-24

### Added

- Add `docs/` ([#259](https://github.com/marcop135/revitail/pull/259)).
- Add an `@/` alias and `.env.example` ([#259](https://github.com/marcop135/revitail/pull/259)).
- Add a closing section to the site ([#259](https://github.com/marcop135/revitail/pull/259)).

### Changed

- Rename the project to Revitail ([#259](https://github.com/marcop135/revitail/pull/259)).
- Restructure the README ([#259](https://github.com/marcop135/revitail/pull/259)).
- Refresh the brand images and the site hero ([#259](https://github.com/marcop135/revitail/pull/259)).

## [1.11.5] - 2026-10-23

### Changed

- Link the README hero image to the site and trim the deployment and release sections ([#256](https://github.com/marcop135/revitail/pull/256)).

### Security

- Bump vitest 4.1.12 and fast-uri 3.1.9 ([#256](https://github.com/marcop135/revitail/pull/256)).

## [1.11.4] - 2026-10-19

### Changed

- Bump dev dependencies stylelint 17.16.0 and jsdom 30.1.3 ([#224](https://github.com/marcop135/revitail/pull/224), [#223](https://github.com/marcop135/revitail/pull/223)).

### Fixed

- Stop Stylelint from rejecting Tailwind `@apply` rules after the csstools syntax patch update ([#223](https://github.com/marcop135/revitail/pull/223), [#224](https://github.com/marcop135/revitail/pull/224)) ([#246](https://github.com/marcop135/revitail/pull/246), [#277](https://github.com/marcop135/revitail/issues/277)).

### Security

- Bump fast-uri 3.1.7, js-yaml 4.3.2, and undici 8.11.2 ([#170](https://github.com/marcop135/revitail/pull/170), [#184](https://github.com/marcop135/revitail/pull/184), [#199](https://github.com/marcop135/revitail/pull/199)).
- Bump brace-expansion 1.1.21 and postcss-selector-parser 7.1.6 ([#202](https://github.com/marcop135/revitail/pull/202), [#228](https://github.com/marcop135/revitail/pull/228)).

## [1.11.3] - 2026-10-17

- **Chore:** Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#245](https://github.com/marcop135/revitail/pull/245)).

## [1.11.2] - 2026-10-16

### Fixed

- Report self-hosted Matomo page views to this site's own property instead of the shared one ([#242](https://github.com/marcop135/revitail/pull/242), [#274](https://github.com/marcop135/revitail/issues/274)).

## [1.11.1] - 2026-10-16

### Changed

- Redirect every Netlify path to [vitereact.marcopontili.com](https://vitereact.marcopontili.com) with a forced 301 ([#230](https://github.com/marcop135/revitail/pull/230), [#274](https://github.com/marcop135/revitail/issues/274)).
- Bump dev dependencies prettier 3.9.10, playwright 1.64.0, and vite 8.3.4 ([#237](https://github.com/marcop135/revitail/pull/237), [#234](https://github.com/marcop135/revitail/pull/234), [#233](https://github.com/marcop135/revitail/pull/233)).

## [1.11.0] - 2026-10-16

### Added

- Add `deploy.yml`: build on `main` pushes, mirror `dist/` to Netsons and purge the site's Cloudflare cache ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Add `public/.htaccess` with HTTPS, SPA fallback, 404 page, security headers, CSP, and cache rules ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Add cookieless self-hosted Matomo as `public/matomo.js`, a privacy page, and allow it in both CSPs ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Add `llms.txt`, `.well-known/security.txt`, `404.html`, and a JSON-LD `@graph` with `SoftwareSourceCode` ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Add `scripts/stack-versions.mjs` to show dependency versions from `package-lock.json` at build time ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).

### Changed

- Move the canonical URL to [vitereact.marcopontili.com](https://vitereact.marcopontili.com) in head, sitemap, robots, docs ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Redesign the landing page: neutral base, Vite and React accents, light and dark, self-hosted fonts ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Add a quick start with per-line copy buttons, a stack list with real versions, and a pipeline flow ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Switch the README quick start from `npx degit` to `git clone` ([#231](https://github.com/marcop135/revitail/pull/231), [#274](https://github.com/marcop135/revitail/issues/274)).
- Bump actions/setup-node to 7.1.0 ([#232](https://github.com/marcop135/revitail/pull/232)).

## [1.10.3] - 2026-10-10

### Changed

- Replace `audit-optimize` with an `## Audit contract` in CLAUDE.md and `scripts/audit-screenshots.mjs` ([#227](https://github.com/marcop135/revitail/pull/227)).
- Bump dev dependencies vite 8.3.2, @vitejs/plugin-react 6.1.2, and globals 17.13.0 ([#225](https://github.com/marcop135/revitail/pull/225), [#221](https://github.com/marcop135/revitail/pull/221), [#220](https://github.com/marcop135/revitail/pull/220)).

### Fixed

- Title GitHub Releases from the CHANGELOG heading ([#218](https://github.com/marcop135/revitail/pull/218)).

## [1.10.2] - 2026-10-05

### Changed

- Standardize CHANGELOG history on Keep a Changelog Added/Changed/Removed/Fixed sections ([#212](https://github.com/marcop135/revitail/pull/212)).
- Replace the changelog preamble with Format, Voice, Length, and Links bullets ([#213](https://github.com/marcop135/revitail/pull/213)).
- Add inline markdown links for PRs, docs, and external references throughout the changelog ([#214](https://github.com/marcop135/revitail/pull/214), [#215](https://github.com/marcop135/revitail/pull/215)).

## [1.10.1] - 2026-10-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#211](https://github.com/marcop135/revitail/pull/211)).

## [1.10.0] - 2026-10-01

### Added

- Add [`.github/brand/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/brand/) with SVG sources and `npm run brand:images` / `brand:images:check` ([#200](https://github.com/marcop135/revitail/pull/200)).

### Changed

- Redraw the README, OG and social images in Catamaran, Cabin and Roboto Mono on the sky ramp ([#200](https://github.com/marcop135/revitail/pull/200)).
- Point the README hero at [`.github/brand/readme.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/brand/readme.png); add `og:image:type` to `index.html` ([#200](https://github.com/marcop135/revitail/pull/200)).
- Add `playwright` and `sharp` as dev dependencies for the image render ([#200](https://github.com/marcop135/revitail/pull/200)).

### Removed

- Delete `docs/og/`; the GitHub social preview is now [`.github/brand/social.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/brand/social.png) ([#200](https://github.com/marcop135/revitail/pull/200)).

## [1.9.3] - 2026-09-25

### Changed

- Add a Contributor Covenant 2.1 code of conduct, linked from the README contributing section ([#196](https://github.com/marcop135/revitail/pull/196)).
- Add CI, release, and license badges under the README title ([#196](https://github.com/marcop135/revitail/pull/196)).
- Add [`.gitattributes`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.gitattributes) to normalize line endings to LF and mark binary assets ([#196](https://github.com/marcop135/revitail/pull/196)).

## [1.9.2] - 2026-09-17

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#185](https://github.com/marcop135/revitail/pull/185)).

## [1.9.1] - 2026-09-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#171](https://github.com/marcop135/revitail/pull/171)).

## [1.9.0] - 2026-08-28

### Changed

- Migrate to Vite 8 on Rolldown with `@vitejs/plugin-react` 6 ([#168](https://github.com/marcop135/revitail/pull/168)) ([#273](https://github.com/marcop135/revitail/issues/273)).
- Move the build to `rolldownOptions`; Vite 8 deprecates `rollupOptions` and `output.manualChunks` ([#168](https://github.com/marcop135/revitail/pull/168), [#273](https://github.com/marcop135/revitail/issues/273)).
- Strip `console`/`debugger` through `output.minify.compress`; Rolldown ignores `esbuild.drop` ([#168](https://github.com/marcop135/revitail/pull/168), [#273](https://github.com/marcop135/revitail/issues/273)).
- Rebuild the `vendor` chunk via `output.codeSplitting.groups`, holding it at 189 kB ([#168](https://github.com/marcop135/revitail/pull/168), [#273](https://github.com/marcop135/revitail/issues/273)).
- Bump `jsdom` 30, `jest-dom` 7, `lint-staged` 17, `globals` 17, and `rollup-plugin-visualizer` 7 ([#168](https://github.com/marcop135/revitail/pull/168)).
- Bump `actions/checkout` 7.0.1, `actions/setup-node` 7.0.0, and `softprops/action-gh-release` 3.0.2 ([#168](https://github.com/marcop135/revitail/pull/168)).
- Auto-merge the biweekly `npm update` PR, so in-range bumps land unattended ([#167](https://github.com/marcop135/revitail/pull/167)) ([#270](https://github.com/marcop135/revitail/issues/270)).
- Record the Vite 8 stack, the Node 22.22.2 floor it sets, and the auto-merged in-range dependency PR ([#168](https://github.com/marcop135/revitail/pull/168), [#273](https://github.com/marcop135/revitail/issues/273)).

## [1.8.0] - 2026-08-21

### Added

- Replace the placeholder app shell with the starter's own pitch: hero, stack cards, and a scripts table ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).
- Add a copy button for the `npx degit` command, degrading to `execCommand` and then to select-to-copy ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).

### Changed

- Take the palette from [`public/og/hero.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/og/hero.png): `sky-600` to `sky-800` gradient, white cards, navy dark ramp ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).
- Cap the measure at 1000px; drop the in-page nav and both `min-h-lvh` placeholder panels ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).
- Rename the placeholder components to `Hero`, `FeatureGrid`, and `ScriptsTable`; drop `Navigation` ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).
- Move the repo, license, author, and scaffold-command strings into [`src/constants.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/constants.js) ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).
- Grow `App.test.jsx` to five role-based tests, covering the clipboard path and the selection fallback ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).
- Define `surface` and `text-link` as `@utility` rules; both treatments repeat across three components ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).
- Rewrite the description, `og:title`, manifest, and JSON-LD around what the starter actually ships ([#162](https://github.com/marcop135/revitail/pull/162), [#274](https://github.com/marcop135/revitail/issues/274)).

## [1.7.8] - 2026-08-18

### Changed

- Swap `stylelint-config-standard-scss` for `stylelint-config-standard`; the project has no Sass files ([#159](https://github.com/marcop135/revitail/pull/159)).
- Untrack [`dist/vite.svg`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/dist/vite.svg) and delete `.browserslistrc`, whose only consumer was Autoprefixer ([#159](https://github.com/marcop135/revitail/pull/159)).

### Removed

- Drop the unused `autoprefixer`, `postcss`, and `esbuild` dev deps; no PostCSS config, and Vite ships it ([#159](https://github.com/marcop135/revitail/pull/159)).
- Delete `docs/og/render.mjs` and `docs/og/favicons.mjs`; both load Playwright from an unrelated repo ([#159](https://github.com/marcop135/revitail/pull/159)).
- Remove the dead `test` block from [`vite.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vite.config.js); [`vitest.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vitest.config.js) takes precedence for Vitest runs ([#159](https://github.com/marcop135/revitail/pull/159)).

### Fixed

- Move `react` and `react-dom` to `dependencies`; as dev deps they left the `audit:prod` gate scanning nothing ([#159](https://github.com/marcop135/revitail/pull/159)).

## [1.7.7] - 2026-08-18

### Changed

- Bump `@types/react` 19.2.18 ([#147](https://github.com/marcop135/revitail/pull/147)), `postcss` 8.5.26 ([#154](https://github.com/marcop135/revitail/pull/154)), `eslint-plugin-react-refresh` 0.5.4 ([#155](https://github.com/marcop135/revitail/pull/155)).

### Fixed

- Run `npm ci` before `npm update` in the scheduled workflow; bare-checkout updates crashed npm's arborist ([#157](https://github.com/marcop135/revitail/pull/157), [#270](https://github.com/marcop135/revitail/issues/270)).

## [1.7.6] - 2026-08-18

### Changed

- Scope the `release:check` audit gate to production deps; keep full-tree `npm audit` as a non-blocking step ([#156](https://github.com/marcop135/revitail/pull/156), [#270](https://github.com/marcop135/revitail/issues/270)).
- Add an `audit:prod` script and drop the `brace-expansion`/`minimatch` vulnerable pinned overrides ([#156](https://github.com/marcop135/revitail/pull/156), [#270](https://github.com/marcop135/revitail/issues/270)).
- Open scheduled `npm update` PRs with `RELEASE_PAT` so `ci.yml` fires and the required check can report ([#156](https://github.com/marcop135/revitail/pull/156), [#270](https://github.com/marcop135/revitail/issues/270)).
- Complete [`AGENTS.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/AGENTS.md) and document audit and release rules in [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md), [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md), [`CLAUDE.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CLAUDE.md) ([#156](https://github.com/marcop135/revitail/pull/156), [#270](https://github.com/marcop135/revitail/issues/270)).

### Fixed

- Merge `develop` into `main` in the release sync step so a diverged `main` cannot wedge the release job ([#156](https://github.com/marcop135/revitail/pull/156), [#270](https://github.com/marcop135/revitail/issues/270)).

### Security

- Clear five high advisories via `npm audit fix`: `brace-expansion`, `fast-uri`, `js-yaml`, `nanoid`, `undici` ([#156](https://github.com/marcop135/revitail/pull/156)).

## [1.7.5] - 2026-08-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#140](https://github.com/marcop135/revitail/pull/140)).

## [1.7.4] - 2026-07-28

### Changed

- Bump `react` and `react-dom` to 19.2.8, `stylelint` to 17.14.1, and `vite` to 7.3.6 ([#133](https://github.com/marcop135/revitail/pull/133)).

### Security

- Bump `postcss` to 8.5.24, `esbuild` to 0.28.1, and transitive `fast-uri`/`js-yaml` via `npm audit fix`; add npm overrides for `brace-expansion`/`minimatch`; audit now clean at moderate ([#133](https://github.com/marcop135/revitail/pull/133)).

## [1.7.3] - 2026-07-17

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#123](https://github.com/marcop135/revitail/pull/123)).

## [1.7.2] - 2026-07-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#108](https://github.com/marcop135/revitail/pull/108)).

## [1.7.1] - 2026-06-23

### Changed

- Bump `tailwindcss` and `@tailwindcss/vite` to 4.3.1; `vitest` and `@vitest/coverage-v8` to 4.1.9 ([#89](https://github.com/marcop135/revitail/pull/89)).
- Bump `@types/react` to 19.2.17 and `eslint-plugin-react-refresh` to 0.5.3 ([#89](https://github.com/marcop135/revitail/pull/89)).

### Security

- Bump `vite` to 7.3.5, `undici` to 7.28.0, and `js-yaml` via `npm audit fix`; audit now clean at moderate ([#89](https://github.com/marcop135/revitail/pull/89)).

## [1.7.0] - 2026-06-04

### Added

- Add canonical/robots/OG meta + `SoftwareApplication` JSON-LD, [`public/robots.txt`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/robots.txt), and [`public/sitemap.xml`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/sitemap.xml) ([#70](https://github.com/marcop135/revitail/pull/70)).

### Changed

- Split deps into a long-lived `vendor` chunk and drop `console`/`debugger` in production builds ([#70](https://github.com/marcop135/revitail/pull/70)) ([#272](https://github.com/marcop135/revitail/issues/272)).
- Add skip-to-main link, named landmarks, `focus-visible` rings, AA hover contrast, reduced-motion reset ([#70](https://github.com/marcop135/revitail/pull/70)) ([#272](https://github.com/marcop135/revitail/issues/272)).

### Removed

- Drop unused `React` import in `App.jsx`; add [`CLAUDE.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CLAUDE.md); ignore throwaway [`.audit/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.audit/) artifacts ([#70](https://github.com/marcop135/revitail/pull/70)).

## [1.6.14] - 2026-06-03

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#69](https://github.com/marcop135/revitail/pull/69)).

## [1.6.13] - 2026-06-03

### Changed

- Add a Keep a Changelog header documenting Format, Voice, Length, Links, and Label conventions ([#68](https://github.com/marcop135/revitail/pull/68)).
- Rewrite generic maintenance entries (1.6.12, 1.6.11, 1.6.2, 1.4.5) with their shipped changes and PR links ([#68](https://github.com/marcop135/revitail/pull/68)).

## [1.6.12] - 2026-06-02

### Fixed

- Bump [`.nvmrc`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.nvmrc) to Node 22 so Netlify cloud builds match the toolchain; stale 18 broke prod builds ([#66](https://github.com/marcop135/revitail/pull/66)) ([#271](https://github.com/marcop135/revitail/issues/271)).

## [1.6.11] - 2026-06-02

### Removed

- Remove orphaned `tailwind.config.js`; dead under Tailwind v4 CSS-first (`@import`, no `@config`) ([#64](https://github.com/marcop135/revitail/pull/64)).

### Security

- Bump `brace-expansion` via `npm audit fix` to clear [GHSA-jxxr-4gwj-5jf2](https://github.com/advisories/[GHSA-jxxr-4gwj-5jf2](https://github.com/advisories/GHSA-jxxr-4gwj-5jf2)); audit now clean ([#64](https://github.com/marcop135/revitail/pull/64)).

## [1.6.10] - 2026-05-17

### Changed

- Automated maintenance patch via scheduled workflow; tag triggers the GitHub Release ([#54](https://github.com/marcop135/revitail/pull/54)).

## [1.6.9] - 2026-05-12

### Changed

- Realign [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) style and verbosity to the sibling `vite-vanilla-sass-lint` (intro paragraph + "Use this when…", Quick start with dev-server URL, **bold:** category prefixes in What's included, Configuration table, full Releases paragraph, separate Author and License sections) ([#44](https://github.com/marcop135/revitail/pull/44)).
- Add `test:ci`, `audit`, `audit:fix` scripts; switch `release:check` to `npm run test:ci` ([#44](https://github.com/marcop135/revitail/pull/44)).

### Fixed

- Silence the `no-console` warning in [`src/components/ErrorBoundary.jsx`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/components/ErrorBoundary.jsx) (dev-only logging is intentional) ([#44](https://github.com/marcop135/revitail/pull/44)).

## [1.6.8] - 2026-05-12

### Changed

- Tighten [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) (drop redundant prose, flatten What's included, condense Releases + Configuration) ([#43](https://github.com/marcop135/revitail/pull/43)).

## [1.6.7] - 2026-05-12

### Changed

- Rewrite [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) purpose-first; Quick start near top; scripts and config tables; drop emoji feature block and Run manually snippets.
- Trim [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md); drop manual Release Workflow steps covered by workflows.
- Add [`SECURITY.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/SECURITY.md), PR template, and bug/feature issue templates.
- [`vite.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vite.config.js) sets `build.sourcemap: 'hidden'` in production, `true` otherwise.
- Add `.prettierignore`, `format:check`, `clean`; wire `format:check` into `release:check`.
- JSDoc on `scripts/*.mjs` helpers; add [`IMPROVEMENTS.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/IMPROVEMENTS.md).

### Fixed

- Scope HTMLHint to `index.html` so coverage/dist HTML doesn't fail the lint.

## [1.6.6] - 2026-05-10

### Fixed

- Sync [`vitest.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vitest.config.js) with [`vite.config.js`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/vite.config.js) so `setupFiles` is loaded under both runners and `@testing-library/jest-dom` matchers are available.
- Add `@vitest/coverage-v8` so `npm run test:coverage` runs out of the box; gitignore the generated [`coverage/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/coverage/) dir.

## [1.6.5] - 2026-05-08

### Changed

- Redesign OG hero as three-icon row (Vite, React, Tailwind) over a sky-400 -> 700 gradient that aligns with the deployed `bg-sky-300` light theme; widen `soft` filter region so the Tailwind shadow no longer clips.
- Tighten changelog prose (~50% shorter per release); drop the `[vX.Y.Z]:` tag-link footer; remove the Release Info section from README.
- Stop the scheduled patch bumper from re-appending changelog footer links.

## [1.6.4] - 2026-05-08

### Added

- Add [`public/og/hero.png`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/og/hero.png) (1200x630) + og/twitter meta for share previews.
- Generate full favicon set (.ico, 96/180/192/512, webmanifest) from [`public/vite.svg`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/public/vite.svg); wire `link rel` + dual `theme-color`.
- Add `docs/og/hero-github.png` (1280x640) for GitHub Social preview.

### Changed

- New README hero (logo trio, OG/WhatsApp safe); source moves to `docs/og/`.
- Add `docs/og/{render,favicons}.mjs` (Playwright via sibling `draw` repo, no new deps).

## [1.6.3] - 2026-05-08

### Changed

- Rename [`readme.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/readme.md) to [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md); add hero image at top.

### Removed

- Drop stale `RELEASE.md` links from [`README.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/README.md) and [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md).
- Remove `RELEASE.md`; release flow lives in [`CHANGELOG.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CHANGELOG.md) + [`.github/workflows/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/.github/workflows/).

## [1.6.2] - 2026-05-08

### Changed

- Adopt PR-based releases from the vanilla repo: auto-merged patch bumps and tag-triggered releases ([#39](https://github.com/marcop135/revitail/pull/39)) ([#270](https://github.com/marcop135/revitail/issues/270)).

## [1.6.1] - 2026-05-02

### Added

- Scheduled patch workflow bumps semver, updates changelog, pushes `develop` + `v*` tag ([#28](https://github.com/marcop135/revitail/pull/28), [#270](https://github.com/marcop135/revitail/issues/270)).

### Changed

- `release:check` = lint + Vitest + build + `npm audit` (moderate) ([#28](https://github.com/marcop135/revitail/pull/28), [#270](https://github.com/marcop135/revitail/issues/270)).
- `release.yml` runs `release:check`, publishes GitHub Release on `v*` tag ([#28](https://github.com/marcop135/revitail/pull/28), [#270](https://github.com/marcop135/revitail/issues/270)).
- Run on push/PR for `main`, `master`, `develop` ([#28](https://github.com/marcop135/revitail/pull/28)).

## [1.6.0] - 2026-05-02

### Changed

- Add `ci.yml` (lint + Vitest + build + audit) on push/PR for `main`, `master`, `develop` ([#26](https://github.com/marcop135/revitail/pull/26)).
- Require `lint-and-test (22.x)` on `develop`; auto-merge waits for green CI ([#26](https://github.com/marcop135/revitail/pull/26), [#270](https://github.com/marcop135/revitail/issues/270)).

## [1.5.0] - 2026-05-02

### Added

- Dependabot auto-merge for patch/minor; majors stay manual ([#11](https://github.com/marcop135/revitail/pull/11), [#270](https://github.com/marcop135/revitail/issues/270)).

### Changed

- Biweekly `npm update` PR after lint + Vitest + build + audit ([#11](https://github.com/marcop135/revitail/pull/11), [#270](https://github.com/marcop135/revitail/issues/270)).
- Dependabot for npm + github-actions, targeting `develop` ([#11](https://github.com/marcop135/revitail/pull/11)).
- Adopt `develop` as integration branch; promote to `master` via tag ([#11](https://github.com/marcop135/revitail/pull/11)).

## [1.4.5] - 2026-04-28

### Changed

- Tighten `no-console`, `no-debugger`, `no-empty` ESLint rules from off to warn ([#10](https://github.com/marcop135/revitail/pull/10)) ([#278](https://github.com/marcop135/revitail/issues/278)).

### Security

- Add Netlify security headers (CSP, HSTS, X-Frame-Options, etc.); guard `ErrorBoundary` logging behind DEV ([#10](https://github.com/marcop135/revitail/pull/10)) ([#278](https://github.com/marcop135/revitail/issues/278)).

## [1.4.4] - 2026-04-17

### Changed

- Add [`netlify.toml`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/netlify.toml) pinning build/publish to stop asset drift.
- Split `App` out of [`src/main.jsx`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/main.jsx) into [`src/App.jsx`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/src/App.jsx).
- Fix Vitest wiring for consistent local + CI runs.

### Fixed

- Restore Netlify prod by deploying complete `dist` with matching hashed assets.

## [1.4.3] - 2026-04-17

### Changed

- Close open PRs; clear security queue.

### Removed

- Delete non-`master` branches (local + remote).

## [1.4.2] - 2026-04-17

### Changed

- Refresh [`package-lock.json`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/package-lock.json).
- Refresh deps (`npm install` + `update`).

## [1.4.0] - 2026-02-09

### Added

- Add Vitest, Husky + lint-staged pre-commit hooks, React error boundary.
- Split into components; lazy-load main content with `React.memo`.

### Changed

- Proper `<a>` tags + ARIA labels in nav.
- Add [`CONTRIBUTING.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CONTRIBUTING.md) and [`CHANGELOG.md`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/CHANGELOG.md).
- ESLint react + hooks plugins, Tailwind config, bundle analyzer.
- Add `@types/react{,-dom}` for editor TS support.
- Tighten ESLint (`eqeqeq`, camelcase, strict `no-undef`); ignore [`dist/`](https://github.com/marcop135/vite-react-tailwind-lint/blob/develop/dist/).

### Removed

- Remove TS ESLint parser/plugin (no TS files).

### Fixed

- README inconsistencies, nav semantic HTML, ESLint parser config.

## [1.3.0] - Previous Release

### Added

- Initial release with Vite + React + Tailwind scaffolding.
