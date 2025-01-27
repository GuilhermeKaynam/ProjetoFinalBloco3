import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pill, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Pill className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                Farmácia Guilherme Kaynam
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/categorias"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Categorias
            </Link>
            <Link
              to="/cadastrarcategorias"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Cadastrar categorias
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Produtos
            </Link>
            <Link
              to="/categories"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Categorias
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
