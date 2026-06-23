import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Newsletter from '../components/Newsletter';
import { BlogCard } from '../components/Cards';
import { blogPosts, images } from '../data/content';

export default function Blog() {
  return (
    <>
      <PageHero title="Blog" subtitle="Insights & Analysis" image={images.blog} />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-3 sm:px-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <Newsletter />
    </>
  );
}

export function BlogPost({ slug }) {
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return (
      <div className="py-32 text-center">
        <h1 className="font-serif text-3xl">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-gold-500">← Back to Blog</Link>
      </div>
    );
  }
  return (
    <>
      <PageHero title={post.title} subtitle={post.category} image={post.image} />
      <article className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-sm text-navy-800/50">{post.date} · {post.author}</div>
          <div className="prose prose-navy mt-8 max-w-none">
            {post.content.split('\n\n').map((para) => (
              <p key={para.slice(0, 40)} className="mb-4 leading-relaxed text-navy-800/70">{para}</p>
            ))}
          </div>
          <Link to="/blog" className="mt-10 inline-block text-sm font-medium text-gold-500 hover:text-gold-600">
            ← Back to Blog
          </Link>
        </div>
      </article>
      <Newsletter />
    </>
  );
}
