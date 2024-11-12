<!-- ![E2E Tests Status](https://github.com/web-dev-sam/webry-monorepo-template/actions/workflows/playwright.yml/badge.svg) -->

# Webry Monorepo

- 💃 Nuxt _(Main Web App)_
- 🔮 Astro _(Docs or other static site)_
- 💄 Tailwind _(The only way to do CSS)_
- 🚄 Biome _(Linting & Formatting)_
- ⛑️ Playwright _(E2E Tests)_
- ✨ VSCode Tasks _(Buttons > Typing)_
- 🧙‍♂️ VSCode Snippets _(For Shadcn, Vue, ...)_

## Getting Started

- Replace all `webry-monorepo-template` package names with your own
- `pnpm i`
- Check pnpm scripts and structure

## FAQ

### Why is there Prettier still?
Biome has limited support for .vue/.astro files because of the html. For these files Prettier will jump in to do the Formatting based on the same rules _(if theres a difference consider opening a PR fixing the configs or adding an issue)_.

## Contribution
It's only tested by me on WSL so I appreciate any contributions if you find a bug or have an idea...
