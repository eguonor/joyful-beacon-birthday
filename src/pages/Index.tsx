import HeroSection from "@/components/HeroSection";
import MessageSection from "@/components/MessageSection";
import PhotoGallery from "@/components/PhotoGallery";
import CelebrationSection from "@/components/CelebrationSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MessageSection />
      <PhotoGallery />
      <CelebrationSection />
    </div>
  );
};

export default Index;
