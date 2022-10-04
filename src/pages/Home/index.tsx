import {Container} from './styles';
import FirstContainer from './firstContainer';
import Partner from './partner';
import AboutUs from './aboutUs';
import Products from './Products';
import Team from './team';
import Testimonial from './testimonial';
import Contact from './contact';

export default function Home() {
  return (
    <>
      <Container>
        <FirstContainer />
        <Partner />
        <AboutUs />
        <Products />
        <Team />
        <Testimonial />
        <Contact />
      </Container>
    </>
  );
}
