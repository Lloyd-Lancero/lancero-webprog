import Button from '../../components/Button';

import header2 from '../../assets/imgs/header2.png';
import wireframe1 from '../../assets/imgs/wireframe1.webp';
import wireframe2 from '../../assets/imgs/wireframe2.webp';
import wireframe3 from '../../assets/imgs/wireframe3.png';
import wireframe4 from '../../assets/imgs/wireframe4.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 border-b border-zinc-200">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          <div className="rounded-3xl bg-zinc-100 overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img
              src={header2}
              className="object-cover w-full h-full hover:scale-105 transition duration-300"
              alt="header"
            />
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Section
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              A profile wireframe focused on layout, spacing, and content grouping.
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              This page follows the same low-fidelity system as the homepage with a simple hero, 
              overview blocks, and supporting sections for profile details.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles" variant="secondary">
                Open Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* KPI */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 border-b border-zinc-200">

        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Profile Overview
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick summary blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">05</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">16</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">09</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Clients
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">03</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Focus Areas
            </p>
          </div>
        </div>
      </section>

      {/* SECTION FLOW */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Section Flow
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Stacked content wireframe
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-lg font-semibold text-zinc-900">Intro Block</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  A simple opening area for biography, role, or supporting information.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-lg font-semibold text-zinc-900">Experience Block</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Repeated section styling keeps the page readable and easy to extend.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-lg font-semibold text-zinc-900">Details Block</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Another placeholder area for skills, notes, or references.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={wireframe1} className="object-cover w-full h-full" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={wireframe2} className="object-cover w-full h-full" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={wireframe3} className="object-cover w-full h-full" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={wireframe4} className="object-cover w-full h-full" />
              </div>

            </div>
            <div className="mt-5">
              <Button to="/articles" variant="secondary">
                View Section
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;