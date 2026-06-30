import { CmssyLink } from "@cmssy/next/client";
import type { Post } from "./load-posts";

// `data` comes from the loader; absent in the editor (loader does not run there).
export default function BlogIndex({
  data,
}: {
  data?: { items?: Post[]; hasMore?: boolean } | null;
}) {
  const items = data?.items ?? [];
  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-12 text-center text-muted-foreground">
        No posts yet.
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((post) => (
        <CmssyLink
          key={post.id}
          href={`/${post.fullSlug.replace(/^\/+/, "")}`}
          className="group block rounded-xl border border-border p-6 transition-colors hover:border-foreground/30"
        >
          {post.publishedAt && (
            <time
              dateTime={post.publishedAt}
              className="text-xs text-muted-foreground"
            >
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          )}
          <h3 className="mt-2 text-lg font-semibold group-hover:text-primary">
            {post.displayName ?? post.seoTitle ?? post.slug}
          </h3>
          {post.seoDescription && (
            <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
              {post.seoDescription}
            </p>
          )}
        </CmssyLink>
      ))}
    </div>
  );
}
