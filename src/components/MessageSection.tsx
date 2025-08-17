const MessageSection = () => {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-elegant text-4xl md:text-5xl font-semibold text-primary mb-4">
            A Letter of Gratitude
          </h2>
          <div className="w-16 h-1 bg-warm mx-auto rounded-full"></div>
        </div>

        <div className="bg-subtle rounded-3xl p-8 md:p-12 shadow-warm">
          <div className="space-y-6 text-foreground">
            <p className="text-lg md:text-xl leading-relaxed font-medium">
              <span className="font-elegant text-2xl text-primary">Dear Miss Joy,</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              I truly believe that God brought you into my life for a reason. When I faced the uncertainty of my temporary residential permit, you stood by me in ways I can never fully express. Your support was not just financial, but also emotional and mental, and it made all the difference. I am where I am today because of you, and I'm endlessly grateful for your kindness and your unwavering belief in me.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Joy, you have been a beacon of light in my life. When I was struggling with my residency issues, your support went beyond what I could have asked for. You taught me the true meaning of friendship, and your generosity and wisdom have helped shape my path. I can honestly say that a significant part of my growth and success is thanks to you.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Joy, your energy and kindness deserve a day just as special as you are. Here's to a year of joy, growth, and all the good things you've been dreaming of.
            </p>

            <div className="text-center mt-12">
              <p className="font-celebration text-3xl text-accent">
                With endless love and gratitude ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;