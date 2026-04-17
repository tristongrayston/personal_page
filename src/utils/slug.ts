/** Stable URL slug from a content collection entry `id` (e.g. `post.md` or `nested/post.md`). */
export function slugFromEntryId(id: string): string {
  const file = id.replace(/\\/g, '/').split('/').pop() ?? id;
  return file.replace(/\.(md|mdx)$/i, '');
}
