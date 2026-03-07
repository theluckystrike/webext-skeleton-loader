[![CI](https://github.com/theluckystrike/webext-skeleton-loader/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/webext-skeleton-loader/actions)
[![npm](https://img.shields.io/npm/v/@theluckystrike/webext-skeleton-loader)](https://www.npmjs.com/package/@theluckystrike/webext-skeleton-loader)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)

# Webext Skeleton Loader

A lightweight TypeScript library for creating shimmer loading placeholders in Chrome extensions.

## Overview

webext-skeleton-loader provides a simple API to create skeleton loading placeholders with shimmer animations. The library automatically injects required CSS styles and returns DOM elements ready to use in your extension popup or options page.

Built for Manifest V3 Chrome extensions with zero dependencies.

## Installation

```bash
npm install @theluckystrike/webext-skeleton-loader
```

## API Reference

### SkeletonLoader.text

Creates a text line skeleton with configurable width and height.

```typescript
import { SkeletonLoader } from '@theluckystrike/webext-skeleton-loader';

const line = SkeletonLoader.text('80%', '16px');
document.body.appendChild(line);
```

Parameters:
- width: CSS width value (default: '100%')
- height: CSS height value (default: '16px')

Returns: HTMLElement

### SkeletonLoader.image

Creates an image placeholder skeleton with configurable dimensions.

```typescript
const image = SkeletonLoader.image('100%', '200px');
document.body.appendChild(image);
```

Parameters:
- width: CSS width value (default: '100%')
- height: CSS height value (default: '200px')

Returns: HTMLElement

### SkeletonLoader.circle

Creates a circular skeleton for avatar placeholders.

```typescript
const avatar = SkeletonLoader.circle('48px');
document.body.appendChild(avatar);
```

Parameters:
- size: CSS width and height value (default: '48px')

Returns: HTMLElement

### SkeletonLoader.card

Creates a complete card skeleton with image and text lines.

```typescript
const card = SkeletonLoader.card('300px');
document.body.appendChild(card);
```

Parameters:
- width: CSS width value (default: '100%')

Returns: HTMLElement containing image, title, and description placeholders

### SkeletonLoader.list

Creates a list skeleton with avatar and text rows.

```typescript
const list = SkeletonLoader.list(5);
document.body.appendChild(list);
```

Parameters:
- count: Number of list items (default: 5)

Returns: HTMLElement containing the list structure

### SkeletonLoader.showUntil

Displays a skeleton until async data loads, then replaces it with rendered content.

```typescript
await SkeletonLoader.showUntil(
  'container',
  SkeletonLoader.card(),
  async () => {
    const response = await fetch('/api/data');
    return response.json();
  },
  (data) => `<div class="card">${data.title}</div>`
);
```

Parameters:
- containerId: ID of the container element
- skeleton: Skeleton HTMLElement to display while loading
- loader: Async function that returns data
- render: Function that converts data to HTML string

## Usage Example

```typescript
import { SkeletonLoader } from '@theluckystrike/webext-skeleton-loader';

// Display card skeleton while fetching data
async function loadUserProfile(containerId: string) {
  await SkeletonLoader.showUntil(
    containerId,
    SkeletonLoader.card('320px'),
    async () => {
      const res = await fetch('https://api.example.com/profile');
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
}
```

## Building

```bash
npm run build
```

This compiles TypeScript to JavaScript in the dist directory.

## About

webext-skeleton-loader is maintained by theluckystrike and part of the zovo.one developer tools ecosystem. zovo.one builds privacy-first Chrome extensions for developers.

## Related Projects

- chrome-extension-starter-mv3 - Extension template
- chrome-storage-plus - Type-safe storage wrapper
- webext-message-bus - Inter-context messaging

## License

MIT License - Copyright (c) 2025 theluckystrike

---

Built by [theluckystrike](https://github.com/theluckystrike) — [zovo.one](https://zovo.one)
