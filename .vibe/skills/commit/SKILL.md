---
name: commit
description: The only way to create a git commit in this repo. Use it every time you are about to commit, whether the user asked ("commit", "commit this", "save my work", "make a commit") or you decided to. In an interactive session it shows the exact commit in the chat and waits for the user's explicit approval before running git commit.
---

# Commit

Never run `git commit` without going through these steps.

## Interactive or automated?

- **Interactive**: a human is talking to you in this session and can answer. This is the default.
- **Automated**: a headless run with nobody to answer, such as `vibe --prompt`, a CI job (`CI` env var set), or a scheduled or triggered agent.

When unsure, treat the session as interactive.

## Steps

1. **Look at what would go in.** Run `git status` and `git diff --stat` (staged and unstaged). Pick only the files that belong to this change. Stage them by name, never with `git add -A` or `git add .`.
2. **Check for things that must never be committed**: `.env*` files (except `.env.example`), keys, tokens, credentials, large binaries, files from `/docs/`. If you find any, unstage them and tell the user.
3. **Write the message.**
   - Subject: `<type>: <what changes>`, in English, imperative mood, 72 characters max. Type is one of `feat`, `fix`, `refactor`, `docs`, `test`, `chore`.
   - Body (optional): why, in one to three short lines.
   - If the work belongs to a Linear issue, end with its identifier, e.g. `Refs MIRA-12`.
4. **Interactive: ask, then wait.** Post in the chat:

   ```
   Branch: <branch>
   Files:
     <path>  (+<added> -<removed>)
     ...
   Message:
     <subject>

     <body>

   Commit? (yes / edit message / change files)
   ```

   Commit only after an explicit yes ("yes", "ok", "go", "vas-y"...). Anything else is a no: apply the change the user asks for and show the commit again.
   - The approval covers this exact commit only. If the files or the message change after the yes, ask again.
   - An approval given earlier in the session for another commit does not count.
5. **Automated: commit directly**, with the same file check and message rules, and say in the run's output what was committed.
6. **Commit** with `git commit -m "<subject>" -m "<body>"`. Then show `git log --oneline -1`.

## Never

- `git push`: committing is not pushing. Push only when the user asks for it in so many words.
- `--no-verify`, `--amend` on a commit that is already pushed, or rewriting history (`rebase`, `reset --hard`) as part of a commit.
- Treating a broad instruction ("do the whole feature", "go ahead") as approval for a commit you have not shown.
