# webext-skeleton-loader — Loading Placeholders
> **Built by [Zovo](https://zovo.one)** | `npm i webext-skeleton-loader`

Text, image, circle, card, and list skeleton presets with shimmer animation and async loading.

```typescript
import { SkeletonLoader } from 'webext-skeleton-loader';
document.body.appendChild(SkeletonLoader.card());
await SkeletonLoader.showUntil('container', SkeletonLoader.list(5), fetchData, renderData);
```
MIT License
