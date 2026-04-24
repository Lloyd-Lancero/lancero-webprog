import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-lg font-bold text-zinc-900">
            Wireframe Studio
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-600">
            A clean wireframe system built for structured layouts, scalable UI components, and consistent design patterns.
          </p>
        </div>

        {/* NAV LINKS */}
        <div className="grid grid-cols-2 gap-6">

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
                <Link className="hover:text-zinc-900 transition" to="/articles">
                  Articles
                </Link>
              </li>
            </ul>
          </div>

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
              <li>
                <Link className="hover:text-zinc-900 transition" to="/articles">
                  Latest Posts
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* CTA BOX */}
        <div className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-lg transition-all duration-200">

          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Stay Updated
          </p>

          <h3 className="mt-2 text-lg font-semibold text-zinc-900">
            Get the latest updates
          </h3>

          <p className="mt-2 text-sm text-zinc-600">
            Subscribe to keep track of new articles and system updates.
          </p>

          <div className="mt-4 flex gap-2">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full rounded-xl border border-zinc-300 bg-zinc-100 px-3 py-2 text-sm outline-none transition focus:bg-white focus:border-zinc-900"
            />
            <button className="rounded-xl bg-zinc-900 px-4 text-sm text-white hover:bg-zinc-800 transition">
              Join
            </button>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mx-auto mt-10 max-w-6xl border-t border-zinc-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">

        <p>© {new Date().getFullYear()} Wireframe Studio. All rights reserved.</p>

        <div className="flex gap-4">
          <Link className="hover:text-zinc-900 transition" to="/">
            Privacy
          </Link>
          <Link className="hover:text-zinc-900 transition" to="/">
            Terms
          </Link>
        </div>

      </div>

    </footer>
  );
};

export default Footer;