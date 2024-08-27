import React from "react";

interface MainHeadingProps {
  children: React.ReactNode;
  className?: string;
}

function MainHeading(
    { children, className }: MainHeadingProps
) {
  return (
    <h1 className={`text-5xl font-bold font-main ${className}`}>
      {children}
    </h1>
  );
}

export default MainHeading;
