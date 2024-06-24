import AboutUs from 'components/shared/about-us';
import ContactCTA from 'components/shared/contact-cta';
import Footer from 'components/shared/footer';
import Header from 'components/shared/header';
import Hero from 'components/shared/hero';
import Solutions from 'components/shared/solutions';
import Testimonials from 'components/shared/testimonials';
import 'styles/global.css';
import bg from 'images/hero-bg.png';

const RootLayout = () => (
  <html lang="en">
    <body
      className="bg-[#0a0813] bg-[center_37px] bg-no-repeat"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Solutions />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </body>
  </html>
);

export default RootLayout;
