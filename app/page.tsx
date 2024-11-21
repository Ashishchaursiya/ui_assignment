import ProfileSlider from "@/components/cardSlider";
import FeatureSlider from "@/components/cardSlider/featureSlider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  
  return <> 
    <div className="sm:h-screen bg-[#08b4c1]">
    
    <Navbar />
    <ProfileSlider />
    <FeatureSlider />
      
    </div>
    <Footer />
    </>;
}
