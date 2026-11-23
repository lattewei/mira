<p align="center">
  <img src=".github/assets/banner.png" alt="Mira — Every journey deserves a way." width="100%">
</p>

<h1 align="center">Mira</h1>

<p align="center">
  <strong>Mobility Intelligence & Route Anticipation</strong><br>
  <em>Predictive mobility for a more accessible world.</em>
</p>

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/status-in%20development-e8893a?style=flat-square&labelColor=1f2a5a">
  <img alt="Mistral AI" src="https://img.shields.io/badge/AI-Mistral-e8893a?style=flat-square&logo=mistralai&logoColor=white&labelColor=1f2a5a">
  <img alt="ClickHouse" src="https://img.shields.io/badge/data-ClickHouse-e8893a?style=flat-square&logo=clickhouse&logoColor=white&labelColor=1f2a5a">
  <img alt="Langfuse" src="https://img.shields.io/badge/observability-Langfuse-e8893a?style=flat-square&labelColor=1f2a5a">
</p>

---

> Built for [**Ahead of Time — Mistral × ClickHouse**](https://luma.com/clickh-mistral-hack-paris) — December 5, 2026, Paris.

<p align="start">
  <a href="https://luma.com/clickh-mistral-hack-paris">
    <img src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/uploads/sk/106db1ea-f0c0-4691-a4b3-03d8c03f0c58.jpg" alt="Mistral × ClickHouse Hackathon" width="280">
  </a>
</p>

## About

For a wheelchair user, one broken elevator can make an entire journey impossible.

Mira is a predictive mobility companion designed to anticipate accessibility disruptions, recommend alternative routes, and proactively monitor journeys.

Starting in Paris, designed for a more accessible world.

## How it works

→ **Forecast** — Estimate accessibility disruptions before departure.  
→ **Recommend** — Find routes tailored to individual mobility needs.  
→ **Monitor** — Proactively notify travelers when conditions change.

> Predictions communicate risk, not guarantees. Missing accessibility data is treated as unverified.

## Powered by

| Technology | Purpose |
|---|---|
| [Timestral](https://github.com/mistralai/timestral) | Predictive intelligence |
| [Mistral Large 4](https://mistral.ai) | Reasoning & recommendations |
| [ClickHouse](https://clickhouse.com) | Data & analytics |
| [Langfuse](https://langfuse.com) | Observability & evaluation |

## Getting started

```bash
git clone https://github.com/mira-ahead/mira
cd mira
```

### Connect the Linear MCP

The repo is set up for [Mistral Vibe](https://docs.mistral.ai/vibe/code/cli/install-setup). Its config, the Linear MCP and the team skills live in `.vibe/`.

1. Run `vibe` at the repo root and trust the folder when asked. Vibe ignores `.vibe/` in an untrusted folder.
2. Sign in to Linear with `/mcp login linear`.
3. Check with `/mcp status`. `/skills` lists the repo skills.
