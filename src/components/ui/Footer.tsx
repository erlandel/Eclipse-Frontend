import Messenger, { Facebook,WhatsApp } from "@/icons/Icons";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-1 transition-colors duration-300 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex flex-col items-center sm:flex-row sm:justify-between mt-4">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl mb-5">Eclipse</h2>
              <p className="text-lg">¡Descubre el universo de posibilidades con Eclipse!</p>
            </div>

            <div className="flex flex-col items-center space-y-4 mt-4 sm:mt-0">
              <h2 className="mb-4 text-xl text-center sm:text-left">
                Contactarnos...
              </h2>

              <div className="flex space-x-6">
                <a
                  href="https://wa.me/+5541998370782"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-75"
                >
                  <WhatsApp className="w-6 h-6 cursor-pointer" />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-75"
                >
                  <Facebook className="w-6 h-6 cursor-pointer" />
                </a>             
              
                <a
                  href="https://messenger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 ease-in-out transform hover:scale-110 hover:opacity-75"
                >
                  <Messenger className="w-6 h-6 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4 pt-8 border-t border-gray-700 dark:border-gray-600 text-center">
          <p>© 2024 Equipo Eclipse. Casi todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
