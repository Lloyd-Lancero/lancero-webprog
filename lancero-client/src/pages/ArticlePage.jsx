import Button from '../components/Button';

import wireframe1 from '../assets/imgs/wireframe1.webp';
import wireframe2 from '../assets/imgs/wireframe2.webp';
import wireframe3 from '../assets/imgs/wireframe3.png';
import wireframe4 from '../assets/imgs/wireframe4.png';

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="shadow-xl bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Articles
          </p>
          <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            Featured articles in a simple card grid
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
            A clean wireframe section for article thumbnails, titles, short descriptions, and one clear action per card.
          </p>
          <div className="mt-6">
            <Button to="/">Back Home</Button>
          </div>
        </div>
      </section>

      <section className="shadow-xl bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Articles
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Article card grid
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-3xl drop-shadow-md bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={wireframe1} className= 'object-contain w-full h-full p-5'/>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 01
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Wireframe layout basics
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A simple placeholder for a featured article with image, title, and short copy.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl drop-shadow-md bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={wireframe4} className= 'object-contain w-full h-full p-5'/>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 02
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Building clean sections
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Another card using the same layout pattern for a consistent article grid.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl drop-shadow-md bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={wireframe2} className= 'object-contain w-full h-full p-5'/>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 03
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Using Cards and Lists
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              The same low-fidelity treatment keeps the card section easy to scan.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>

          <article className="rounded-3xl drop-shadow-md bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200">
              <img src={wireframe3} className= 'object-contain w-full h-full p-5'/>
            </div>
            <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Article 04
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900">
              Low-fidelity article flow
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A final article card to complete the featured grid layout.
            </p>
            <Button className="mt-4">Read More</Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;