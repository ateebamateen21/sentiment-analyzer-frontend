// src/components/BlendContainer.tsx



const BlendContainer = ({ children }) => {
    return (
      <div className="relative overflow-hidden">
        {children}
        <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-b from-blue-500 to-gray-200" />
      </div>
    );
  };
  
  export default BlendContainer;
  