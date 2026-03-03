# webext-skeleton-loader

A lightweight skeleton loading component for Chrome extensions that shows placeholder content while data loads.

## Features

- CSS-only animations
- Multiple skeleton patterns
- Customizable colors
- Accessible (ARIA support)
- No dependencies
- ~1KB gzipped

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

## License

MIT
