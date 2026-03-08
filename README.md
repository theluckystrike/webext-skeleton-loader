<div align="center">

# webext-skeleton-loader

Skeleton loading placeholders for Chrome extensions. Shimmer effects, text/image/card skeletons, custom shapes, and auto-replace for MV3.

[![npm version](https://img.shields.io/npm/v/webext-skeleton-loader)](https://www.npmjs.com/package/webext-skeleton-loader)
[![npm downloads](https://img.shields.io/npm/dm/webext-skeleton-loader)](https://www.npmjs.com/package/webext-skeleton-loader)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/webext-skeleton-loader)

[Installation](#installation) · [Quick Start](#quick-start) · [API](#api) · [License](#license)

</div>

---

## Features

- **Pre-built shapes** -- text lines, circles, rectangles, cards, avatars
- **Shimmer animation** -- smooth loading indicator effect
- **Custom shapes** -- define any skeleton shape with CSS
- **Auto-replace** -- automatically swap skeletons for real content
- **Composable** -- combine multiple skeleton types in layouts
- **Lightweight** -- pure CSS animations, no runtime dependencies

## Installation

```bash
npm install webext-skeleton-loader
```

<details>
<summary>Other package managers</summary>

```bash
pnpm add webext-skeleton-loader
# or
yarn add webext-skeleton-loader
```

</details>

## Quick Start

```typescript
import { Skeleton } from "webext-skeleton-loader";

// Create a text skeleton
const text = Skeleton.text({ lines: 3, width: "80%" });

// Create a card skeleton
const card = Skeleton.card({ width: 300, height: 200 });

// Auto-replace when content is ready
Skeleton.replace(element, realContent);
```

## API

| Method | Description |
|--------|-------------|
| `text(options)` | Create a text line skeleton |
| `circle(options)` | Create a circular skeleton |
| `rect(options)` | Create a rectangular skeleton |
| `card(options)` | Create a card skeleton |
| `avatar(options)` | Create an avatar skeleton |
| `custom(css)` | Create a custom-shaped skeleton |
| `replace(element, content)` | Replace skeleton with real content |



## Part of @zovo/webext

This package is part of the [@zovo/webext](https://github.com/theluckystrike) family -- typed, modular utilities for Chrome extension development:

| Package | Description |
|---------|-------------|
| [webext-storage](https://github.com/theluckystrike/webext-storage) | Typed storage with schema validation |
| [webext-messaging](https://github.com/theluckystrike/webext-messaging) | Type-safe message passing |
| [webext-tabs](https://github.com/theluckystrike/webext-tabs) | Tab query helpers |
| [webext-cookies](https://github.com/theluckystrike/webext-cookies) | Promise-based cookies API |
| [webext-i18n](https://github.com/theluckystrike/webext-i18n) | Internationalization toolkit |

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License -- see [LICENSE](LICENSE) for details.

---

<div align="center">

Built by [theluckystrike](https://github.com/theluckystrike) · [zovo.one](https://zovo.one)

</div>
