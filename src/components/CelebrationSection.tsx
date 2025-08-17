const CelebrationSection = () => {
  return (
    <section className="py-20 px-4 bg-celebration relative overflow-hidden">
      {/* Floating celebration elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🎉</div>
        <div className="absolute top-20 right-20 text-3xl float">✨</div>
        <div className="absolute bottom-20 left-1/4 text-4xl bounce-gentle">🎂</div>
        <div className="absolute bottom-32 right-1/3 text-3xl float">🌟</div>
        <div className="absolute top-1/2 left-10 text-2xl animate-pulse">💖</div>
        <div className="absolute top-1/3 right-10 text-3xl bounce-gentle">🎈</div>
      </div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Celebration Text */}
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/30">
            <h2 className="font-celebration text-4xl md:text-5xl font-bold text-white mb-6 bounce-gentle">
              Today We Celebrate You!
            </h2>
            
            <p className="font-elegant text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              May this new year of life bring you endless happiness, countless blessings, 
              and all the beautiful moments your heart desires.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-white mb-8">
              <div className="flex items-center gap-2 text-base">
                <span className="text-xl">🌈</span>
                <span className="font-medium">Joy</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <span className="text-xl">💝</span>
                <span className="font-medium">Love</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <span className="text-xl">🌸</span>
                <span className="font-medium">Growth</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <span className="text-xl">✨</span>
                <span className="font-medium">Dreams</span>
              </div>
            </div>

            <div className="text-center">
              <p className="font-celebration text-2xl md:text-3xl text-white">
                Happy Birthday, Beautiful Soul! 🎊
              </p>
            </div>
          </div>

          {/* Birthday Photo */}
          <div className="relative group">
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-4 border border-white/30">
              <img
                src="/lovable-uploads/551892eb-80db-4434-b5aa-d61049af7742.png"
                alt="Joy celebrating with a birthday cake"
                className="w-full h-80 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-4 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl pointer-events-none"></div>
              <div className="text-center mt-4">
                <p className="text-white font-celebration text-xl">
                  Making wishes come true ✨
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CelebrationSection;