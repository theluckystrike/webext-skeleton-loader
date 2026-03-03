# webext-skeleton-loader

[![npm version](https://img.shields.io/npm/v/webext-skeleton-loader)](https://npmjs.com/package/webext-skeleton-loader)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://img.shields.io/github/actions/workflow/status/theluckystrike/webext-skeleton-loader/ci.yml?branch=main)](https://github.com/theluckystrike/webext-skeleton-loader/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/webext-skeleton-loader?style=social)](https://github.com/theluckystrike/webext-skeleton-loader)

> A lightweight skeleton loading component for Chrome extensions that shows placeholder content while data loads.

## Overview

**webext-skeleton-loader** is a lightweight library for creating skeleton loading placeholders in Chrome extensions. It provides CSS-only animations, multiple skeleton patterns, customizable colors, and full accessibility support — all in just ~1KB.

Part of the [Zovo](https://zovo.one) developer tools family.

## Features

- ✅ **CSS-Only** - No JavaScript required for animations
- ✅ **Multiple Patterns** - Text, avatar, card, table
- ✅ **Customizable** - Colors and sizes
- ✅ **Accessible** - ARIA support
- ✅ **Zero Dependencies** - Pure vanilla
- ✅ **Tiny** - ~1KB gzipped

## Installation

```bash
npm install webext-skeleton-loader
```

## Quick Start

### Basic Usage

```html
<div class="skeleton"></div>
```

```css
.skeleton {
  width: 200px;
  height: 20px;
  background: #eee;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}

@keyframes skeleton-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Using the Library

```javascript
import { createSkeleton, skeletonStyles } from 'webext-skeleton-loader';

// Add default styles
document.head.insertAdjacentHTML('beforeend', skeletonStyles);
```

### Text Skeleton

```html
<div class="skeleton-text">
  <div class="skeleton-line" style="width: 100%"></div>
  <div class="skeleton-line" style="width: 80%"></div>
  <div class="skeleton-line" style="width: 90%"></div>
</div>
```

### Avatar Skeleton

```html
<div class="skeleton-avatar"></div>

<style>
.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #eee;
  animation: skeleton-pulse 1.5s ease-in-out infinite;
}
</style>
```

### Card Skeleton

```html
<div class="skeleton-card">
  <div class="skeleton-image"></div>
  <div class="skeleton-text">
    <div class="skeleton-line" style="width: 70%"></div>
    <div class="skeleton-line" style="width: 50%"></div>
  </div>
</div>

<style>
.skeleton-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.skeleton-image {
  width: 100%;
  height: 150px;
  background: #eee;
}

.skeleton-text {
  padding: 12px;
}

.skeleton-line {
  height: 12px;
  background: #eee;
  margin: 8px 0;
  border-radius: 4px;
}
</style>
```

### Table Skeleton

```html
<table class="skeleton-table">
  <thead>
    <tr>
      <th><div class="skeleton-cell"></div></th>
      <th><div class="skeleton-cell"></div></th>
      <th><div class="skeleton-cell"></div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="skeleton-cell"></div></td>
      <td><div class="skeleton-cell"></div></td>
      <td><div class="skeleton-cell"></div></td>
    </tr>
  </tbody>
</table>
```

## JavaScript API

### createSkeleton(type, options)

```javascript
import { createSkeleton } from 'webext-skeleton-loader';

// Create text skeleton
const textEl = createSkeleton('text', { lines: 3 });

// Create card skeleton
const cardEl = createSkeleton('card', { 
  imageHeight: 200,
  titleWidth: '70%',
  textLines: 2
});

// Create table skeleton
const tableEl = createSkeleton('table', {
  columns: 4,
  rows: 5
});
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| type | string | - | 'text', 'card', 'avatar', 'table' |
| lines | number | 3 | Number of text lines |
| imageHeight | number | 150 | Height of card image |
| titleWidth | string | '60%' | Width of title placeholder |
| columns | number | 3 | Number of table columns |
| rows | number | 5 | Number of table rows |
| baseColor | string | '#eee' | Base background color |
| highlightColor | string | '#f5f5f5' | Highlight color |

## React Integration

```jsx
import { Skeleton, SkeletonText, SkeletonCard } from 'webext-skeleton-loader';

function UserProfile({ user, loading }) {
  if (loading) {
    return (
      <div className="profile">
        <Skeleton type="avatar" size={64} />
        <SkeletonText lines={3} />
      </div>
    );
  }
  
  return <div>{user.name}</div>;
}
```

## Custom Animation

```css
.skeleton {
  background: linear-gradient(90deg, #eee 25%, #f5f5f5 50%, #eee 75%);
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

## Accessibility

The library includes ARIA attributes for screen readers:

```html
<div class="skeleton" role="status" aria-label="Loading content...">
  <span class="visually-hidden">Loading...</span>
</div>
```

## Browser Support

- Chrome 80+
- Edge 80+

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/skeleton-feature`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/skeleton-feature`
7. **Submit** a Pull Request

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [webext-web-components](https://github.com/theluckystrike/webext-web-components) - Web Components library
- [webext-data-table](https://github.com/theluckystrike/webext-data-table) - Data table component
- [chrome-extension-starter-mv3](https://github.com/theluckystrike/chrome-extension-starter-mv3) - Extension template
- [chrome-storage-plus](https://github.com/theluckystrike/chrome-storage-plus) - Type-safe storage

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT — [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
