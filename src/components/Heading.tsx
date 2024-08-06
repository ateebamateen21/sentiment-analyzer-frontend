import React from 'react';

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ className, children }) => {
  const baseClasses = 'text-lg font-bold text-gray-900 py-3'; // Default classes

  return (
    <h2 className={`${baseClasses} ${className ? className : ''}`}>
      {children}
    </h2>
  );
}

export default Heading;
