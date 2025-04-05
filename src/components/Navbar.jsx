
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { UserRound, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">T</div>
            <span className="text-xl font-bold text-gray-800">TravelEase</span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Hotels</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Flights</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Packages</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors">Deals</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="flex items-center">
            <UserRound size={18} className="mr-2" />
            My Account
          </Button>
          <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute w-full z-50 py-4 px-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-600 hover:text-primary py-2 transition-colors">Hotels</a>
            <a href="#" className="text-gray-600 hover:text-primary py-2 transition-colors">Flights</a>
            <a href="#" className="text-gray-600 hover:text-primary py-2 transition-colors">Packages</a>
            <a href="#" className="text-gray-600 hover:text-primary py-2 transition-colors">Deals</a>
            <div className="pt-4 border-t border-gray-200">
              <Button variant="outline" className="w-full mb-2 flex items-center justify-center">
                <UserRound size={18} className="mr-2" />
                My Account
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
