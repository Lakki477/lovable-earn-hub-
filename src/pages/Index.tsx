import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SectionContainer from '@/components/SectionContainer';
import EarningCard from '@/components/EarningCard';
import { 
  ShoppingBag, 
  Users, 
  Briefcase, 
  BookOpen, 
  Download, 
  GraduationCap, 
  Smartphone, 
  DollarSign,
  BadgeDollarSign,
  MessageCircle,
  BookText
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />

      {/* Bachat Shopping Section */}
      <SectionContainer
        id="bachat-shopping"
        title="Bachat Shopping"
        tagline="Shop from your favorite stores & earn cashback with our affiliate links"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EarningCard
            title="Amazon Shopping"
            description="Exclusive cashback deals on electronics, fashion, books & more. Save on every purchase!"
            icon={<ShoppingBag className="h-6 w-6 text-lovable-pink" />}
            buttonText="Shop & Earn Now"
            buttonLink="https://amazon.in"
            isExternal={true}
          />
          <EarningCard
            title="Flipkart Offers"
            description="Special discounts & referral benefits on India's largest online marketplace."
            icon={<ShoppingBag className="h-6 w-6 text-lovable-pink" />}
            buttonText="Shop & Earn Now"
            buttonLink="https://flipkart.com"
            isExternal={true}
          />
          <EarningCard
            title="Ajio Fashion"
            description="Trending fashion at best prices with extra cashback on every purchase."
            icon={<ShoppingBag className="h-6 w-6 text-lovable-pink" />}
            buttonText="Shop & Earn Now"
            buttonLink="https://ajio.com"
            isExternal={true}
          />
        </div>

        <div className="mt-10 bg-lovable-pink/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">Today's Top Deals</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full inline-block mb-2">
                  {Math.floor(Math.random() * 70) + 10}% OFF
                </div>
                <h4 className="font-medium">Deal #{item}</h4>
                <p className="text-sm text-gray-600 mb-3">Limited time offer on electronics</p>
                <Button 
                  className="w-full bg-lovable-pink text-white text-xs py-1"
                  size="sm"
                >
                  Claim Deal
                </Button>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Refer & Earn Section */}
      <SectionContainer
        id="refer-earn"
        title="Refer & Earn"
        tagline="Earn up to ₹1000 per referral by opening Demat accounts"
        background="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EarningCard
            title="AngelOne"
            description="Earn ₹900 per successful referral. India's leading stockbroker with zero brokerage."
            icon={<Users className="h-6 w-6 text-lovable-pink" />}
            buttonText="Open Account Now"
            buttonLink="https://angelone.in"
            bgColor="bg-white"
            isExternal={true}
          />
          <EarningCard
            title="Upstox"
            description="Get ₹800 for each friend who opens a Demat account through your referral link."
            icon={<Users className="h-6 w-6 text-lovable-pink" />}
            buttonText="Open Account Now"
            buttonLink="https://upstox.com"
            bgColor="bg-white"
            isExternal={true}
          />
          <EarningCard
            title="Groww"
            description="Refer friends and earn ₹1000 per successful account opening. Easy investment platform."
            icon={<Users className="h-6 w-6 text-lovable-pink" />}
            buttonText="Open Account Now"
            buttonLink="https://groww.in"
            bgColor="bg-white"
            isExternal={true}
          />
        </div>
        
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-4 text-center">How It Works</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm flex-1 relative">
              <div className="bg-lovable-pink text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -left-3">1</div>
              <h4 className="font-semibold mb-2">Share Your Referral Link</h4>
              <p className="text-gray-600 text-sm">Copy your unique referral link and share it with friends & family</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex-1 relative">
              <div className="bg-lovable-pink text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -left-3">2</div>
              <h4 className="font-semibold mb-2">Friend Opens Account</h4>
              <p className="text-gray-600 text-sm">They complete the Demat account opening process using your link</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm flex-1 relative">
              <div className="bg-lovable-pink text-white text-xl font-bold w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -left-3">3</div>
              <h4 className="font-semibold mb-2">Both Get Rewarded</h4>
              <p className="text-gray-600 text-sm">You earn referral bonus & they get benefits on their new account</p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Freelancing Services */}
      <SectionContainer
        id="freelancing"
        title="Freelancing Services"
        tagline="Quality work at affordable prices - Photo editing, Video editing & more"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-lovable-pink/10 p-6">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm mb-4">
                <Briefcase className="h-6 w-6 text-lovable-pink" />
              </div>
              <h3 className="text-xl font-bold">Photo Editing</h3>
              <div className="mt-2">
                <span className="text-2xl font-bold">₹49</span>
                <span className="text-gray-600 ml-1">per image</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Background removal</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Color correction</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Retouching</span>
                </li>
              </ul>
              <Button className="w-full bg-lovable-pink hover:bg-lovable-pink-hover text-white">
                Order Now
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-lovable-pink/10 p-6">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm mb-4">
                <Briefcase className="h-6 w-6 text-lovable-pink" />
              </div>
              <h3 className="text-xl font-bold">Video Editing</h3>
              <div className="mt-2">
                <span className="text-2xl font-bold">₹149</span>
                <span className="text-gray-600 ml-1">per minute</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Transitions & effects</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Background music</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Color grading</span>
                </li>
              </ul>
              <Button className="w-full bg-lovable-pink hover:bg-lovable-pink-hover text-white">
                Order Now
              </Button>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-lovable-pink/10 p-6">
              <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-sm mb-4">
                <Briefcase className="h-6 w-6 text-lovable-pink" />
              </div>
              <h3 className="text-xl font-bold">Thumbnail Design</h3>
              <div className="mt-2">
                <span className="text-2xl font-bold">₹99</span>
                <span className="text-gray-600 ml-1">per thumbnail</span>
              </div>
            </div>
            <div className="p-6">
              <ul className="space-y-2 mb-4">
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Eye-catching design</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">High CTR optimization</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 p-1 rounded-full mr-2">✓</span>
                  <span className="text-sm">Source file included</span>
                </li>
              </ul>
              <Button className="w-full bg-lovable-pink hover:bg-lovable-pink-hover text-white">
                Order Now
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 rounded-xl bg-lovable-pink/5">
          <h3 className="text-xl font-semibold mb-4">Payment Instructions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg">
              <h4 className="font-medium mb-2">UPI Payment</h4>
              <p className="text-sm text-gray-600 mb-3">
                Send payment to our UPI ID and forward screenshot along with your order details.
              </p>
              <div className="bg-gray-100 p-2 rounded text-center font-medium">
                UPI ID: lovable@upi
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg">
              <h4 className="font-medium mb-2">WhatsApp Support</h4>
              <p className="text-sm text-gray-600 mb-3">
                Contact us directly on WhatsApp for order placement and queries.
              </p>
              <Button 
                className="w-full bg-green-500 hover:bg-green-600 text-white"
                onClick={() => window.open('https://wa.me/919XXXXXXXX', '_blank')}
              >
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* eBook Downloads Section */}
      <SectionContainer
        id="ebooks"
        title="Free eBook Downloads"
        tagline="Access premium knowledge resources at no cost - Motivation, Study, Finance"
        background="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EarningCard
            title="Motivational eBooks"
            description="Access a collection of premium motivational guides that will help you achieve your goals."
            icon={<BookOpen className="h-6 w-6 text-lovable-pink" />}
            buttonText="Download Free"
            buttonLink="#"
            bgColor="bg-white"
          />
          <EarningCard
            title="Study Materials"
            description="Free access to high-quality study guides, notes, and practice papers for various exams."
            icon={<BookText className="h-6 w-6 text-lovable-pink" />}
            buttonText="Download Free"
            buttonLink="#"
            bgColor="bg-white"
          />
          <EarningCard
            title="Finance eBooks"
            description="Learn about personal finance, investing, and wealth creation from expert resources."
            icon={<BookOpen className="h-6 w-6 text-lovable-pink" />}
            buttonText="Download Free"
            buttonLink="#"
            bgColor="bg-white"
          />
        </div>
        
        <div className="mt-10 bg-lovable-pink/20 rounded-xl p-6 md:p-10 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Want Access to 50+ Premium eBooks?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Join our exclusive Telegram channel to get unlimited access to our entire library of premium eBooks and resources.
          </p>
          <Button 
            onClick={() => window.open('https://t.me/lovable_earn', '_blank')}
            className="bg-lovable-pink hover:bg-lovable-pink-hover text-white inline-flex items-center"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Join Telegram Channel
          </Button>
        </div>
      </SectionContainer>

      {/* More Sections - Brief versions for first implementation */}
      <SectionContainer
        id="more-earning"
        title="More Ways to Earn"
        tagline="Discover additional earning opportunities tailored for you"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-lovable-pink/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
              <Download className="h-5 w-5 text-lovable-pink" />
            </div>
            <h3 className="font-bold mb-2" id="paid-apps">Paid Apps (Free)</h3>
            <p className="text-sm text-gray-600 mb-4">
              Premium & modded APKs available via our Telegram channel.
            </p>
            <Button 
              onClick={() => window.open('https://t.me/lovable_earn', '_blank')}
              variant="outline" 
              className="w-full border-lovable-pink text-lovable-pink hover:bg-lovable-pink hover:text-white"
            >
              Get via Telegram
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-lovable-pink/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-lovable-pink" />
            </div>
            <h3 className="font-bold mb-2" id="courses">Paid Courses (Free)</h3>
            <p className="text-sm text-gray-600 mb-4">
              Access premium courses on SEO, editing, programming & more.
            </p>
            <Button 
              variant="outline" 
              className="w-full border-lovable-pink text-lovable-pink hover:bg-lovable-pink hover:text-white"
            >
              Download Now
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-lovable-pink/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
              <Smartphone className="h-5 w-5 text-lovable-pink" />
            </div>
            <h3 className="font-bold mb-2" id="earning-apps">Free Earning Apps</h3>
            <p className="text-sm text-gray-600 mb-4">
              Legitimate mobile apps that pay for simple tasks & activities.
            </p>
            <Button 
              variant="outline" 
              className="w-full border-lovable-pink text-lovable-pink hover:bg-lovable-pink hover:text-white"
            >
              View Apps
            </Button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4 bg-lovable-pink/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-lovable-pink" />
            </div>
            <h3 className="font-bold mb-2" id="no-investment">No-Investment Sites</h3>
            <p className="text-sm text-gray-600 mb-4">
              Start earning online with zero initial investment required.
            </p>
            <Button 
              variant="outline" 
              className="w-full border-lovable-pink text-lovable-pink hover:bg-lovable-pink hover:text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </SectionContainer>

      {/* Telegram CTA Section */}
      <div className="bg-gradient-to-r from-lovable-pink to-lovable-light-pink py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Join 5,000+ Smart Earners Today!
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Get daily earning updates, payment proofs, exclusive deals & offers directly on your phone.
          </p>
          <Button 
            onClick={() => window.open('https://t.me/lovable_earn', '_blank')}
            className="bg-white text-lovable-pink hover:bg-gray-100 px-8"
            size="lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Join @lovable_earn on Telegram
          </Button>
          <div className="mt-6 flex items-center justify-center">
            <BadgeDollarSign className="h-5 w-5 text-white mr-2" />
            <p className="text-white/80 text-sm">
              Over ₹50 Lakhs earned by our community members so far!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
