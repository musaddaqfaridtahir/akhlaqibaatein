# Agent Guidelines for AkhlaqiBaatein.com

> **IMPORTANT:** For complete project context, architectural details, and strict rules, read [ANTIGRAVITY.md](./ANTIGRAVITY.md).

## Critical Guidelines
1. **Strict 3-Language Isolation:**
   - In `'ur'` mode: Entire layout is `dir="rtl"`, font is Urdu Nastaleeq, all visible text must be 100% pure Urdu Nastaleeq. Never leak English or Roman words into `'ur'` mode.
   - In `'ro'` mode: Entire layout is `dir="ltr"`, all text is Roman Urdu.
   - In `'en'` mode: Entire layout is `dir="ltr"`, all text is English.
   - UI dictionary is in `src/data/uiTranslations.ts`.
2. **Quote Schema:**
   - Always adhere to `QuoteItem` and `LocalizedText` in `src/data/types.ts`.
   - Any new batches added to `src/data/quotes.ts` must be merged into `batchMappedQuotes`.
3. **Build Integrity:**
   - Every modification must be validated by running `npm run build` with zero TypeScript or ESLint errors.
   - Verify that SSG pages are generated without runtime hydration mismatches.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
