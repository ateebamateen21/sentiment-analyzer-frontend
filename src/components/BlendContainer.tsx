// src/components/BlendContainer.tsx

interface BlendContainerProps {
  children: React.ReactNode;
}

const BlendContainer: React.FC<BlendContainerProps> = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      {children}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-b from-blue-500 to-gray-200" />
    </div>
  );
};

export default BlendContainer;