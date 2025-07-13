import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import hero3 from '@/assets/hero-3.jpg';

const Digital = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-auto">
      <Navigation />
      
      <section ref={sectionRef} className="pt-20 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section - Left */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={hero3} 
                  alt="Digital operations control room" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Pattern Overlay */}
              <div className="absolute top-0 left-0 w-1/3 h-full">
                <div className="w-full h-full bg-gradient-to-r from-accent/10 to-transparent opacity-50" 
                     style={{
                       backgroundImage: `repeating-linear-gradient(
                         -45deg,
                         transparent,
                         transparent 10px,
                         hsl(var(--accent) / 0.1) 10px,
                         hsl(var(--accent) / 0.1) 20px
                       )`
                     }}>
                </div>
              </div>
            </div>

            {/* Content Section - Right */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-block">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider border-l-4 border-secondary pl-4">
                  DIGITAL OPERATIONS
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Data-Driven Innovation to 
                <span className="text-secondary"> Elevate Your ROI.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Why wait for tomorrow to optimize efficiencies and boost ESG performance? With NexTier's smart technologies and extensive digital infrastructure, the future is now.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Real-time data analytics and performance monitoring</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">AI-powered predictive maintenance and optimization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Comprehensive ESG performance tracking</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/engineering">
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-white border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
                  >
                    Discover our digital advantage.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Advanced Digital Capabilities</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Leveraging cutting-edge technology to deliver unparalleled insights and operational excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-white/80 text-sm">Instant data processing and visualization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Predictive AI</h3>
              <p className="text-white/80 text-sm">Machine learning for performance optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cloud Infrastructure</h3>
              <p className="text-white/80 text-sm">Scalable and secure data management</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-white rounded-sm"></div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Mobile Access</h3>
              <p className="text-white/80 text-sm">Full functionality on any device</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Digital;