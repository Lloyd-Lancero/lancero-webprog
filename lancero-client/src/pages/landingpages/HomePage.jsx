import Button from '../../components/Button';
import header from '../../assets/imgs/header.png';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">

      <section className="relative bg-zinc-900 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 border-b border-zinc-800 overflow-hidden min-h-[450px] flex items-center">
        
        {/* 1. Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img 
            src={header} 
            alt="Music collage background" 
            className="w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-transparent" />
        </div>


        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="max-w-xl"> 
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-400">
              Welcome to Echo Music
            </p>

            <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl drop-shadow-sm">
              "Your Ultimate Destination for Hottest Music News"
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base">
              Stay ahead of the rhythm. Get real-time updates, deep-dive reviews, and exclusive insights into the tracks and trends shaping culture today.
            </p>

            <div className="mt-6">
              <Button to="/about" variant="primary">
                Learn More
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
            Overall Summary
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
            <h3 className="text-xl font-bold text-zinc-900">Top tier Journalists</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Our team of expert journalists provides in-depth news and update on a wide range of music.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 h-12 w-12 rounded-2xl bg-zinc-200 transition" />
            <h3 className="text-xl font-bold text-zinc-900">Reliable Exposé</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              We provide reliable and up-to-date news on the music industry, ensuring you stay informed about the latest happenings.
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