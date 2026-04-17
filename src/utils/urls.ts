/** Astro `BASE_URL` normalized to a path prefix without trailing slash (`''` means site root). */
function basePrefix(): string {
  let b = String(import.meta.env.BASE_URL ?? '/');
  if (!b.startsWith('/')) b = `/${b}`;
  while (b.length > 1 && b.endsWith('/')) b = b.slice(0, -1);
  return b === '/' ? '' : b;
}

/**
 * Prefix a site path with `base` for GitHub Pages.
 * Pass paths without a leading slash, e.g. `blog`, `blog/my-post`, `projects`, or `''` for home.
 */
export function withBase(path: string): string {
  const base = basePrefix();
  const trimmed = path.replace(/^\/+/, '');
  if (!trimmed) {
    return base ? `${base}/` : '/';
  }
  return base ? `${base}/${trimmed}` : `/${trimmed}`;
}
