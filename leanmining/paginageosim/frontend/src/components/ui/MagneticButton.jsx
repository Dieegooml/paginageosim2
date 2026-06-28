import { useRef, useState, cloneElement } from 'react';

const MagneticButton = ({ children, strength = 0.25, as = 'div', className = '', ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * strength;
    const distY = (e.clientY - centerY) * strength;
    setPosition({ x: distX, y: distY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const child = cloneElement(children, {
    style: {
      ...(children.props.style || {}),
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      willChange: 'transform',
    },
  });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {child}
    </div>
  );
};

export default MagneticButton;
