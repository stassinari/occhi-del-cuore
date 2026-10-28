import { dev } from '$app/env';

export const prerender = true;
export const trailingSlash = 'always';

// Enable hot updates locally without hydrating the published pages.
export const csr = dev;
