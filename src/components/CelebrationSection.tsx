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

      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/30">
          <h2 className="font-celebration text-5xl md:text-6xl font-bold text-white mb-6 bounce-gentle">
            Today We Celebrate You!
          </h2>
          
          <p className="font-elegant text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            May this new year of life bring you endless happiness, countless blessings, 
            and all the beautiful moments your heart desires.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-white">
            <div className="flex items-center gap-2 text-lg">
              <span className="text-2xl">🌈</span>
              <span className="font-medium">Joy</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-2xl">💝</span>
              <span className="font-medium">Love</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-2xl">🌸</span>
              <span className="font-medium">Growth</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span className="text-2xl">✨</span>
              <span className="font-medium">Dreams</span>
            </div>
          </div>

          <div className="mt-12">
            <p className="font-celebration text-3xl md:text-4xl text-white">
              Happy Birthday, Beautiful Soul! 🎊
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrationSection;