import Navigation from '@/components/Navigation';
import worldMap from '@/assets/world-map.jpg';

const Locations = () => {
  const locations = [
    
    { name: 'Tokyo', lat: 35.6895, lng: 139.6917, description: 'Capital of Japan, Economic Powerhouse' },
    { name: 'Beijing', lat: 39.9042, lng: 116.4074, description: 'Capital of China, Political Center' },
    { name: 'Delhi', lat: 28.6139, lng: 77.2090, description: 'Capital of India, Historical Hub' },
    { name: 'Moscow', lat: 55.7558, lng: 37.6173, description: 'Capital of Russia, Cultural & Political Center' },
    { name: 'New York', lat: 40.7128, lng: -74.0060, description: 'Global Financial Center, USA' },
    { name: 'Washington DC', lat: 38.9072, lng: -77.0369, description: 'Capital of the United States' },
    { name: 'London', lat: 51.5072, lng: -0.1276, description: 'Capital of UK, Global Business Hub' },
    { name: 'Istanbul', lat: 41.0082, lng: 28.9784, description: 'Major City in Turkey, Cultural Crossroads' },
    { name: 'Dubai', lat: 25.2048, lng: 55.2708, description: 'UAE Business and Tourism Hub' }
  ];

  return (
    <div className="min-h-screen bg-background overflow-auto">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-full border-2 border-accent"></div>
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            When It Comes to Shale,
            <br />
            <span className="text-accent">We're Everywhere.</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Strategic locations across major shale plays ensure we're always close to your operations.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative">
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
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Strategic Locations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Positioned across North America's most productive shale formations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-16 bg-primary text-white">
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
      </section>
    </div>
  );
};

export default Locations;