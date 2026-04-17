export type Project = {
  title: string;
  description: string;
  tags: string[];
  /** Absolute `http(s)` URL or site path without leading slash (uses `base` on GitHub Pages). */
  href: string;
};

export const projects: Project[] = [
  {
    title: 'Lakehouse metrics exporter',
    description:
      'Batch pipeline that consolidates usage events and publishes rollups to Prometheus.',
    tags: ['Python', 'AWS', 'DuckDB'],
    href: 'https://github.com/example/lakehouse-metrics',
  },
  {
    title: 'Contract review assistant',
    description:
      'Internal tool for clause extraction and diffing across contract revisions.',
    tags: ['TypeScript', 'React', 'OpenAI API'],
    href: 'https://github.com/example/contract-review',
  },
  {
    title: 'Regional outage dashboard',
    description:
      'Read-only status board fed by health checks and incident webhooks.',
    tags: ['Go', 'Terraform', 'Cloudflare'],
    href: 'https://github.com/example/outage-dashboard',
  },
];
