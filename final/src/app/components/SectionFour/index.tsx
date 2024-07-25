import { VscAccount, VscGear, VscSymbolMethod, VscHome } from "react-icons/vsc";
import Background from "./Background";


const SectionFour = () => {
    return (
        <section>
            <div>
                <Background />
            </div>
            <div className="flex items-center min-h-screen justify-center">
                <div className="flex flex-col w-1/2 text-white max-md:w-10/12">
                    <h2 className="pb-4 font-bold text-5xl max-md:text-3xl" data-aos="fade-right">R3 MANAGER</h2>
                    <p className="pb-4 text-sm mt-4 max-w-screen-md max-md:text-xs" data-aos="fade-left" data-aos-delay="300">
                        Com o objetivo de automatizar todo o processo de gestão de suprimentos corporativos, a R3 Suprimentos desenvolveu o R3 Manager, Um sistema de gestão de suprimentos indiretos. Totalmente digital, online, inteligente e bem pensado. Personalizado para cada empresa, tem interface moderna, intuitiva e um catálogo de itens negociados para cada cliente.
                    </p>
                    <h3 className="pb-4 font-bold text-2xl max-md:text-1xl" data-aos="fade-left" data-aos-delay="500">
                        Com o R-3 Manager,
                        os processos são integrados:
                    </h3>
                    <div className="flex justify-between gap-5 mt-4">
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><VscAccount className="text-6xl mb-2  max-md:text-2xl " /><span className="text-sm max-sm:text-xs">Cliente</span></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"><VscGear className="text-6xl mb-2 max-md:text-2xl" /><span className="text-sm max-sm:text-xs">Sistema</span></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="700"><VscSymbolMethod className="text-6xl mb-2  max-md:text-2xl" /><span className="text-center text-sm max-sm:text-xs">R3 <br /> Suprimentos</span></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><VscHome className="text-6xl mb-2 max-md:text-2xl" /><span className="text-sm max-sm:text-xs">Entrega</span></div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SectionFour;