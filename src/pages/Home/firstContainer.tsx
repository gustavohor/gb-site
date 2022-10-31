import Button from "@/@core/components/Button";
import Banner from "@/assets/Imagens/bannerTop.png";
import { CgArrowLongRight } from "react-icons/cg";
import { IoMdSquare } from "react-icons/io";
import { FirstContainer } from "./styles";
import Typed from "react-typed";
import { Link } from "react-scroll";

export default function firstContainer() {
  return (
    <FirstContainer>
      <div className="FirstContainer">
        <div className="div-first-conteiner">
          <span className="quality">
            <IoMdSquare className="rectangle" size={15} /> Qualidade
          </span>
          <h1 className="title">
            Entregamos produtos com<br></br>
            <b className="bold-title">
              {" "}
              <Typed
                strings={[
                  "experiências autênticas.",
                  "código limpo e escalável.",
                  "usabilidade planejada.",
                  "foco nos resultados.",
                ]}
                typeSpeed={90}
                backSpeed={30}
                loop
              />
            </b>
          </h1>
          <span className="description">
            Desenvolvemos nossos produtos centrados no usuário, buscando sempre
            evoluir e entregar com cada vez mais qualidade.
          </span>
          <Button className="button-first-container">
            <Link
              className="contact"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Fale Conosco <CgArrowLongRight size={30} className="ArrowRight" />
            </Link>
          </Button>
        </div>
        <div className="div-second-conteiner">
          <img src={Banner} className="ImgCover" alt="Grupo Conversando" />
        </div>
      </div>
    </FirstContainer>
  );
}
