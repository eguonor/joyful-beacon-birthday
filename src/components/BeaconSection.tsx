const BeaconSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Message */}
          <div>
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-warm border">
              <h3 className="font-elegant text-3xl md:text-4xl font-semibold text-primary mb-6">
                A Beacon of Light
              </h3>
              
              <div className="space-y-6 text-foreground">
                <p className="text-base md:text-lg leading-relaxed">
                  Joy, you have been a beacon of light in my life. When I was struggling with my residency issues, your support went beyond what I could have asked for. You taught me the true meaning of friendship, and your generosity and wisdom have helped shape my path.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  I can honestly say that a significant part of my growth and success is thanks to you. Joy, your energy and kindness deserve a day just as special as you are.
                </p>

                <div className="bg-warm/10 rounded-2xl p-6 border-l-4 border-warm">
                  <p className="text-lg md:text-xl font-medium text-warm italic">
                    "Here's to a year of joy, growth, and all the good things you've been dreaming of."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo */}
          <div>
            <div className="relative group">
              <img
                src="/lovable-uploads/ff9981fd-4c62-4cf9-9278-3791f8b42139.png"
                alt="Joy in elegant black dress in a beautiful restaurant"
                className="w-full h-96 object-cover rounded-3xl shadow-warm transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium bg-black/30 rounded-lg p-3 backdrop-blur-sm text-center">
                  Elegance and grace personified ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeaconSection;