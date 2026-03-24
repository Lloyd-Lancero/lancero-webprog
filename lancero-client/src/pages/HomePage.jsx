import Button from '../components/Button';

import header from '../assets/imgs/header.png';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="drop-shadow-md bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div> 
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Hero Section
            </p>
            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Welcome to Wireframe Studio Layout
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Discover the art of wireframing with a simple layout system for hero content, key numbers, and feature cards.
            </p>
            <div className="mt-6">
              <Button to="/about" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <div className="rounded-3xl bg-zinc-100 overflow-hidden">
              <img src={header} className= 'object-contain w-full h-full' />
            </div>
        </div>
      </section>

      <section className="drop-shadow-md bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick overview blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl drop-shadow-md bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>


          <div className="rounded-3xl drop-shadow-md bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Sections
            </p>
          </div>

          <div className="rounded-3xl drop-shadow-md bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Screens
            </p>
          </div>

          <div className="rounded-3xl drop-shadow-md bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Layouts
            </p>
          </div>
        </div>
      </section>

      <section className="drop-shadow-md bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Section
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Simple wireframe cards
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl drop-shadow-md bg-zinc-100 p-6">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-200" />
            <h3 className="text-xl font-bold text-zinc-900">Clean Layout</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              A minimalist approach to building interfaces with clear visual hierarchy.
            </p>
          </div>
          <div className="rounded-3xl drop-shadow-md bg-zinc-100 p-6">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-200" />
            <h3 className="text-xl font-bold text-zinc-900">Responsive</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Designed to work seamlessly across mobile, tablet, and desktop screens.
            </p>
          </div>
          <div className="rounded-3xl drop-shadow-md bg-zinc-100 p-6">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-200" />
            <h3 className="text-xl font-bold text-zinc-900">Modular</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Easily extendable component-based structure for rapid prototyping.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;