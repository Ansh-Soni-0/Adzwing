import HeroSection from "../sections/HeroSection";
import Advertiser from "../sections/Advertiser";
import TestimonialSection from "../sections/TestimonialSection";
import ContactSection from "../sections/ContactSection";
import Publisher from "../sections/Publisher";

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <Advertiser />
            <Publisher />
            <TestimonialSection />
            <ContactSection />
        </>
    );
}