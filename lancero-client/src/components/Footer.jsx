import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 px-4 py-10 sm:px-6 lg:px-8">

      {/* Changed to lg:grid-cols-4 for better column distribution */}
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND (Spans 2 columns on desktop for optimal text line-length) */}
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold text-zinc-900">
            Echo Music
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600 max-w-md">
            Echo Music is your go-to source for honest and in-depth music analysis. We cover a wide range of genres and artists, helping you discover new music and make informed listening choices.
          </p>
        </div>

        {/* NAVIGATION COLUMN */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Navigation
          </p>

          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>
              <Link className="hover:text-zinc-900 transition" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-zinc-900 transition" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-zinc-100 transition" to="/articles">
                Articles
              </Link>
            </li>
          </ul>
        </div>

        {/* RESOURCES COLUMN */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Resources
          </p>

          <ul className="mt-3 space-y-2 text-sm text-zinc-600">
            <li>
              <Link className="hover:text-zinc-900 transition" to="/auth/signin">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="hover:text-zinc-900 transition" to="/auth/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-zinc-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">

        <p>© {new Date().getFullYear()} Echo Music. All rights reserved.</p>

        <div className="flex gap-4">
          <Link className="hover:text-zinc-900 transition" to="/privacy">
            Privacy
          </Link>
          <Link className="hover:text-zinc-900 transition" to="/terms">
            Terms
          </Link>
        </div>

      </div>

    </footer>
  );
};

export default Footer;