export type FeaturedItem = {
  title: string;
  description: string;
  /** Site path without leading slash (uses `base`) or full URL for external links */
  href: string;
  external?: boolean;
};

export const featured: FeaturedItem[] = [
  {
    title: 'Winter light',
    description: 'A sample post with an inline photo gallery and captions.',
    href: 'blog/winter-light',
  },
  {
    title: 'On simplicity in tooling',
    description: 'Small scripts, clear boundaries, and when not to add a framework.',
    href: 'blog/on-simplicity',
  },
  {
    title: 'Static sites and CI',
    description: 'A short note on keeping deploys boring and predictable.',
    href: 'blog/static-sites-and-ci',
  },
  {
    title: 'Project index',
    description: 'Selected work with stack tags and links out to repositories.',
    href: 'projects',
  },
];
