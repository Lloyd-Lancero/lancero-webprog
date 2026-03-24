import { NavLink } from "react-router-dom";

import logo from '../assets/imgs/logo.png';

const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) => 
    [
        'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
        isActive
        ? 'border-zinc-100 bg-[#cf3636] text-zinc-50'
        : 'border-transparent text-zinc-500 hover:shadow-inner hover:bg-zinc-200 hover:text-zinc-90',
    ].join(' ');

const NavBar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 drop-shadow-lg bg-zinc-100/95 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <NavLink to="/" className="flex items-center gap-3">
                    <div className="space-y-0.5">
                        <div className='h-10 w-10 rounded-3x1'>
                        <img src={logo} alt="" className= 'object-contain w-full h-full'/>
                        </div>
                    </div>
                </NavLink>

                <nav className="hidden items-center gap-2 md:flex">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default NavBar;