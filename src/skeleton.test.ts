import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { SkeletonLoader } from './index';

describe('SkeletonLoader', () => {
  beforeEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
    // Reset internal state if possible (though it's private static)
    (SkeletonLoader as any).styleInjected = false;
  });

  afterEach(() => {
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  it('should inject styles only once', () => {
    SkeletonLoader.text();
    const styleCount = document.head.querySelectorAll('style').length;
    expect(styleCount).toBe(1);
    SkeletonLoader.circle();
    expect(document.head.querySelectorAll('style').length).toBe(1);
  });

  it('should create text skeleton with default values', () => {
    const el = SkeletonLoader.text();
    expect(el.className).toBe('__skeleton');
    expect(el.style.width).toBe('100%');
    expect(el.style.height).toBe('16px');
  });

  it('should create text skeleton with custom values', () => {
    const el = SkeletonLoader.text('50%', '24px');
    expect(el.style.width).toBe('50%');
    expect(el.style.height).toBe('24px');
  });

  it('should create image skeleton', () => {
    const el = SkeletonLoader.image('200px', '100px');
    expect(el.style.width).toBe('200px');
    expect(el.style.height).toBe('100px');
    expect(el.style.borderRadius).toBe('8px');
  });

  it('should create circle skeleton', () => {
    const el = SkeletonLoader.circle('64px');
    expect(el.style.width).toBe('64px');
    expect(el.style.height).toBe('64px');
    expect(el.style.borderRadius).toBe('50%');
  });

  it('should create card skeleton', () => {
    const card = SkeletonLoader.card('300px');
    expect(card.style.width).toBe('300px');
    expect(card.children.length).toBe(5); // Image, spacer, 3 text lines
    expect(card.querySelector('.__skeleton')).toBeTruthy();
  });

  it('should create list skeleton with default count', () => {
    const list = SkeletonLoader.list();
    expect(list.children.length).toBe(5);
  });

  it('should create list skeleton with custom count', () => {
    const list = SkeletonLoader.list(3);
    expect(list.children.length).toBe(3);
  });

  it('should showUntil and replace content', async () => {
    const container = document.createElement('div');
    container.id = 'app';
    document.body.appendChild(container);

    const loader = vi.fn().mockResolvedValue({ title: 'Hello' });
    const render = (data: any) => `<h1>${data.title}</h1>`;

    const promise = SkeletonLoader.showUntil('app', SkeletonLoader.text(), loader, render);
    
    expect(container.querySelector('.__skeleton')).toBeTruthy();
    
    await promise;
    
    expect(container.innerHTML).toBe('<h1>Hello</h1>');
    expect(loader).toHaveBeenCalled();
  });

  it('should handle missing container in showUntil', async () => {
    const loader = vi.fn().mockResolvedValue({});
    const render = () => 'Done';
    await expect(SkeletonLoader.showUntil('missing', SkeletonLoader.text(), loader, render)).resolves.not.toThrow();
  });

  it('should ensure styles are injected for card and list', () => {
    SkeletonLoader.card();
    expect(document.head.querySelector('style')).toBeTruthy();
  });
});
