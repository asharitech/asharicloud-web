import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(() => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  })),
  useSearchParams: vi.fn(() => new URLSearchParams()),
  usePathname: vi.fn(() => "/"),
}));

// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return React.createElement("img", { src, alt, ...props });
  },
}));

// Mock next/dynamic
vi.mock("next/dynamic", () => ({
  default: (fn: () => React.ComponentType) => {
    const Component = fn();
    return Component;
  },
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi
  .fn()
  .mockImplementation((_callback: IntersectionObserverCallback) => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    root: null,
    rootMargin: "",
    thresholds: [],
  }));

// Mock ResizeObserver
global.ResizeObserver = vi
  .fn()
  .mockImplementation((_callback: ResizeObserverCallback) => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock scrollTo
Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: vi.fn(),
});

// Mock getComputedStyle
Object.defineProperty(window, "getComputedStyle", {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    getPropertyValue: vi.fn().mockReturnValue(""),
  })),
});
