import Button from '../../components/Button';

import sc from '../../assets/imgs/sc.png';
import tiktok from '../../assets/imgs/tiktok.png';
import ai from '../../assets/imgs/ai.png';
import vynil from '../../assets/imgs/vynil.png';

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 border-b border-zinc-200">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About Section
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Uncover the Stories Behind the Music
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              At our core, we are passionate music enthusiasts dedicated to sharing our love for music with the world. With over a decade of experience in the industry, we have built a reputation for delivering insightful analysis, engaging artist spotlights, and comprehensive coverage of the music scene. Our team of expert writers and critics are committed to providing high-quality content that resonates with music lovers of all backgrounds.
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
            Key Metrics
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Credentials
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">10</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years in the industry
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">30+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Awards
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">98%</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Ratings
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">15+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Team Members
            </p>
          </div>
        </div>
      </section>

      {/* SECTION FLOW */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              What We Offer
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Music Analysis, Artist Spotlights, and Industry Insights
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-lg font-semibold text-zinc-900">Music Analysis</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Detailed reviews of the latest albums, singles, and live performances across all genres.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-lg font-semibold text-zinc-900">Artist Spotlights</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  In-depth features on emerging and established artists, their careers, and creative processes.
                </p>
              </article>

              <article className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <h3 className="text-lg font-semibold text-zinc-900">Industry Insights</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Analysis of trends, news, and developments in the music industry.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-zinc-900 tracking-tight">
                Recent Updates
                </h2>
                <p className="text-sm text-zinc-500 mt-1">
                  Check out our latest layout mockups and changes.
                  </p>
                  </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={sc} className="object-cover w-full h-full" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={tiktok} className="object-cover w-full h-full" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={ai} className="object-cover w-full h-full" />
              </div>
              <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden hover:scale-105 transition duration-300">
                <img src={vynil} className="object-cover w-full h-full" />
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