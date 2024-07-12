import React from "react";

function page() {
  return (
    <div className="bg-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-gray-800">
                MySite
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Scroll down to see the navbar stay fixed at the top
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
            malesuada...
          </p>

          <div className="h-screen"></div>
          <div className="h-screen"></div>
        </div>
      </div> 
    </div>
  );
}

export default page;
