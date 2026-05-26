import Button from '../../components/Button';
import header from '../../assets/imgs/header.png';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      {/* HERO */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 border-b border-zinc-200">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          
          <div> 
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Welcome to Echo Music
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              "Your Ultimate Destination for Honest Music Reviews"
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Discover legendary artists, timeless albums, and unforgettable tracks. Explore our curated collection of music history and find your next favorite song.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-100 overflow-hidden shadow-md hover:shadow-xl transition duration-300">
            <img src={header} alt="header" className="object-cover w-full h-full hover:scale-105 transition duration-300" />
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
            Overall Summary Reviews
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">25+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Music Genres
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">50+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Different Artists
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">200+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Songs Reviewed
            </p>
          </div>

          <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <p className="text-2xl font-bold text-zinc-900">100+</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Albums Reviewed
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-zinc-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Feature Section
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Why Choose Echo Music?
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-200 transition" />
            <h3 className="text-xl font-bold text-zinc-900">Top tier Critics</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Our team of expert critics provides in-depth analysis and honest opinions on a wide range of music.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-200 transition" />
            <h3 className="text-xl font-bold text-zinc-900">Reliable Reviews</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              We provide honest and unbiased reviews to help you discover new music and make informed listening choices.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-200 transition" />
            <h3 className="text-xl font-bold text-zinc-900">Wide Selection</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              We cover a wide range of music genres, from classic rock to hip-hop, ensuring there's something for every music lover.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HomePage;