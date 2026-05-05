import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none transition-all duration-200 focus:border-zinc-900 focus:bg-white focus:ring-2 focus:ring-zinc-200';

const actionButtonClassName =
  'w-full rounded-xl py-3 text-[11px] tracking-[0.2em] transition-all duration-200';

const SignInPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Log In
      </h1>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Access your account using the same monochrome wireframe language used across the site.
      </p>

      <form className="mt-8 space-y-5">

        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-500">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600 cursor-pointer">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-zinc-900 transition"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="font-medium text-zinc-700 transition hover:text-zinc-900 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          className={`${actionButtonClassName} hover:shadow-lg hover:-translate-y-0.5`}
          to="/dashboard"
        >
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">

          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} hover:shadow-md hover:-translate-y-0.5`}
          >
            Log In with Google
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={`${actionButtonClassName} hover:shadow-md hover:-translate-y-0.5`}
          >
            Log In with Apple
          </Button>

        </div>

      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{' '}
        <Link
          to="/auth/signup"
          className="font-semibold text-zinc-900 transition hover:text-zinc-600 hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;