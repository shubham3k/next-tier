import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import hero2 from '@/assets/hero-2.jpg';

const Operations = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-left');
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
            {/* Content Section - Left */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-sm font-semibold text-secondary uppercase tracking-wider border-l-4 border-secondary pl-4">
                  INTEGRATED COMPLETIONS
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Creating Operational Synergies.
                <br />
                <span className="text-secondary">Adding Oilfield Value.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                The complete package to enhance your frac success: NexTier wireline, pumpdown, NG fueling and logistics – fully integrated by our NexHub™ Digital Center.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Advanced wireline technology with real-time monitoring</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Integrated pumpdown and NG fueling solutions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Comprehensive logistics and support services</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/digital">
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-white border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
                  >
                    Explore our superior services.
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Section - Right */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={hero2} 
                  alt="Industrial operations" 
                  className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
              </div>
              
              {/* Pattern Overlay */}
              <div className="absolute top-0 right-0 w-1/3 h-full">
                <div className="w-full h-full bg-gradient-to-l from-accent/10 to-transparent opacity-50" 
                     style={{
                       backgroundImage: `repeating-linear-gradient(
                         45deg,
                         transparent,
                         transparent 10px,
                         hsl(var(--accent) / 0.1) 10px,
                         hsl(var(--accent) / 0.1) 20px
                       )`
                     }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-primary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Wireline Excellence</h3>
              <p className="text-muted-foreground">Industry-leading wireline technology with unmatched reliability and precision.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-secondary rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Integrated Solutions</h3>
              <p className="text-muted-foreground">Complete service integration for maximum operational efficiency and cost savings.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-accent rounded-sm"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Digital Center</h3>
              <p className="text-muted-foreground">NexHub™ Digital Center provides real-time monitoring and analytics.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Operations;