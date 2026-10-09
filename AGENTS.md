# Project instructions

## Purpose and scope

Recreate Fabio's fictional Gli Occhi del Cuore fansite from Boris, starting with
the homepage. Preserve the reference composition, Italian copy, extravagant blue
and pink graphics, and early-2000s aesthetic. This is a small hobby project.

## Language

- Use English for identifiers, filenames, code comments, and commit messages.
- Use Italian for visitor-facing content, README, and decision records.
- Keep comments sparse: explain non-obvious reasons rather than restating code.
- Keep commit messages very short, in English, with a Boris gag when it fits.
  Prefer a single subject line; avoid explanatory commit bodies.

## Voice

- Boris references, running jokes, and short verbatim quotes are central to the
  project, including the README and visitor-facing copy. Write for existing fans.
- Keep the original homepage's visible labels faithful to the screenshot. Use
  original jokes and references in new content, metadata, and supporting pages.
- Verify exact quotes before using them; do not invent dialogue, episode numbers,
  or character attributions. If unsure, write an original joke instead.
- Vary references by context rather than repeating one catchphrase everywhere.
- Keep technical instructions clear even when their introductions are playful.

## Architecture

- Use SvelteKit and Svelte with TypeScript and a static adapter.
- Prerender every public route. Do not add a server runtime or an SPA fallback.
- Keep pages functional without client JavaScript; add it only for useful interactions.
- Reuse the shared site frame and navigation instead of duplicating markup.
- Keep assets local. Do not introduce external fonts, analytics, or remote runtime dependencies.
- Guestbook, chat, forum, contact, and signup must not collect submissions or personal data.
  Do not introduce accounts, moderation, databases, or live community services.
- Target Netlify static hosting. Do not publish or change DNS as part of local implementation.

## Decisions and documentation

- Keep README.md short, playful, in Italian, and aimed at Boris fans.
- Keep setup, architecture, and contributor instructions in docs/development.md.
- Keep working notes and provisional tools under .local/, excluded from Git.
- Read .local/notes/decisions.md when available and record agreed choices there.
- Distinguish user-approved decisions from reversible implementation defaults.
- Track provisional graphics and reference provenance in .local/notes/assets.md.
- These local files are not synchronized by Git; do not require them for builds.
- Do not publish working notes or provisional tools through commits or static assets.
- Keep these instructions up to date when the user changes project constraints.

## Verification

- Use the Node version in .nvmrc and install dependencies with npm ci.
- Run npm run check, npm run build, and npm run verify after code changes.
- Inspect desktop and mobile layouts after visual changes; verify links and overflow.
- Do not add tests that only repeat markup. Verify meaningful behavior and static output.
- Report remaining visual differences honestly; source screenshot crops are provisional.
