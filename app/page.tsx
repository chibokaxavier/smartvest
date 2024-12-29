import Hero from "./components/Hero";
import Feature from "./components/Feature";
import CallToAction from "./components/CallToAction";
import Reviews from "./components/Review";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Feature />
      <CallToAction />
      <Reviews />
    </div>
  );
}
