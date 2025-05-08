
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { MessageCircle, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lovable-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <h1 className="text-3xl font-bold text-white">LOVABLE</h1>
              <p className="text-sm text-gray-300 mt-1">Jahan Har Click Mein Earning Hai</p>
            </Link>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for multiple earning opportunities online.
            </p>
            <Button
              className="bg-lovable-pink hover:bg-lovable-pink-hover text-white"
              onClick={() => window.open('https://t.me/lovable_earn', '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Join Telegram
            </Button>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#bachat-shopping" className="text-gray-300 hover:text-white transition-colors">
                  Bachat Shopping
                </a>
              </li>
              <li>
                <a href="#refer-earn" className="text-gray-300 hover:text-white transition-colors">
                  Refer & Earn
                </a>
              </li>
              <li>
                <a href="#freelancing" className="text-gray-300 hover:text-white transition-colors">
                  Freelancing Services
                </a>
              </li>
              <li>
                <a href="#ebooks" className="text-gray-300 hover:text-white transition-colors">
                  eBook Downloads
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">More Earnings</h3>
            <ul className="space-y-2">
              <li>
                <a href="#paid-apps" className="text-gray-300 hover:text-white transition-colors">
                  Paid Apps
                </a>
              </li>
              <li>
                <a href="#courses" className="text-gray-300 hover:text-white transition-colors">
                  Paid Courses
                </a>
              </li>
              <li>
                <a href="#earning-apps" className="text-gray-300 hover:text-white transition-colors">
                  Free Earning Apps
                </a>
              </li>
              <li>
                <a href="#no-investment" className="text-gray-300 hover:text-white transition-colors">
                  No-Investment Sites
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Connect With Us</h3>
            <p className="text-gray-300 mb-4">
              Join our Telegram channel for daily updates and exclusive earning opportunities.
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="https://t.me/lovable_earn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lovable-pink hover:text-lovable-light-pink transition-colors flex items-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" /> @lovable_earn
              </a>
              <a
                href="https://youtube.com/@shadow_records0?si=VzoPnGSRDOkzOdWN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lovable-pink hover:text-lovable-light-pink transition-colors flex items-center"
              >
                <Youtube className="h-4 w-4 mr-2" /> Shadow Records
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Lovable. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
