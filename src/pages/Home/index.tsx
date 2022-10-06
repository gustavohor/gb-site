import { Container } from "./styles";
import FirstContainer from "./firstContainer";
import Partner from "./partner";
import AboutUs from "./aboutUs";
import Product from "./products";
import Team from "./team";
import Testimonial from "./testimonial";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Container>
        <FirstContainer />
        <Partner />
        <AboutUs />
        <Product />
        <Team />
        <Testimonial />
        <Contact />
      </Container>
    </>
  );
}
