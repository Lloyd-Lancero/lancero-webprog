import { useParams } from 'react-router-dom';
import Button from '../../components/Button';
import articles from '../../assets/article-content.js';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);

  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">

        <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 border-b border-zinc-200">
          <div className="mx-auto max-w-3xl">

            <h1 className="text-3xl font-bold text-zinc-900">
              Article not found
            </h1>

            <div className="mt-6">
              <Button to="/articles" variant="secondary">
                Back to Articles
              </Button>
            </div>

          </div>
        </section>

      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">

      {/* HEADER */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 border-b border-zinc-200">

        <div className="max-w-3xl">

          <div className="mb-4">
            <Button to="/articles" variant="secondary">
              Back to Articles
            </Button>
          </div>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Article
          </p>

          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {article.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            {article.name
              .split('-')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')}
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

        <div className="mx-auto max-w-3xl">

          {/* IMAGE */}
          <div className="mb-8 rounded-3xl bg-zinc-100 overflow-hidden shadow-md hover:shadow-xl transition duration-300 aspect-4/3">
            <div className="w-full h-full flex items-center justify-center bg-zinc-100">
              <img 
             src={article.imgs}
             alt={article.title}
             className="object-contain"
             />
            </div>
          </div>

          {/* ARTICLE TEXT */}
          <div className="space-y-5 text-zinc-700">

            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-7 text-zinc-700"
              >
                {paragraph}
              </p>
            ))}

          </div>

        
          <div className="mt-8 pt-6 border-t border-zinc-200">

            <Button to="/articles" variant="secondary">
              Back to Articles
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;