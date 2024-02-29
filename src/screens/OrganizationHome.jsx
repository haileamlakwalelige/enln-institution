import Hero from "../components/HomeOrg/Hero";
import Testimonial from "../components/HomeInd/Testimonials";
import EnhanceExperience from "../components/HomeOrg/EnhanceExperience";
import Partners from "../components/HomeOrg/Partners";
import WhyUs from "../components/HomeOrg/WhyUs";
import Feature from "../components/HomeOrg/Feature";

function OrganizationHome() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Partners />
      <EnhanceExperience />
      <WhyUs />
      <Feature />
      <Testimonial />
    </div>
  );
}

export default OrganizationHome;
