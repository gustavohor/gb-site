import {Container} from './styles';
import Navbar from '@/components/Navbar';
import FirstContainer from './firstContainer';
import Partner from './partner';
import AboutUs from './aboutUs';
import Products from './Products';
import Team from './team';
import Testimonial from './testimonial';
import Contact from './contact';
import Footer from '@/components/Footer';

export default function body() {
  return (
    <>
      <Container>
        <Navbar />
        <FirstContainer />
        <Partner />
        <AboutUs />
        <Products />
        <Team />
        <Testimonial />
        <Contact />
        <Footer />
      </Container>
    </>
  );
}
