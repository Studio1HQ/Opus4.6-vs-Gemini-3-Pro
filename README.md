<div align="center">

<img src="https://raw.githubusercontent.com/Studio1HQ/Studio1HQ/main/assets/banners/Opus4.6-vs-Gemini-3-Pro.webp" alt="Opus 4.6 vs Gemini 3 Pro Landing Pages: Two FinTrack landing pages, one built by each model" width="100%" />

<br />
<br />

# Opus 4.6 vs Gemini 3 Pro Landing Pages

### Two FinTrack landing pages, one built by each model

A model comparison: Claude Opus 4.6 and Gemini 3 Pro each built a React and Vite landing page for FinTrack, a fictional financial management product for small businesses.

<br />

[![Built by Studio1](https://img.shields.io/badge/Built_by_Studio1-f97316?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjAgMTYwIiBmaWxsPSJub25lIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMzVDMCAxNi42ODA3IDE0LjA3NDQgMS42NDg0NCAzMiAwLjEyNjk1M1YxNDFINTEuMDUyM0M1Mi40MzA4IDEzNy4zNDQgNTQuNzQ0NiAxMzMuNjg5IDU3Ljk5MzggMTMwLjAzM0M2MS4xNDQ2IDEyNi41MDggNjQuNjg5MiAxMjMuNDQgNjguNjI3NyAxMjAuODI5QzcyLjU2NjIgMTE4LjM0OSA3Ni4zNTY5IDExNi43ODIgODAgMTE2LjEyOVY4Ni43NTQ0Qzc1LjQ3MDggODcuOTI5MiA3MS4zODQ2IDg5LjY5MTkgNjcuNzQxNSA5Mi4wNDE1QzY0IDk0LjUyMjUgNjAuNzUwOCA5Ny40NiA1Ny45OTM4IDEwMC44NTRDNTYuNTM0NSAxMDIuNzIgNTUuMjU0NSAxMDQuNjU5IDU0LjE1MzkgMTA2LjY3MVYwSDEyNUMxNDQuMzMgMCAxNjAgMTUuNjY5OSAxNjAgMzVWMTI1QzE2MCAxNDQuMzMgMTQ0LjMzIDE2MCAxMjUgMTYwSDEyNFYxOEgxMDQuOTQ4QzEwMy41NjkgMjEuNjgxNiAxMDEuMjU1IDI1LjM2MjggOTguMDA2MiAyOS4wNDQ0Qzk0Ljg1NTQgMzIuNTk0MiA5MS4zMTA4IDM1LjY4NDEgODcuMzcyMyAzOC4zMTRDODMuNDMzOCA0MC44MTIgNzkuNjQzMSA0Mi4zODk2IDc2IDQzLjA0NzRWNzIuNjMwNEM4MC41MjkyIDcxLjQ0NzMgODQuNjE1NCA2OS42NzI0IDg4LjI1ODUgNjcuMzA1N0M5MiA2NC44MDc2IDk1LjI0OTIgNjEuODQ5MSA5OC4wMDYyIDU4LjQzMDdDOTkuNDY1NSA1Ni41NTEzIDEwMC43NDUgNTQuNTk4NiAxMDEuODQ2IDUyLjU3MjNWMTYwSDM1QzE1LjY3IDE2MCAwIDE0NC4zMyAwIDEyNVYzNVoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4K)](https://studio1hq.com)

[More examples](https://github.com/Studio1HQ) &nbsp;·&nbsp; [studio1hq.com](https://studio1hq.com)

</div>

<br />

## Overview

Two models, one brief: build a landing page for FinTrack, a financial management product for small and mid-sized businesses. Claude Opus 4.6 and Gemini 3 Pro each produced a separate React and Vite project, kept side by side in one folder so you can run both and compare the output.

The repo stores the results only. It does not rank them.

## Features

- **Same page structure**: both pages have a header, hero, features, pricing, testimonials and footer.
- **Opus 4.6 version**: React 19 with TypeScript and one CSS file per component.
- **Gemini 3 Pro version**: React 19 with plain JSX, [Lucide](https://lucide.dev) icons and a shared stylesheet; a built `dist/` folder is included.
- **Independent projects**: each folder has its own `package.json`, so they install and run separately.

## Tech stack

| Layer | Tool |
| --- | --- |
| Framework | [React](https://react.dev) 19 |
| Build tool | [Vite](https://vite.dev) 7 |
| Language | TypeScript (Opus 4.6), JavaScript (Gemini 3 Pro) |
| Icons | [Lucide](https://lucide.dev) (Gemini 3 Pro version) |

## Getting started

### Prerequisites

- Node.js 20 or later and npm

### Installation

```bash
git clone https://github.com/Studio1HQ/Opus4.6-vs-Gemini-3-Pro.git
cd Opus4.6-vs-Gemini-3-Pro/"Opus 4.6 vs Gemini 3 Pro"
```

Then pick a version:

```bash
cd Opus4.6_Landing_page      # or: cd Gemini3Pro_Landing_Page
npm install
```

### Environment variables

None are used.

### Run

```bash
npm run dev
```

Open the URL Vite prints. Run each version in its own terminal if you want to compare them side by side. Build with `npm run build`.

## How it works

```text
Opus 4.6 vs Gemini 3 Pro/
├── Opus4.6_Landing_page/        # Navbar, Hero, Features, Pricing, Testimonials, Footer (.tsx + .css)
└── Gemini3Pro_Landing_Page/     # Header, Hero, Features, Pricing, Testimonials, Footer (.jsx)
```

`App` in each project renders the same six sections in the same order. The page title in the Opus version is "FinTrack: Financial Management for SMBs".

## Resources

- [Vite](https://vite.dev): build tool used by both projects.
- [React](https://react.dev): UI library used by both projects.

<br />

---

<div align="center">

<a href="https://studio1hq.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-dark.svg" />
    <img src="https://raw.githubusercontent.com/Studio1HQ/website/main/brand/studio1-logo-on-light.svg" alt="Studio1" width="160" />
  </picture>
</a>

Built by **[Studio1](https://studio1hq.com)**, the technical content and DevRel partner for devtool teams.<br />
Browse more open-source examples at [github.com/Studio1HQ](https://github.com/Studio1HQ).

[![Website](https://img.shields.io/badge/studio1hq.com-0b0807?style=for-the-badge&logo=googlechrome&logoColor=white)](https://studio1hq.com)
[![Book a call](https://img.shields.io/badge/Book_a_strategy_call-f97316?style=for-the-badge&logo=googlecalendar&logoColor=white)](https://cal.com/studio1/collab)
[![X](https://img.shields.io/badge/%40Studio1HQ-141414?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Studio1HQ)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/company/studio1hq/)

<sub><a href="https://studio1hq.com">studio1hq.com</a> · Technical content, docs, video and DevRel for devtools</sub>

</div>
