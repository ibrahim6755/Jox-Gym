import { Features } from "@/components/Features";
import Myhero from "@/components/Myhero";
import Pricing from "@/components/Pricing";
import Supplements from "@/components/Supplements";
import Testimonials from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="home">
      {/* <Hero/> */}
      <Myhero />

      {/* Features */}
      <section>
        <Features />
      </section>

      {/* supplements */}
      <section>
        <Supplements />
      </section>

      {/* pricing */}
      <section>
        <Pricing />
      </section>

      {/* testimonial */}
      <section>
        <Testimonials/>
      </section>

      {/* footer */}
      <section>
        <Footer/>
      </section>
    </div>

    
  );
}
