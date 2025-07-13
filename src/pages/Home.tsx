import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import img01 from '@/assets/img01.jpg';
import img02 from '@/assets/img02.jpg';
import img03 from '@/assets/img03.jpg';
import img04 from '@/assets/img04.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: img01,
      title: "WE'RE WIRED DIFFERENTLY.",
      subtitle: "Delivering an unbeatable combination of wireline experience, expertise and equipment. Every time.",
      delay: 0
    },
    {
      image: img02,
      title: "INTEGRATED COMPLETIONS",
      subtitle: "Creating Operational Synergies. Adding Oilfield Value.",
      delay: 1000
    },
    {
      image: img03,
      title: "DIGITAL OPERATIONS",
      subtitle: "Data-Driven Innovation to Elevate Your ROI.",
      delay: 2000
    },
    {
      image: img04,
      title: "NEXTIER LOCATIONS",
      subtitle: "When It Comes to Shale, We're Everywhere.",
      delay: 3000
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-background overflow-auto ">
      <Navigation />
      
      {/* Hero Section with Image Carousel */}
      <section className="relative min-h-screen overflow-hidden opacity-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
            }`}
            style={{ animationDelay: `${slide.delay}ms` }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom-out"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 animate-fade-in-up">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary animate-fade-in-up"
                    style={{ animationDelay: '0.4s' }}
                  >
                    Learn more.
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div> */}
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg text-white/80">Years Experience</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg text-white/80">Successful Projects</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg text-white/80">Locations</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;