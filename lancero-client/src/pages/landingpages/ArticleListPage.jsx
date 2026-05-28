import Button from '../../components/Button.jsx';
import ArticleList from '../../components/ArticleList.jsx';
import articles from '../../assets/article-content.js';

const ArticleListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 border-b border-zinc-200">
        
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          Articles
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Explore the Latest in Music: Reviews, Interviews, and Industry Insights
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Dive into our curated collection of music articles, featuring in-depth reviews, artist interviews, and industry insights. Whether you're a casual listener or a die-hard fan, our content is designed to keep you informed and inspired in the ever-evolving world of music.
        </p>

        <div className="mt-6">
          <Button to="/" variant="secondary">
            Back Home
          </Button>
        </div>

      </section>

      {/* LIST */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Current Highlights
          </h2>
        </div>

        <div className="transition-all duration-300">
          <ArticleList articles={articles} />
        </div>

      </section>

    </div>
  );
};

export default ArticleListPage;