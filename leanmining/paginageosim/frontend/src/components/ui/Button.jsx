import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  href,
  to,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-slate-900 text-white shadow-sm hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-md focus:ring-slate-900',
    secondary: 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-slate-400 hover:shadow-md hover:-translate-y-0.5 focus:ring-slate-500',
    ghost: 'text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 focus:ring-slate-500',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3.5 text-sm tracking-wide',
    large: 'px-8 py-4 text-base tracking-wide',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
