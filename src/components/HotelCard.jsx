
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin } from 'lucide-react';

const HotelCard = ({ hotel }) => {
  const { name, location, price, image, rating, amenities, discount } = hotel;
  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };
  
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="h-48 w-full object-cover"
        />
        {discount && (
          <Badge className="absolute top-2 right-2 bg-secondary">
            {discount}% OFF
          </Badge>
        )}
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{name}</CardTitle>
          <div className="flex items-center space-x-1">
            <span className="text-sm">{rating}</span>
            <span className="flex">{renderStars(rating)}</span>
          </div>
        </div>
        <CardDescription className="flex items-center text-sm">
          <MapPin size={14} className="mr-1" />
          {location}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {amenities && amenities.map((amenity, index) => (
            <Badge key={index} variant="outline" className="bg-gray-100 text-gray-700">
              {amenity}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between">
        <div>
          <span className="text-2xl font-bold text-primary">${price}</span>
          <span className="text-gray-500 text-sm"> / night</span>
        </div>
        <Button size="sm" className="bg-primary hover:bg-primary/90">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
