import { dev } from '$app/env';

export const prerender = true;
export const trailingSlash = 'always';

// Enable hot updates locally while keeping the published pages free of scripts.
export const csr = dev;
