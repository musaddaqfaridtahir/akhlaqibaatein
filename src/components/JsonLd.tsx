import React from 'react';

interface QuotationSchemaProps {
  type: 'quotation';
  quote: {
    text: string;
    author: string;
    url: string;
    datePublished?: string;
  };
}

interface ArticleSchemaProps {
  type: 'article';
  article: {
    title: string;
    description: string;
    url: string;
    author: string;
    publishedAt: string;
    image?: string;
  };
}

interface WebSiteSchemaProps {
  type: 'website';
}

type JsonLdProps = QuotationSchemaProps | ArticleSchemaProps | WebSiteSchemaProps;

export default function JsonLd(props: JsonLdProps) {
  let schema = {};

  if (props.type === 'quotation') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Quotation',
      text: props.quote.text,
      creator: {
        '@type': 'Person',
        name: props.quote.author,
      },
      url: props.quote.url,
      publisher: {
        '@type': 'Organization',
        name: 'AkhlaqiBaatein.com',
        url: 'https://akhlaqibaatein.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akhlaqibaatein.com/logo.png',
        },
      },
    };
  } else if (props.type === 'article') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: props.article.title,
      description: props.article.description,
      url: props.article.url,
      datePublished: props.article.publishedAt,
      author: {
        '@type': 'Organization',
        name: props.article.author,
      },
      publisher: {
        '@type': 'Organization',
        name: 'AkhlaqiBaatein.com',
        url: 'https://akhlaqibaatein.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akhlaqibaatein.com/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': props.article.url,
      },
    };
  } else {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'AkhlaqiBaatein.com',
      alternateName: 'اخلاقی باتیں',
      url: 'https://akhlaqibaatein.com',
      publisher: {
        '@type': 'Organization',
        name: 'AkhlaqiBaatein.com',
        url: 'https://akhlaqibaatein.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://akhlaqibaatein.com/logo.png',
        },
      },
      description:
        'Digitizing timeless Islamic wisdom, moral parables, prophetic virtues, and classical ethics from Makhzan-e-Akhlaq and authentic sources.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://akhlaqibaatein.com/?search={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
