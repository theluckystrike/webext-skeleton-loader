/**
 * Skeleton Loader — Shimmer loading placeholders
 */
export class SkeletonLoader {
    private static styleInjected = false;

    /** Inject shimmer animation styles */
    private static injectStyles(): void {
        if (this.styleInjected) return;
        const style = document.createElement('style');
        style.textContent = `
      @keyframes __skeleton_shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      .__skeleton { background: linear-gradient(90deg, #E5E7EB 25%, #F3F4F6 50%, #E5E7EB 75%); background-size: 200% 100%;
        animation: __skeleton_shimmer 1.5s ease-in-out infinite; border-radius: 6px; }
    `;
        document.head.appendChild(style);
        this.styleInjected = true;
    }

    /** Create a text line skeleton */
    static text(width: string = '100%', height: string = '16px'): HTMLElement {
        this.injectStyles();
        const el = document.createElement('div');
        el.className = '__skeleton';
        Object.assign(el.style, { width, height, marginBottom: '8px' });
        return el;
    }

    /** Create an image skeleton */
    static image(width: string = '100%', height: string = '200px'): HTMLElement {
        this.injectStyles();
        const el = document.createElement('div');
        el.className = '__skeleton';
        Object.assign(el.style, { width, height, borderRadius: '8px' });
        return el;
    }

    /** Create a circle skeleton (avatar) */
    static circle(size: string = '48px'): HTMLElement {
        this.injectStyles();
        const el = document.createElement('div');
        el.className = '__skeleton';
        Object.assign(el.style, { width: size, height: size, borderRadius: '50%' });
        return el;
    }

    /** Create a card skeleton */
    static card(width: string = '100%'): HTMLElement {
        this.injectStyles();
        const card = document.createElement('div');
        Object.assign(card.style, { width, padding: '16px', border: '1px solid #E5E7EB', borderRadius: '12px' });
        card.appendChild(this.image('100%', '140px'));
        const spacer = document.createElement('div'); spacer.style.height = '12px'; card.appendChild(spacer);
        card.appendChild(this.text('80%'));
        card.appendChild(this.text('60%'));
        card.appendChild(this.text('40%', '12px'));
        return card;
    }

    /** Create a list skeleton */
    static list(count: number = 5): HTMLElement {
        this.injectStyles();
        const list = document.createElement('div');
        for (let i = 0; i < count; i++) {
            const row = document.createElement('div');
            Object.assign(row.style, { display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0', borderBottom: '1px solid #F3F4F6' });
            row.appendChild(this.circle('40px'));
            const text = document.createElement('div');
            text.style.flex = '1';
            text.appendChild(this.text('70%'));
            text.appendChild(this.text('40%', '12px'));
            row.appendChild(text);
            list.appendChild(row);
        }
        return list;
    }

    /** Show skeletons in container, then replace with real content */
    static async showUntil<T>(containerId: string, skeleton: HTMLElement, loader: () => Promise<T>, render: (data: T) => string): Promise<void> {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        container.appendChild(skeleton);
        const data = await loader();
        container.innerHTML = render(data);
    }
}
