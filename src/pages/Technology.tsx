import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import hero2 from '@/assets/hero-2.jpg';

const Technology = () => {
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
                  src={hero2} 
                  alt="Advanced technology" 
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
                  TECHNOLOGY LEADERSHIP
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Innovation That 
                <span className="text-secondary"> Drives Results.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                At the forefront of oilfield technology, we develop and deploy solutions that push the boundaries of what's possible in energy operations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Next-generation drilling and completion technologies</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Automated systems for enhanced safety and efficiency</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Sustainable solutions for environmental responsibility</p>
                </div>
              </div>
              
              <div className="pt-6">
                <Link to="/locations">
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-white border-0 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105"
                  >
                    Discover our locations.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Innovation Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Technology Innovation</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Pioneering the future of energy with breakthrough technologies and intelligent solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Smart Automation</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Our intelligent automation systems reduce human error, increase operational efficiency, and provide real-time insights for optimal decision-making.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white/90">Autonomous drilling systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white/90">Predictive maintenance protocols</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white/90">Intelligent resource optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Environmental Technology</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Leading the industry in sustainable practices with advanced environmental monitoring and emission reduction technologies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white/90">Carbon capture and storage</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white/90">Water recycling systems</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-white/90">Renewable energy integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;