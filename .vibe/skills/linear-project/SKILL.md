---
name: linear-project
description: Creates a Linear project for a Mira feature, with its PRD (Requirements, Goals) and milestones, from the "Feature" template. Use when someone wants to create a Linear project, start a new feature, write or put a PRD / spec into Linear, or split a feature into milestones.
---

# Create a Linear project (one feature)

At Mira, **one Linear project = one feature**. The project description holds the PRD. Milestones are the steps of the feature. Issues come next, with the `linear-issues` skill.

This skill uses the Linear MCP. If its tools (`save_project`, `save_milestone`…) are not available, stop and point the person to the "Connect the Linear MCP" section of `README.md`. Do not try another route (API, browser).

## Fixed values

- Team: `MIRA`
- Project template: `Feature`. It creates a milestone named `M1: rename me`.

## Steps

1. **Start from what the person gives you.** Two lines or a long text, either is fine. Pull out whatever already fills the sections below.
2. **Ask about what is missing, one question at a time**: requirements (the problem, for whom, what the user must be able to do), goals (what must be true at the end), then the split into milestones. A small feature can have a single milestone. Don't ask anything already answered by what you were given.
3. **Check for duplicates**: `list_projects` with `query` = the intended name. If a similar project exists, show it and ask whether to go on.
4. **Show the full draft**: project name, description, then every milestone with its description. Wait for an explicit "ok". No "ok", nothing gets created.
5. **Create**, in this order:
   1. `save_project` with `name`, `addTeams: ["MIRA"]`, `template: "Feature"` and `description` = the written description. The description **replaces** the template body, so it must contain every section.
   2. `save_milestone` with `project` = the new project and `id` = the `M1: rename me` milestone returned by the previous step: rename it (`name`) and fill its `description`.
   3. `save_milestone` (no `id`) for each following milestone, with `project`, `name` and `description`.
6. **Reply** with the project URL and the list of milestones created. Then offer `linear-issues` to split the first milestone.

## Project description skeleton

```
## Requirements
<The problem we solve, for whom, what the user must be able to do.>

## Goals
<What must be true when the project is done. Checkable.>
```

## Milestone description skeleton

```
## Context
<Where we are, why this step now.>

## What we want to do
<A few sentences.>

## In scope
- <what is included>

## Out of scope
- <what is not, and where it goes if it is planned elsewhere>

## Watch out for
- <risks, dependencies, decisions about the split>
```

## Style

- English, short sentences, the same word for the same thing from start to finish.
- Short, meaningful milestone names ("M1: ClickHouse connection", not "Phase 1").
- A section with no content keeps its heading and an empty bullet: don't delete it.
