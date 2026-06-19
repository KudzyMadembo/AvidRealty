import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { BlogPost } from './Blog';
import { blogPosts } from '../data/content';
import { SITE_URL } from '../data/seo';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    const id = 'schema-article';
    const existing = document.getElementById(id);
    existing?.remove();
    if (!post) return;

    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: { '@type': 'Person', name: post.author },
      datePublished: post.date,
      image: post.image,
      url: `${SITE_URL}/blog/${slug}`,
      publisher: {
        '@type': 'Organization',
        name: 'Avid Realty Partners',
        logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
      },
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, [post, slug]);

  return (
    <>
      {post ? (
        <SEO
          title={`${post.title} | Avid Realty Partners Blog`}
          description={post.excerpt}
          keywords={`${post.category}, multifamily real estate, ${post.author}, Avid Realty Partners`}
          path={`/blog/${slug}`}
          type="article"
        />
      ) : (
        <SEO title="Article Not Found | Avid Realty Partners" noindex />
      )}
      <BlogPost slug={slug} />
    </>
  );
}
