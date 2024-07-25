import Image from "next/image";
import { HiOutlineArrowUturnLeft , HiOutlineArrowLeft } from "react-icons/hi2";
import { PiInstagramLogoLight, PiLinkedinLogoLight, PiMailboxLight, PiPhoneCallLight } from "react-icons/pi";
import Header from "../components/Header";
import Logistc from "./logistic";



const About = () => {
    return (
        <>
        <div className="flex max-md:flex-col-reverse">
            <div className="h-screen flex-1" data-aos="fade-right" data-delay="500">
                <Image
                    className="h-full object-cover"
                    width={1200}
                    height={0}
                    src="/treinamento.png"
                    alt="imagecons" />
            </div>
            <div className="w-1/3 p-11 mt-10 xl:w-2/5 max-md:w-full" data-aos="fade-left" data-delay="500">
                <h2 className="text-3xl mb-6">Quem Somos</h2>
                <p className="mb-6 text-sm">
                A R3 Suprimentos Corporativos, é uma empresa goiana especializada em higiene pessoal, limpeza profissional, embalagens, lavanderia, EPIs e materiais para escritório, atendendo a todos os públicos B2B e B2c.
                </p>
                <p className="mb-6 text-sm">Reconhecida por sua solidez e compromisso, a R3 conquistou a confiança do mercado corporativo, fidelizando clientes nos mais diversos segmentos e em parceria com empresas nacionais e internacionais como Chamex, Unilever, Ecomaster, Tork, Santher, Fibraform, Galvanotek, 3M, Freeco e outras.</p>

                <a href="/" className="flex gap-1 items-center hover:opacity-70"><small>Nossos produtos</small> <HiOutlineArrowUturnLeft /> </a>
                <div className="flex gap-3 mt-10 text-xl">
                    <a href="/"><PiInstagramLogoLight /></a>
                    <a href="/"><PiLinkedinLogoLight /></a>
                    <a href="/"><PiMailboxLight /></a>
                    <a href="/"><PiPhoneCallLight /></a>
                </div>
                <div className=" inline-block mt-48"><a href="/" className="flex gap-1 items-center"><small>Voltar</small> <HiOutlineArrowLeft /></a></div>
            </div>
        </div>
        <hr></hr>
        <Logistc />
        </>
    )
}

export default About;