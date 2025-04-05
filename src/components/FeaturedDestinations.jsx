
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FeaturedDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      description: "The city of lights and love",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      properties: 1420,
      featured: true
    },
    {
      id: 2,
      name: "Santorini, Greece",
      description: "Beautiful sunsets and blue domes",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      properties: 867,
      featured: false
    },
    {
      id: 3,
      name: "Bali, Indonesia",
      description: "Tropical paradise with rich culture",
      image: "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      properties: 1234,
      featured: true
    },
    {
      id: 4,
      name: "New York, USA",
      description: "The city that never sleeps",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      properties: 2100,
      featured: false
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular destinations and find your next dream vacation spot
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden group cursor-pointer">
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="text-sm opacity-90">{destination.description}</p>
                </div>
                {destination.featured && (
                  <Badge className="absolute top-3 right-3 bg-secondary">
                    Featured
                  </Badge>
                )}
              </div>
              <CardContent className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-600">{destination.properties} properties</span>
                <Button variant="link" className="text-primary p-0">
                  Explore
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="rounded-full px-8">
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
