
import React from 'react';
import { Button } from "@/components/ui/button";
import { BadgeDollarSign, ShoppingBag, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-lovable-pink/10 to-lovable-light-pink/10 py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Lovable Earn Hub</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-2">
              Jahan Har Click Mein <span className="text-lovable-pink">Earning</span> Hai
            </p>
            <p className="text-gray-600 mb-6 max-w-lg">
              Your one-stop platform for multiple earning opportunities - affiliate shopping, freelancing, referrals, digital products, and more!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button 
                className="bg-lovable-pink hover:bg-lovable-pink-hover text-white"
                onClick={() => window.open('https://t.me/lovable_earn', '_blank')}
              >
                Join Telegram Channel
              </Button>
              <Button 
                variant="outline" 
                className="border-lovable-pink text-lovable-pink hover:bg-lovable-pink hover:text-white"
              >
                Explore Opportunities
              </Button>
            </div>

            <div className="flex items-center space-x-6 mt-8">
              <div className="flex items-center">
                <div className="bg-lovable-pink/20 p-2 rounded-full">
                  <ShoppingBag className="h-5 w-5 text-lovable-pink" />
                </div>
                <div className="ml-2">
                  <p className="font-semibold">Shopping Deals</p>
                  <p className="text-xs text-gray-500">100+ Offers</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-lovable-pink/20 p-2 rounded-full">
                  <BadgeDollarSign className="h-5 w-5 text-lovable-pink" />
                </div>
                <div className="ml-2">
                  <p className="font-semibold">Free eBooks</p>
                  <p className="text-xs text-gray-500">50+ Downloads</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md relative z-10">
                <div className="absolute -top-4 -left-4 bg-lovable-pink text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse-slow">
                  NEW
                </div>
                <h3 className="text-lg font-bold mb-4">Daily Payment Proof</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="bg-green-100 p-2 rounded-full">
                      <Users className="h-4 w-4 text-green-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Anshul earned ₹1,500</p>
                      <p className="text-xs text-gray-500">via Freelancing</p>
                    </div>
                    <p className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Today
                    </p>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <ShoppingBag className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Priya earned ₹680</p>
                      <p className="text-xs text-gray-500">via Affiliate Shopping</p>
                    </div>
                    <p className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Yesterday
                    </p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gradient-to-r from-lovable-pink to-lovable-light-pink text-white"
                  onClick={() => window.open('https://t.me/lovable_earn', '_blank')}
                >
                  Join 5,000+ Earners
                </Button>
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full bg-lovable-pink/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
