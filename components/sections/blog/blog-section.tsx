import { getAllBlogPosts } from "@/lib/content";
import { BlogGrid } from "./blog-grid";

export async function BlogSection() {
  const posts = getAllBlogPosts();

  return (
    <section
      id="blog"
      className="py-24 px-6"
      aria-labelledby="blog-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Blog
          </p>
          <h2
            id="blog-heading"
            className="mt-3 font-heading text-3xl font-bold md:text-4xl"
          >
            Thoughts &amp; Writing
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground">
            Essays on AI engineering, software architecture, and the intersection
            of research and practical systems.
          </p>
        </div>

        <BlogGrid posts={posts} />
      </div>
    </section>
  );
}
