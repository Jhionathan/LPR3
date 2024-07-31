import Image from "next/image";
import { HiOutlineArrowUturnLeft , HiOutlineArrowLeft } from "react-icons/hi2";
import { PiInstagramLogoLight, PiLinkedinLogoLight, PiMailboxLight, PiPhoneCallLight } from "react-icons/pi";
import Header from "../components/Header";
import Logistc from "./logistic";


const About = () => {
    return (
        <>
        <div className="flex  max-md:flex-col-reverse">
            <div className="h-screen flex-1" data-aos="fade-right" data-delay="500">
                <Image
                    className="h-full object-cover"
                    width={1200}
                    height={0}
                    src="/img-2.webp"
                    alt="imagecons" />
            </div>
            <div className="w-1/3 p-11 mt-6 xl:w-2/5 max-md:w-full" data-aos="fade-left" data-delay="500">
                <h2 className="text-3xl mb-6 mt-10">Quem Somos</h2>
                <p className="mb-6 text-sm leading-relaxed">
                    Somos a R3 Suprimentos Corporativos, uma empresa goiana com mais de 45 anos de experiência, especializada em oferecer soluções completas em higiene pessoal, limpeza profissional, embalagens,
                    lavanderia, EPIs e materiais para escritório. Atendemos tanto o público B2B quanto o B2C, garantindo a qualidade e a eficiência que nossos clientes precisam.
                </p>
                <p className="mb-6 text-sm leading-relaxed">
                    Ao longo desses anos, temos buscado aprimorar nossos serviços e oferecer soluções inovadoras para atender todos os clientes.
                    Consolidamos nossa reputação como uma empresa sólida e confiável no mercado goiano, estabelecendo um padrão de qualidade e comprometimento.
                </p>
                <p className="mb-6 text-sm leading-relaxed">
                Nossa trajetória é marcada por valores fundamentais, sustentada por uma equipe capacitada e dedicada e por parcerias estratégicas com grandes empresas nacionais que nos permitiram evoluir e nos adaptar às demandas do mercado.
                </p>

                <a href="/" className="flex gap-1 items-center hover:opacity-70"><small>Nossos produtos</small> <HiOutlineArrowUturnLeft /> </a>
                <div className="flex gap-3 mt-10 text-xl">
                    <a href="/"><PiInstagramLogoLight /></a>
                    <a href="/"><PiLinkedinLogoLight /></a>
                    <a href="/"><PiMailboxLight /></a>
                    <a href="/"><PiPhoneCallLight /></a>
                </div>
                <a href="/" className="flex gap-1 items-center mt-10"><small>Voltar</small> <HiOutlineArrowLeft /></a>
            </div>
        </div>
        <hr></hr>
        <Logistc />
        </>
    )
}

export default About;
