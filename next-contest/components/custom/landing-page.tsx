import CalendarSection from "./calender-section";
import Footer from "./footer";
import GithubSection from "./github-section";
import Hero from "./hero";
import Navbar from "./navbar";
import Platforms from "./platforms";
import Testimonials from "./testimonials";

export default function LandingPage(): React.JSX.Element {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Platforms />
        <CalendarSection />
        <Testimonials />
        <GithubSection />
      </main>
      <Footer />
    </div>
  );
}
