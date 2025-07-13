import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Navigation from '@/components/Navigation';
import hero1 from '@/assets/hero-1.jpg';
import hero2 from '@/assets/hero-2.jpg';
import hero3 from '@/assets/hero-3.jpg';
import hero4 from '@/assets/hero-4.jpg';
import img01 from '@/assets/img01.jpg';
import img02 from '@/assets/img02.jpg';
import img03 from '@/assets/img03.jpg';
import img04 from '@/assets/img04.jpg';

import worldMap from '@/assets/world-map.jpg';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toast } = useToast();
  
  const operationsRef = useRef<HTMLElement>(null);
  const digitalRef = useRef<HTMLElement>(null);
  const engineeringRef = useRef<HTMLElement>(null);
  const technologyRef = useRef<HTMLElement>(null);
  const locationsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

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

  const locations = [
    { name: 'North Dakota', lat: 47.5, lng: -100.5, description: 'Bakken Shale Operations' },
    { name: 'Texas', lat: 31.5, lng: -99.5, description: 'Permian Basin Hub' },
    { name: 'Oklahoma', lat: 35.5, lng: -97.5, description: 'SCOOP/STACK Operations' },
    { name: 'Pennsylvania', lat: 41, lng: -77.5, description: 'Marcellus Shale' },
    { name: 'Colorado', lat: 39.5, lng: -105.5, description: 'DJ Basin Operations' },
    { name: 'Louisiana', lat: 31, lng: -92, description: 'Haynesville Operations' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background overflow-auto">
      <Navigation 
        scrollToSection={scrollToSection}
        refs={{
          operations: operationsRef,
          digital: digitalRef,
          engineering: engineeringRef,
          technology: technologyRef,
          locations: locationsRef,
          contact: contactRef
        }}
      />
      
      {/* Hero Section with Image Carousel */}
      <section id="home" className="relative min-h-screen overflow-hidden">
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
            <div className="absolute inset-0 backdrop-blur-2 " />
            
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-3xl">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
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
                    onClick={() => scrollToSection(operationsRef)}
                  >
                    Learn more.
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </div>
      </section>

      {/* Quick Stats Section */}
      {/* <section className="py-20 bg-primary text-white">
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
      </section> */}

      {/* Operations Section */}
      <section ref={operationsRef} id="operations" className="pt-20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                WIRELINE
                <br />
                <span className="text-secondary">OPERATIONS</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Industry-leading wireline operations with cutting-edge technology and unmatched expertise. 
                Our experienced teams deliver reliable, efficient solutions for all your downhole needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-lg">Advanced logging technologies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-lg">24/7 operational support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-lg">Expert field personnel</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 group"
                onClick={() => scrollToSection(digitalRef)}
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Image - Right */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
                <img 
                  src={hero1} 
                  alt="Wireline Operations" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-secondary rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Section */}
      <section ref={digitalRef} id="digital" className="pt-20 py-16 lg:py-24 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl overflow-hidden">
                <img 
                  src={hero2} 
                  alt="Digital Innovation" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-accent rounded-full opacity-30"></div>
            </div>
            
            {/* Content - Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-secondary rounded-full"></div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                DIGITAL
                <br />
                <span className="text-primary">INNOVATION</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform your operations with our cutting-edge digital solutions. Real-time data analytics, 
                AI-powered insights, and automated workflows that maximize efficiency and ROI.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Real-time data analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">AI-powered optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-lg">Predictive maintenance</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 group"
                onClick={() => scrollToSection(engineeringRef)}
              >
                Discover Digital Solutions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section ref={engineeringRef} id="engineering" className="pt-20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content - Left */}
            <div className="space-y-6">
              <div className="inline-block">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-accent border-2 border-secondary rounded-full"></div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                PRECISION
                <br />
                <span className="text-accent">ENGINEERING</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                World-class engineering solutions designed for the most challenging environments. 
                Our innovative approach delivers exceptional performance and reliability.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-lg">Custom engineering solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-lg">Advanced simulation modeling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-lg">Quality assurance protocols</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 group"
                onClick={() => scrollToSection(technologyRef)}
              >
                Engineering Excellence
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Image - Right */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl overflow-hidden">
                <img 
                  src={hero3} 
                  alt="Precision Engineering" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-full opacity-20"></div>
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section ref={technologyRef} id="technology" className="pt-20 py-16 lg:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image - Left */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
                <img 
                  src={hero4} 
                  alt="Advanced Technology" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-30"></div>
            </div>
            
            {/* Content - Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full border-2 border-accent"></div>
                </div>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                ADVANCED
                <br />
                <span className="text-secondary">TECHNOLOGY</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay ahead with our state-of-the-art technology platform. From automation to 
                artificial intelligence, we leverage the latest innovations to drive success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-lg">Automated systems integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-lg">Machine learning algorithms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-lg">Cloud-based solutions</span>
                </div>
              </div>
              <Button 
                size="lg" 
                className="mt-8 group"
                onClick={() => scrollToSection(locationsRef)}
              >
                Technology Platform
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section ref={locationsRef} id="locations" className="pt-20 py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full border-2 border-accent"></div>
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              When It Comes to Shale,
              <br />
              <span className="text-accent">We're Everywhere.</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Strategic locations across major shale plays ensure we're always close to your operations.
            </p>
          </div>

          {/* Interactive Map Section */}
          <div className="relative mb-16">
            {/* Map Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gray-800">
              <img 
                src={worldMap} 
                alt="NexTier Locations Map" 
                className="w-full h-[600px] object-cover opacity-90"
              />
              
              {/* Location Markers */}
              {locations.map((location, index) => (
                <div
                  key={location.name}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
                  style={{
                    left: `${((location.lng + 180) / 360) * 100}%`,
                    top: `${((90 - location.lat) / 180) * 100}%`,
                  }}
                >
                  <div className="w-4 h-4 bg-secondary rounded-full border-2 border-white shadow-lg hover:scale-125 transition-transform duration-200">
                    <div className="w-full h-full bg-secondary rounded-full animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                    <div className="bg-white text-primary px-3 py-2 rounded-lg shadow-lg text-sm font-semibold whitespace-nowrap">
                      <div className="text-foreground">{location.name}</div>
                      <div className="text-xs text-muted-foreground">{location.description}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <h3 className="text-sm font-semibold text-foreground mb-2">NexTier Locations</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Active Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locations Grid */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Strategic Locations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Positioned across North America's most productive shale formations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <div key={location.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                  <h3 className="text-xl font-bold text-foreground">{location.name}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{location.description}</p>
                <div className="text-sm text-secondary font-semibold">
                  Active Operations
                </div>
              </div>
            ))}
          </div>

          {/* Coverage Stats */}
          <div className="py-16 bg-primary text-white rounded-2xl">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-lg text-white/80">Active Locations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">12</div>
                  <div className="text-lg text-white/80">States Coverage</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-lg text-white/80">Operations</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-lg text-white/80">Coverage Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="pt-20 py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground">
              GET IN
              <br />
              <span className="text-primary">TOUCH</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your operations? Let's discuss how our solutions can drive your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      placeholder="Your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      type="text" 
                      required 
                      placeholder="Your last name"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    required 
                    placeholder="your.email@company.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your company name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea 
                    required 
                    placeholder="Tell us about your project or requirements..."
                    className="w-full min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Connect with our team to explore how we can support your operational goals.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">24/7 Emergency Line</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@nextieroilfield.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Headquarters</h3>
                    <p className="text-muted-foreground">
                      123 Energy Boulevard<br />
                      Houston, TX 77002<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="text-foreground font-medium">8:00 AM - 6:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="text-foreground font-medium">9:00 AM - 2:00 PM CST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="text-foreground font-medium">Emergency Only</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
