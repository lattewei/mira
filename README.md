<p align="center">
  <img alt="mira. Every journey deserves a way." src=".github/assets/banner.jpg" width="100%">
</p>

<h1 align="center">Mira</h1>

<p align="center">
  <strong>Every journey deserves a way.</strong><br />
  The Mira monorepo: the front, the back, and how we work.
</p>

<p align="center">
  <img alt="Status: under construction" src="https://img.shields.io/badge/status-under%20construction-e8893a?labelColor=1f2a5a">
  <img alt="Data on ClickHouse" src="https://img.shields.io/badge/data-ClickHouse-e8893a?logo=clickhouse&logoColor=white&labelColor=1f2a5a">
</p>

<p align="center">
  <a href="#-get-started"><strong>Get started »</strong></a>
</p>

<br />

## 🧭 Why

For a wheelchair user, one broken elevator can make a trip impossible.
And you usually find out at the station, when it's too late to change plans.

Wheelmap and Île-de-France Mobilités tell you whether a route is accessible
**today**. Mira estimates whether it will **still be tomorrow morning**, and
suggests another route when the risk is high.

| 1. Filter | 2. Forecast | 3. Recommend |
|---|---|---|
| Routes through a place OpenStreetMap marks as not accessible are dropped | Elevator outage risk for each remaining route, with a low / median / high range | Options ranked and explained in plain language. You decide. |

> Mira shows a risk level, never a guarantee. A place with no data in
> OpenStreetMap shows as "not verified", never "accessible".

## ⚡ Get started

```bash
git clone https://github.com/mira-ahead/mira && cd mira
```

### Connect the Linear MCP

The repo is set up for [Mistral Vibe](https://docs.mistral.ai/vibe/code/cli/install-setup). Its config, the Linear MCP and the team skills live in `.vibe/`.

1. Run `vibe` at the repo root and trust the folder when asked. Vibe ignores `.vibe/` in an untrusted folder.
2. Sign in to Linear with `/mcp login linear`.
3. Check with `/mcp status`. `/skills` lists the repo skills.
