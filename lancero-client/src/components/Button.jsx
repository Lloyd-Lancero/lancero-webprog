import { Link } from 'react-router-dom' ;

const variantClasses = {
    primary:
    'bg-[#cf3636] text-zinc-100 hover:bg-[#cf3636]/75 hover:shadow-lg hover:-translate-y-0.5',
    secondary:
    'bg-[#000080] text-zinc-100 hover:bg-[#000080]/75 hover:shadow-md hover:-translate-y-0.5',
};

const Button = ({
    children,
    to,
    type = 'button',
    variant = 'secondary',
    className = '',
}) => {
    const classes = ['inline-flex items-center justify-center rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
        variantClasses[variant],
    ]
    .join(' ')
    .trim();
    
    if (to) {
        return (
        <Link to={to} className={classes}>
            {children}
        </Link>
        );
    }
    
    return (
        <button type={type} className={classes}>
            {children}
        </button>
    );
};

export default Button; 