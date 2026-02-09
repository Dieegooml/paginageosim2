const Card = ({
  children,
  className = '',
  hover = false,
  padding = 'default',
}) => {
  const paddings = {
    none: '',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
    : '';

  return (
    <div
      className={`bg-white border border-slate-200 rounded-lg shadow-sm ${paddings[padding]} ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
