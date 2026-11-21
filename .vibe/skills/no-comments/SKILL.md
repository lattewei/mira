---
name: no-comments
description: Strips useless code comments (the kind AI agents love to write) from the current diff or the given files, fixes the code that needed explaining, and offers to encode real constraints instead of commenting them. Run it manually with /no-comments before opening a PR.
disable-model-invocation: true
---

# No comments

Code says what. Git says when and why it changed. A comment survives only if it tells the reader something neither can, about something we cannot change.

If you wrote this code in the current session, be harsher: your own comments are the main target.

## Scope

Use the files or diff the caller names. Otherwise use the current diff against `main` (merge-base), working tree and untracked files included. If there is no `main` yet, use the uncommitted changes.

Only judge comments added or changed in that scope. Never edit anything outside it.

## Steps

1. **List every comment in scope**, including docstrings, commented-out code, and lint or type suppressions (`eslint-disable`, `@ts-ignore`, `@ts-expect-error`, `# noqa`, `# type: ignore`).
2. **Classify each one.**

   **KILL** (the default):
   - Restates the code: `// increment the counter`, `// return the user`, a docstring that repeats the signature.
   - Narrates the change or the session: `// Added X`, `// Now uses Y`, `// Fixed the bug`, `// Updated as requested`, `// New implementation`.
   - Talks to the reviewer or the user: `// Note: ...`, `// As discussed`, `// You may want to...`.
   - Commented-out code, banners and section dividers, TODOs with no Linear issue (MIRA-xx), hedges, emojis, `IMPORTANT:` decoration.
   - Explains surprising code that **we** own. The comment goes, and the surprise goes with it: rename, extract, simplify or use the real API until the code reads on its own. If that fix is out of scope, delete the comment anyway and report the surprise as open.
   - A suppression that hides a real type, lint, correctness or safety problem. Fix the cause. If you can't do that in scope, report it open. Never keep the suppression silently.

   **KEEP** (needs proof):
   - The *why* of something we cannot change: an external API quirk, a browser or library bug, a legal or spec requirement, a measured performance reason. It should carry a link or a precise source.
   - License headers and directives a tool actually reads.
   - Docs on an exported API that add what the signature can't: units, invariants, errors thrown.

   When in doubt, KILL. To trust an `IMPORTANT` or `do not remove`, trace the symbol it protects first. If you still can't prove the keep, kill it.
3. **Apply.** Delete the KILLs. Make the code fixes from step 2, choosing the smallest fix that removes the root cause. Never add a guard just to justify a deleted comment. Don't change behavior.
4. **Constraint comments** (`do not remove`, `do not change this wording`, `talk to X before changing`): offer the cheapest in-scope way to encode the constraint, as a type, a runtime assert, a test, or a lint rule. Wait for approval. If approved, encode it, then delete the comment. If not, delete the comment and report the constraint as unenforced.
5. **Verify.** Run whatever the repo has among typecheck, lint and tests, on the touched files. If anything breaks, fix it or revert that file's changes and report it.
6. **Report**, short:
   - comments deleted (count) and comments kept, each with its reason in one line;
   - code fixes made instead of comments;
   - encoding offers and the ones applied;
   - open items: surprises out of scope, unenforced constraints, suppressions not fixed.
