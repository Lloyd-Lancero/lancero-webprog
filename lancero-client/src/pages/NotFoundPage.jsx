import { Link } from 'react-router-dom';
import Button from '../components/Button';

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      <section className="bg-zinc-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-b border-zinc-200">

        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-zinc-100 shadow-md">
            <span className="text-2xl font-bold text-zinc-900">404</span>
          </div>

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Page Not Found
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            The page you’re looking for doesn’t exist
          </h1>

          <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
            It may have been moved, deleted, or never existed in this wireframe system.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

            <Button to="/" variant="primary">
              Go Home
            </Button>

            <Button to="/articles" variant="secondary">
              Browse Articles
            </Button>

          </div>

        </div>

      </section>

      <section className="bg-zinc-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">

          {[
            {
              title: 'Check URL',
              desc: 'Make sure the link is correct.',
            },
            {
              title: 'Go Back',
              desc: 'Return to the previous page.',
            },
            {
              title: 'Explore',
              desc: 'Browse available articles and pages.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-center"
            >
              <h3 className="text-sm font-semibold text-zinc-900">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default NotFoundPage;