import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultSeo, pageSeo, organizationSchema, SITE_URL } from '../data/seo';

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function buildBreadcrumbs(routePath) {
  if (routePath === '/') return null;

  const crumbs = [{ name: 'Home', path: '/' }];
  const segments = routePath.split('/').filter(Boolean);
  let acc = '';

  for (const segment of segments) {
    acc += `/${segment}`;
    const page = pageSeo[acc];
    const name = page?.title?.split('|')[0]?.trim() ?? segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name, path: acc });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path === '/' ? '/' : crumb.path}`,
    })),
  };
}

export default function SEO({ title, description, keywords, path, type = 'website', noindex = false }) {
  const location = useLocation();
  const routePath = path ?? (location.pathname.replace(/\/$/, '') || '/');
  const pageMeta = pageSeo[routePath] ?? {};
  const metaTitle = title ?? pageMeta.title ?? defaultSeo.title;
  const metaDescription = description ?? pageMeta.description ?? defaultSeo.description;
  const metaKeywords = keywords ?? pageMeta.keywords ?? defaultSeo.keywords;
  const canonical = `${SITE_URL}${routePath === '/' ? '/' : routePath}`;
  const ogImage = defaultSeo.image;

  useEffect(() => {
    document.title = metaTitle;

    upsertMeta('name', 'description', metaDescription);
    upsertMeta('name', 'keywords', metaKeywords);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    upsertMeta('name', 'author', 'Avid Realty Partners');
    upsertMeta('name', 'theme-color', '#0f2240');

    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:site_name', 'Avid Realty Partners');
    upsertMeta('property', 'og:title', metaTitle);
    upsertMeta('property', 'og:description', metaDescription);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:locale', 'en_US');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', metaTitle);
    upsertMeta('name', 'twitter:description', metaDescription);
    upsertMeta('name', 'twitter:image', ogImage);

    upsertJsonLd('schema-organization', organizationSchema);

    const breadcrumbs = buildBreadcrumbs(routePath);
    if (breadcrumbs) {
      upsertJsonLd('schema-breadcrumbs', breadcrumbs);
    } else {
      document.getElementById('schema-breadcrumbs')?.remove();
    }

    if (routePath === '/') {
      upsertJsonLd('schema-website', {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Avid Realty Partners',
        url: SITE_URL,
        description: metaDescription,
        publisher: { '@type': 'Organization', name: 'Avid Realty Partners' },
      });
    } else {
      const existing = document.getElementById('schema-website');
      existing?.remove();
    }
  }, [metaTitle, metaDescription, metaKeywords, canonical, ogImage, routePath, type, noindex]);

  return null;
}
