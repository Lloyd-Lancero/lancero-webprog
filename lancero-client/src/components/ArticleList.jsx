import { Link } from 'react-router-dom';
import Button from './Button';

const ArticleList = ({ articles }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {articles.map((article, index) => (
        <article
          key={article.name}
          className="rounded-3xl bg-white p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
        >

          <div className="aspect-4/3 flex items-center justify-center rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
          <img 
          src={article.imgs}
          alt={article.title}
          className="object-contain"
          />
          </div>

          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            Article {String(index + 1).padStart(2, '0')}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-zinc-900">
            {article.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {article.content[0].substring(0, 150)}...
          </p>

          <div className="mt-4">
            <Link to={`/articles/${article.name}`}>
              <Button variant="secondary" className="w-full">
                Read More
              </Button>
            </Link>
          </div>

        </article>
      ))}

    </div>
  );
};

export default ArticleList;