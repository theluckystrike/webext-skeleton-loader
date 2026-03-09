[![CI](https://github.com/theluckystrike/webext-skeleton-loader/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-skeleton-loader/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/webext-skeleton-loader)](https://www.npmjs.com/package/@theluckystrike/webext-skeleton-loader)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Last Commit](https://img.shields.io/github/last-commit/theluckystrike/webext-skeleton-loader)](https://github.com/theluckystrike/webext-skeleton-loader/commits/main)

# Webext Skeleton Loader

A lightweight TypeScript library for creating shimmer loading placeholders in Chrome extensions — perfect for Manifest V3 extensions with zero dependencies.

## Overview

`webext-skeleton-loader` provides a simple API to create skeleton loading placeholders with shimmer animations. The library automatically injects required CSS styles and returns DOM elements ready to use in your extension popup or options page.

### Features

- ✨ **Shimmer Effect** — Smooth loading animation out of the box
- 📝 **Text Skeletons** — Configurable width and height
- 🖼️ **Image Skeletons** — Placeholder for images
- ⭕ **Circle Skeletons** — Perfect for avatars
- 📇 **Card Skeletons** — Complete card with image and text
- 📋 **List Skeletons** — List items with avatars
- 🔄 **Auto-Replace** — Show skeleton until data loads, then replace

## Installation

```bash
npm install @theluckystrike/webext-skeleton-loader
```

## Quick Start

```typescript
import { SkeletonLoader } from '@theluckystrike/webext-skeleton-loader';

// Add a card skeleton to your popup
const card = SkeletonLoader.card('320px');
document.getElementById('app')?.appendChild(card);
```

## Usage Examples

### Text Skeleton

```typescript
// Single text line
const title = SkeletonLoader.text('80%', '24px');
document.body.appendChild(title);

// Multiple lines
document.body.appendChild(SkeletonLoader.text('100%', '16px'));
document.body.appendChild(SkeletonLoader.text('70%', '16px'));
document.body.appendChild(SkeletonLoader.text('50%', '16px'));
```

### Image Skeleton

```typescript
const heroImage = SkeletonLoader.image('100%', '200px');
document.body.appendChild(heroImage);
```

### Circle Skeleton (Avatar)

```typescript
const avatar = SkeletonLoader.circle('48px');
document.body.appendChild(avatar);
```

### Card Skeleton

```typescript
const card = SkeletonLoader.card('300px');
document.body.appendChild(card);
```

### List Skeleton

```typescript
const list = SkeletonLoader.list(5); // 5 items
document.body.appendChild(list);
```

### Auto-Replace with Real Content

Use `showUntil` to display a skeleton while loading, then automatically replace it with rendered content:

```typescript
import { SkeletonLoader } from '@theluckystrike/webext-skeleton-loader';

await SkeletonLoader.showUntil(
  'container',
  SkeletonLoader.card('320px'),
  async () => {
    const res = await fetch('https://api.example.com/users/1');
    return res.json();
  },
  (user) => `
    <div class="card">
      <img src="${user.avatar}" alt="${user.name}" />
      <h3>${user.name}</h3>
      <p>${user.bio}</p>
    </div>
  `
);
```

## API Reference

### `SkeletonLoader.text(width?, height?)`

Creates a text line skeleton with configurable dimensions.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| width | string | `'100%'` | CSS width value |
| height | string | `'16px'` | CSS height value |

Returns: `HTMLElement`

### `SkeletonLoader.image(width?, height?)`

Creates an image placeholder skeleton.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| width | string | `'100%'` | CSS width value |
| height | string | `'200px'` | CSS height value |

Returns: `HTMLElement`

### `SkeletonLoader.circle(size?)`

Creates a circular skeleton for avatar placeholders.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| size | string | `'48px'` | CSS width and height value |

Returns: `HTMLElement`

### `SkeletonLoader.card(width?)`

Creates a complete card skeleton with image and text lines.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| width | string | `'100%'` | CSS width value |

Returns: `HTMLElement` containing image, title, and description placeholders

### `SkeletonLoader.list(count?)`

Creates a list skeleton with avatar and text rows.

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| count | number | `5` | Number of list items |

Returns: `HTMLElement` containing the list structure

### `SkeletonLoader.showUntil(containerId, skeleton, loader, render)`

Displays a skeleton until async data loads, then replaces it with rendered content.

| Parameter | Type | Description |
|-----------|------|-------------|
| containerId | string | ID of the container element |
| skeleton | HTMLElement | Skeleton to display while loading |
| loader | `() => Promise<T>` | Async function that returns data |
| render | `(data: T) => string` | Function that converts data to HTML |

Returns: `Promise<void>`

## Project Structure

```
webext-skeleton-loader/
├── src/
│   ├── index.ts          # Main exports
│   ├── skeleton.ts       # SkeletonLoader implementation
│   └── skeleton.test.ts  # Unit tests
├── dist/                 # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
├── LICENSE
└── README.md
```

## Building

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist` directory.

## Testing

```bash
npm test
```

## License

MIT License - Copyright (c) 2025 theluckystrike

---

Built at [zovo.one](https://zovo.one) by [theluckystrike](https://github.com/theluckystrike)
