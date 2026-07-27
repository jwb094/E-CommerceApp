import React from 'react';

function PageLoader(props) {
    return (
                 <div className="flex flex-col items-center justify-center">
      <div className="
        h-10 w-10
        animate-spin
        rounded-full
        border-4
        border-gray-300
        border-t-blue-600
      ">
      </div>
        <p className="mt-4 text-gray-600">
  Searching ...
 </p>
    </div>
    );
}

export default PageLoader;