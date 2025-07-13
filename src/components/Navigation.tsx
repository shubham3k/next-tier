import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  scrollToSection?: (ref: React.RefObject<HTMLElement>) => void;
  refs?: {
    operations: React.RefObject<HTMLElement>;
    digital: React.RefObject<HTMLElement>;
    engineering: React.RefObject<HTMLElement>;
    technology: React.RefObject<HTMLElement>;
    locations: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
}

const Navigation = ({ scrollToSection, refs }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', section: 'home' },
    { name: 'Operations', section: 'operations', ref: refs?.operations },
    { name: 'Digital Solutions', section: 'digital', ref: refs?.digital },
    { name: 'Engineering', section: 'engineering', ref: refs?.engineering },
    { name: 'Technology', section: 'technology', ref: refs?.technology },
    { name: 'Locations', section: 'locations', ref: refs?.locations },
    { name: 'Contact', section: 'contact', ref: refs?.contact },
  ];

  const handleNavClick = (section: string, ref?: React.RefObject<HTMLElement>) => {
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (ref && scrollToSection) {
      scrollToSection(ref);
    }
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-primary">NexTier</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section, item.ref)}
                className="text-sm font-medium transition-colors duration-200 hover:text-primary text-foreground/80"
              >
                {item.name}
              </button>
            ))}
            <Button 
              variant="default" 
              size="sm" 
              className="ml-4"
              onClick={() => handleNavClick('contact', refs?.contact)}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/50">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section, item.ref)}
                  className="block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 text-foreground/80 hover:text-primary hover:bg-primary/5"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleNavClick('contact', refs?.contact)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;