
//PATH: src/components/Container.tsx
import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" mx-auto  w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
      {children}
    </div>
  );
};

export default Container;
