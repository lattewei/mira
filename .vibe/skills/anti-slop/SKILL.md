---
name: anti-slop
description: Writes text that doesn't read as AI-generated. Use for any writing task in this repo or for the team, in English or French - README sections, Linear projects and issues, PR descriptions, commit messages, docs, emails, messages, posts - and whenever someone says "write", "draft", "rewrite", "make it sound human" or "anti-slop". Bans em dashes and middle dots outright, plus a list of AI vocabulary and sentence patterns.
---

# Anti-slop writing

Apply these rules silently to everything you write. Never mention them in the output.

## Two characters that never appear

- **Em dash `—` (U+2014): zero.** Not one per 500 words, zero. Use a comma, a colon, parentheses, a new sentence, or ` - ` (spaced hyphen). Don't sneak in an en dash `–` (U+2013) instead.
- **Middle dot `·` (U+00B7): zero.** Not as a separator in titles, lists, footers or metadata lines. Use a comma, a line break, ` - `, or a table.

This covers everything: prose, headings, titles, Linear milestone names, commit messages, tables, code comments. Before you hand over or save any text, check it:

```bash
grep -nE "—|–|·" <file>
```

No match, or you're not done.

## Banned vocabulary

Replace with something concrete, or rewrite the sentence.

- **English**: delve, tapestry, testament, seamless, leverage, robust, cutting-edge, game-changer, unlock, elevate, empower, harness, landscape, realm, crucial, pivotal, vibrant, foster, streamline, comprehensive, meticulous, intricate, embark, holistic, synergy, paradigm, ever-evolving, boasts, "serves as", "stands as", "plays a key role", "a wide range of", "in today's fast-paced world", "it's worth noting", "it's important to note", "let's dive in", "at the end of the day", "whether you're X or Y", "not only... but also", "Moreover" / "Furthermore" / "Additionally" as sentence openers, "Certainly!", "Great question", "I hope this helps".
- **French**: « il est important de noter », « n'hésitez pas », « plongeons », « véritable », « incontournable », « au cœur de », « dans un monde où », « un atout majeur », « booster », « En somme », « Force est de constater », « De plus » / « Par ailleurs » / « En outre » en début de phrase à répétition.
- **Figurative "journey"**: banned. The tagline "Every journey deserves a way." is literal (a trip) and stays.

## Sentence patterns

- **No "It's not X, it's Y"** (negative parallelism). Say what it is.
- **No default threes.** Use three only when there are really three things.
- **Vary sentence length.** Never three sentences of the same length in a row.
- **No chains of short sentences.** "Short. Then another. Then another." reads like AI. Connect ideas with because, but, so, which, a semicolon or a colon, so the reader sees how they relate.
- **Pick a side.** Give a counterpoint one sentence at most, not equal weight.
- **Active voice.** "We dropped the route", not "the route was dropped".
- **No pep talk, no announcing.** No "As a developer, I...", no "Here's the thing:", no summary line at the end of every paragraph. Let some paragraphs just stop.
- **Contractions** in English: don't, can't, it's.

## Be specific

- Real names, numbers, dates and places: "three readings a day, 2013 to 2018", not "extensive historical data".
- Show what happens: "the route through Châtelet is dropped", not "a seamless experience".
- **Never invent** numbers, quotes, studies or anecdotes. If you don't know, say roughly, or leave it out. A hypothetical starts with "suppose" or "imagine".

## Formatting

- **Structured documents keep their structure.** Linear templates (TL;DR, Requirements, Acceptance criteria...), README sections and checklists need their headings and bullets. These rules apply to the sentences inside them.
- Elsewhere, bullets only when the content is a list. Uneven bullets are fine, and anything that fits in a sentence goes in a sentence.
- No bold scattered for emphasis, no emoji used as bullets, no hashtag piles.
- No markdown in plain-text places (commit message bodies, emails, chat messages that don't render it).

## Voice

When writing for a specific person, match them: how long they write, whether they swear, their kind of humor, what they would never say. Default when unknown: direct, a bit informal, trusts the reader, doesn't over-explain. For technical text (issues, commits, READMEs), clarity wins over personality.

## Before you hand it over

1. `grep -nE "—|–|·"` finds nothing.
2. No banned word or pattern.
3. No three same-length sentences in a row, no chain of short sentences.
4. Nothing invented.
5. Could any AI have written this for anyone? If yes, add the specific thing only this text can say.
