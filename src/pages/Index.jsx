
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import HotelCard from '../components/HotelCard';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

// Sample hotel data
const hotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "Paris, France",
    price: 199,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    amenities: ["Free WiFi", "Spa", "Pool"],
    discount: 15
  },
  {
    id: 2,
    name: "Blue Ocean Resort",
    location: "Bali, Indonesia",
    price: 149,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    amenities: ["Beach Access", "Breakfast", "Gym"],
    discount: null
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    price: 249,
    image: "https://images.unsplash.com/photo-1587843618976-5c5c99021f8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    amenities: ["Ski Access", "Fireplace", "Hot Tub"],
    discount: 10
  },
  {
    id: 4,
    name: "City Lights Hotel",
    location: "New York, USA",
    price: 299,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    amenities: ["City View", "Restaurant", "Bar"],
    discount: null
  }
];

// Sample package data
const packages = [
  {
    id: 1,
    title: "Paris Romance Week",
    image: "https://images.unsplash.com/photo-1471623600842-5f44a3df1f0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 999,
    duration: "7 days",
    description: "Experience the romance of Paris with luxury accommodations and guided tours."
  },
  {
    id: 2,
    title: "Bali Beach Retreat",
    image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1299,
    duration: "10 days",
    description: "Relax on pristine beaches and immerse yourself in Balinese culture."
  },
  {
    id: 3,
    title: "Alpine Adventure",
    image: "https://images.unsplash.com/photo-1486577203334-fd7db6eb4ff1?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1499,
    duration: "8 days",
    description: "Hiking, skiing, and breathtaking views in the Swiss Alps."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Main content */}
      <main className="flex-grow pt-16">
        {/* Hero section with search */}
        <HeroSection />
        
        {/* Featured destinations */}
        <FeaturedDestinations />
        
        {/* Hotels and packages tabs section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Find Your Perfect Stay</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Browse our curated selection of hotels and travel packages designed for every type of traveler
              </p>
            </div>
            
            <Tabs defaultValue="hotels" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="hotels">Hotels</TabsTrigger>
                <TabsTrigger value="packages">Vacation Packages</TabsTrigger>
              </TabsList>
              <TabsContent value="hotels">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Button variant="outline" className="rounded-full px-8">
                    View All Hotels
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="packages">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg) => (
                    <Card key={pkg.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <img 
                          src={pkg.image} 
                          alt={pkg.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                        <div className="flex items-center mb-3">
                          <span className="text-2xl font-bold text-primary">${pkg.price}</span>
                          <span className="text-gray-500 text-sm ml-1">/ person</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                            {pkg.duration}
                          </span>
                          <Button size="sm">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Button variant="outline" className="rounded-full px-8">
                    View All Packages
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Testimonials section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from travelers who have experienced our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="bg-white p-6 shadow-sm">
                  <div className="flex items-center space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-gray-600 mb-4">
                    "TravelEase made planning our vacation so simple. The hotel was exactly as described, and the customer service was exceptional. We'll definitely use them for our next trip!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">Sarah Johnson</p>
                      <p className="text-sm text-gray-500">Paris, France</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Plan Your Next Adventure?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join thousands of happy travelers who book with us every day
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              Start Planning Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
