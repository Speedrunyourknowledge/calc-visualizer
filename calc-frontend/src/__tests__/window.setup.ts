import { vi } from 'vitest'

// prevents jsdom error
window.scrollTo = vi.fn

/**
 * Node's native fetch doesn't support relative URLs, so we
 * mock fetch globally. An empty object is returned to satisfy 
 * code that tries to parse the response as JSON.
 */
global.fetch = vi.fn(() =>
  Promise.resolve(new Response(JSON.stringify({}), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  }))
);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: unknown) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

global.URL.createObjectURL = vi.fn(() => 'mockObjectURL');