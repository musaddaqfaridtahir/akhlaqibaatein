-- ==============================================================================
-- AkhlaqiBaatein.com (اخلاقی باتیں)
-- Production Supabase PostgreSQL Database Schema
-- Provides seamless migration from static TypeScript/JSON to Supabase PostgreSQL.
-- ==============================================================================

-- 1. Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- 2. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(120) UNIQUE NOT NULL,
    title_urdu VARCHAR(255) NOT NULL,
    title_roman VARCHAR(255) NOT NULL,
    title_english VARCHAR(255) NOT NULL,
    description_urdu TEXT NOT NULL,
    description_roman TEXT NOT NULL,
    icon_name VARCHAR(50) DEFAULT 'BookOpen',
    quote_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Books Table
CREATE TABLE IF NOT EXISTS public.books (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(120) UNIQUE NOT NULL,
    title_urdu VARCHAR(255) NOT NULL,
    title_roman VARCHAR(255) NOT NULL,
    title_english VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    author_urdu VARCHAR(255) NOT NULL,
    publication_year VARCHAR(50),
    description TEXT NOT NULL,
    description_urdu TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'coming-soon')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Book Chapters Table
CREATE TABLE IF NOT EXISTS public.book_chapters (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    book_id UUID REFERENCES public.books(id) ON DELETE CASCADE,
    chapter_number INTEGER NOT NULL,
    title_urdu VARCHAR(255) NOT NULL,
    title_roman VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(book_id, chapter_number)
);

-- 5. Quotes Table (Primary content for moral sayings & long-tail SEO)
CREATE TABLE IF NOT EXISTS public.quotes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    category_slug VARCHAR(120) REFERENCES public.categories(slug) ON DELETE RESTRICT,
    book_slug VARCHAR(120) REFERENCES public.books(slug) ON DELETE SET NULL,
    author VARCHAR(255) NOT NULL,
    author_urdu VARCHAR(255) NOT NULL,
    author_era VARCHAR(120),
    urdu TEXT NOT NULL,
    roman TEXT NOT NULL,
    english TEXT,
    tashreeh TEXT NOT NULL, -- Detailed commentary & moral lesson
    amli_sabaq TEXT, -- Practical daily action
    source VARCHAR(255) NOT NULL,
    tags TEXT[] DEFAULT '{}',
    is_featured BOOLEAN DEFAULT FALSE,
    view_count BIGINT DEFAULT 0,
    share_count BIGINT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. Chahal Hadith (40 Ahadith Arbaeen Tracker)
CREATE TABLE IF NOT EXISTS public.chahal_hadith (
    id SERIAL PRIMARY KEY,
    hadith_number INTEGER UNIQUE NOT NULL,
    arabic TEXT NOT NULL,
    urdu TEXT NOT NULL,
    roman TEXT NOT NULL,
    english TEXT,
    tashreeh TEXT NOT NULL,
    reference VARCHAR(255) NOT NULL,
    theme VARCHAR(120) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. Long-Form Articles Table (800+ words SEO & Seerat Essays)
CREATE TABLE IF NOT EXISTS public.articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    category_slug VARCHAR(120) REFERENCES public.categories(slug) ON DELETE RESTRICT,
    title_urdu VARCHAR(255) NOT NULL,
    title_roman VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    read_time VARCHAR(50) DEFAULT '5 min read',
    published_at DATE DEFAULT CURRENT_DATE,
    summary_urdu TEXT NOT NULL,
    summary_roman TEXT NOT NULL,
    content_json JSONB NOT NULL, -- Array of { heading, headingUrdu, bodyUrdu, bodyRoman }
    key_takeaways TEXT[] DEFAULT '{}',
    tags TEXT[] DEFAULT '{}',
    is_published BOOLEAN DEFAULT TRUE,
    view_count BIGINT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. Performance Indexes
CREATE INDEX IF NOT EXISTS idx_quotes_category ON public.quotes(category_slug);
CREATE INDEX IF NOT EXISTS idx_quotes_book ON public.quotes(book_slug);
CREATE INDEX IF NOT EXISTS idx_quotes_featured ON public.quotes(is_featured);
CREATE INDEX IF NOT EXISTS idx_quotes_tags ON public.quotes USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_quotes_search_roman ON public.quotes USING GIN(roman gin_trgm_ops);
CREATE INDEX IF NOT EXISTS idx_articles_category ON public.articles(category_slug);
CREATE INDEX IF NOT EXISTS idx_articles_search_roman ON public.articles USING GIN(title_roman gin_trgm_ops);

-- 9. Row Level Security (RLS) Configuration
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.book_chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chahal_hadith ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

-- Anonymous public read access for SEO and web visitors
CREATE POLICY "Public categories are viewable by everyone" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public books are viewable by everyone" ON public.books FOR SELECT USING (true);
CREATE POLICY "Public chapters are viewable by everyone" ON public.book_chapters FOR SELECT USING (true);
CREATE POLICY "Public quotes are viewable by everyone" ON public.quotes FOR SELECT USING (true);
CREATE POLICY "Public hadith are viewable by everyone" ON public.chahal_hadith FOR SELECT USING (true);
CREATE POLICY "Public articles are viewable by everyone" ON public.articles FOR SELECT USING (is_published = true);

-- Authenticated service role can insert/update/delete
CREATE POLICY "Admins have full access to quotes" ON public.quotes FOR ALL TO authenticated USING (true);
CREATE POLICY "Admins have full access to articles" ON public.articles FOR ALL TO authenticated USING (true);
