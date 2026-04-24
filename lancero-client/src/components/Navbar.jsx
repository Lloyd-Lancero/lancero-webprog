import { NavLink } from "react-router-dom";
import logo from '../assets/imgs/logo.png';
import Button from './Button';


const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'relative rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]',
    'transition-all duration-200 ease-out',

    isActive
      ? 'text-zinc-50 bg-[#cf3636] shadow-md after:w-6'
      : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 hover:shadow-sm hover:-translate-y-0.5 hover:after:w-6',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-zinc-100/80 backdrop-blur-md border-b border-zinc-200 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">

        <NavLink to="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl overflow-hidden transition-transform duration-200 group-hover:scale-105">
            <img src={logo} alt="logo" className="object-contain w-full h-full" />
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <Button to="/auth/signin" variant="primary">
        Log Out
        </Button>
      </div>
    </header>
  );
};

export default NavBar;