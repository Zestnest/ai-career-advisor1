import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-16 h-16 border-4 border-brand-secondary border-t-transparent border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-lg text-text-secondary font-semibold">Generating your personalized career plan...</p>
      <p className="text-sm text-text-secondary/80">This may take a moment.</p>
    </div>
  );
};

export default Loader;
