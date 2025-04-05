
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { CalendarIcon, MapPin, Users } from 'lucide-react';
import { format } from 'date-fns';

const SearchBar = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [guests, setGuests] = useState("2 adults, 0 children");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search parameters:", { destination, checkInDate, checkOutDate, guests });
    // TODO: Implement search functionality
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSearch} className="space-y-4 md:space-y-0 md:flex md:space-x-4 items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkInDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkInDate ? format(checkInDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkInDate}
                onSelect={setCheckInDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !checkOutDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOutDate ? format(checkOutDate, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOutDate}
                onSelect={setCheckOutDate}
                initialFocus
                className="pointer-events-auto"
              />
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start text-left font-normal">
                <Users className="mr-2 h-4 w-4" />
                <span>{guests}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Adults</p>
                    <p className="text-sm text-gray-500">Ages 13 or above</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={() => setGuests(prev => {
                        const [adults, children] = prev.split(", ");
                        const count = parseInt(adults.split(" ")[0]);
                        return count > 1 ? `${count - 1} adults, ${children}` : prev;
                      })}
                    >-</Button>
                    <span>{guests.split(", ")[0].split(" ")[0]}</span>
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={() => setGuests(prev => {
                        const [adults, children] = prev.split(", ");
                        const count = parseInt(adults.split(" ")[0]);
                        return `${count + 1} adults, ${children}`;
                      })}
                    >+</Button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Children</p>
                    <p className="text-sm text-gray-500">Ages 0-12</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={() => setGuests(prev => {
                        const [adults, children] = prev.split(", ");
                        const count = parseInt(children.split(" ")[0]);
                        return count > 0 ? `${adults}, ${count - 1} children` : prev;
                      })}
                    >-</Button>
                    <span>{guests.split(", ")[1].split(" ")[0]}</span>
                    <Button 
                      size="icon" 
                      variant="outline"
                      onClick={() => setGuests(prev => {
                        const [adults, children] = prev.split(", ");
                        const count = parseInt(children.split(" ")[0]);
                        return `${adults}, ${count + 1} children`;
                      })}
                    >+</Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        
        <div className="flex-none">
          <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white">
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
