const MessageSection = () => {
  return (
    <section id="message-section" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-semibold text-primary mb-4">
            A Letter of Gratitude
          </h2>
          <div className="w-16 h-1 bg-warm mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <img
                src="/lovable-uploads/17efbc7e-ad65-495e-a14a-4a9a1115722f.png"
                alt="Joy sitting comfortably in a modern cafe setting"
                className="w-full h-96 object-cover rounded-3xl shadow-warm transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-3xl"></div>
            </div>
          </div>

          {/* Message */}
          <div className="order-1 lg:order-2">
            <div className="bg-subtle rounded-3xl p-8 md:p-10 shadow-warm">
              <div className="space-y-6 text-foreground">
                <p className="text-lg md:text-xl leading-relaxed font-medium">
                  <span className="font-elegant text-2xl text-primary">Dear Miss Joy,</span>
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  I truly believe that God brought you into my life for a reason. When I faced the uncertainty of my temporary residential permit, you stood by me in ways I can never fully express. Your support was not just financial, but also emotional and mental, and it made all the difference.
                </p>

                <p className="text-base md:text-lg leading-relaxed">
                  I am where I am today because of you, and I'm endlessly grateful for your kindness and your unwavering belief in me.
                </p>

                <div className="text-center mt-8">
                  <p className="font-celebration text-2xl text-accent">
                    With endless gratitude ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;