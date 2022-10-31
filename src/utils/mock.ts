import screen from "@/assets/Imagens/DesktopMobileRDV.png";
import screen2 from "@/assets/Imagens/DesktopMobileCRM.png";
import screen3 from "@/assets/Imagens/DesktopMobileME.png";
import screen4 from "@/assets/Imagens/DesktopMobileFV.png";
import Testimonial1 from "@/assets/Imagens/Testimonial_1.svg";
import Testimonial2 from "@/assets/Imagens/Testimonial_2.svg";
import mission from "@/assets/Icons/Mission.svg";
import value from "@/assets/Icons/Value.svg";
import vision from "@/assets/Icons/Vision.svg";

export const Sliders = [
  {
    id: "01",
    title: "Gestão de despesa",
    subTitle:
      "Tenha o controle das despedas de todo o seu negócio em um só lugar.",
    img: screen,
    imgDescrition:
      "O RDV (Registro de Despesa de Viagem) é um sistema que oferece soluções de controle e gestão administrativa para seu negócio. Ele administra todas as despesas de viagem associadas aos seus colaboradores. Informação combinada com meios adequados de controle lhe permitirá mais eficiência na gestão dos recursos de seu negócio.",
  },
  {
    id: "02",
    title: "CRM",
    subTitle:
      "Tenha o controle de todos os seus clientes e potenciais em um só lugar.",
    img: screen2,
    imgDescrition:
      "O CRM (Customer Relationship Management) é uma ferramenta de administração de contatos, que visa gerenciar um banco de informações de clientes atuais e potenciais, tal como por exemplo: Nome, endereço, número de telefone, suas atividades e pontos de contato com a empresa, incluindo visitas a sites, ligações telefônicas, e-mails, entre outras interações.",
  },
  {
    id: "03",
    title: "Mapa de entrega",
    subTitle: "Tenha todo o controle de entrega de mercadorias em um só lugar.",
    img: screen3,
    imgDescrition:
      "O Mapa de Entrega administra de forma simples e objetiva a gestão de entrega de mercadorias do seu negócio. A ferramenta combinar uma visão orgânica e geo referenciada das entregas com a gestão de frotas.",
  },
  {
    id: "04",
    title: "Força de vendas",
    subTitle:
      "Tenha um aplicativo para realizar venda externa comunicando com a loja.",
    img: screen4,
    imgDescrition:
      "O Força de Vendas tem como missão potencializar dados, informações e a mobilidade de vendas. O objetivo primário é apoiar a concretização das vendas externas. Essa solução é para uso além dos limites do estabelecimento comercial, ou seja, junto ao cliente. É uma opção prática que estreita relacionamentos com o cliente final.",
  },
];

export const People = [
  {
    id: 1,
    img: Testimonial2,
    name: "Raphael Covre",
    charge: "CEO Casa do adubo",
    testimonial:
      "A Green Belt sempre foi uma empresa parceira da Casa do Adubo. Com eles conseguimos crescer exponencialmente!",
  },
  {
    id: 2,
    img: Testimonial1,
    name: "Estevan Bento",
    charge: "Diretor Casal",
    testimonial:
      "A Green Belt fez toda diferença na gestão da Casal Distribuidora, avançamos muito com eles!",
  },
];

export const aboutUsText = [
  {
    id: 1,
    text: "Desde 2014, a Green Belt Tecnologia disponibiliza soluções para infraestrutura e segurança tecnológica de acordo com cada negócio, alinhando alta performance com o melhor custo benefício. O nosso sucesso é comprovado pelos mais de 250 projetos entregues, nos quais reduzimos custos operacionais, aumentamos a produtividade e impulsionamos a receita de empresas de diversos tamanhos e segmentos.",
  },
  {
    id: 2,
    text: "Acreditamos que qualidade e equipe certificada são o básico para entregar os resultados esperados pelos nossos clientes, e por isso, investimos continuamente em inovação dentro do próprio time. Os ajustes de processos em todas as áreas é constante para otimizar o que fazemos, ganhando tempo e qualidade. Tecnologia, processos e pessoas existem para evoluir - Entendemos isso e nos esforçamos para nos adaptar.",
  },
  {
    id: 3,
    text: "A Green Belt é uma empresa que olha para o futuro: isso significa que pensamos nos percalços que podem ocorrer e sempre preparamos estratégias para imprevistos, trabalhando de forma proativa para que problemas não aconteçam. Levamos essa postura para a nossa atuação junto aos clientes, pois acreditamos que o sucesso deles também é nosso.",
  },
];

export const aboutUsList = [
  {
    id: 1,
    text: "Desenvolvimento front-end",
  },
  {
    id: 2,
    text: "Desenvolvimento back-end",
  },
  {
    id: 3,
    text: "Desenvolvimento mobile",
  },
  {
    id: 4,
    text: "Análise da experiência do usuário",
  },
  {
    id: 5,
    text: "Quality Assurance",
  },
  {
    id: 6,
    text: "Comercial e financeiro",
  },
];

export const aboutUsMVV = [
  {
    id: 1,
    img: mission,
    title: "Missão",
    text: "Queremos ser a melhor empresa de soluções tecnológicas de todo o segmento Agro.",
  },
  {
    id: 2,
    img: vision,
    title: "Visão",
    text: "Estar entre as 20 maiores empresas de tecnologia do segmento Agro até 2030.",
  },
  {
    id: 3,
    img: value,
    title: "Valores",
    text: "Ética, respeito, qualidade, comprometimento e transparência.",
  },
];
