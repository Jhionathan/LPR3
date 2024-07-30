import { VscAccount, VscGear, VscSymbolMethod, VscHome } from "react-icons/vsc";
import Background from "./Backgroud";

const Second = () => {
    return (
        <section>
            <div>
                {/* <Background /> */}
            </div>
            <div className="flex items-center flex-col min-h-screen justify-center bg-blue-950">
                <div className="flex flex-col w-1/2 text-white max-md:w-10/12">
                    <h4 className="font-light text-xl" data-aos="fade-left">SOLUÇÕES PARA</h4>
                    <h2 className="pb-4 font-bold text-5xl text-green-text max-md:text-3xl" data-aos="fade-left">SUPRIMENTOS <br />CORPORATIVOS</h2>
                    <p className=" text-[14px] max-md:text-xs leading-relaxed" data-aos="fade-right" data-aos-delay="200">
                        A R3 Suprimentos é uma empresa com mais de 45 anos de experiência, especializada em oferecer soluções completas em higiene e limpeza profissional, incluindo máquinas e equipamentos,
                         produtos para lavanderia, materiais de escritório, embalagens, descartáveis, EPIs, itens para Copa, além de outros.
                    </p>
                    <div className="flex justify-between gap-10 my-6">
                        {/* <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><img src="/icon-1.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"><img src="/icon-6.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="700"><img src="/icon-3.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/icon-4.png" alt="" className="w-20" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/icon-5.png" alt="" className="w-20" /></div> */}

                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><img src="/DESC.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"><img src="/EMBALAGEM.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="700"><img src="/EQUIP.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/ESCRITORIO.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/EPI.png" alt="" className="w-14 h-14 bg-cover" /></div>

{/*                         
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"><img src="/DESC1.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"><img src="/EMBALAGEM1.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="700"><img src="/EQUIP1.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/ESCRITORIO1.png" alt="" className="w-14 h-14 bg-cover" /></div>
                        <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="900"><img src="/EPI1.png" alt="" className="w-14 h-14 bg-cover" /></div> */}

                    </div>

                    <h4 className="text-white font-light text-xl" data-aos="fade-right" data-aos-delay="400">ATENDEMOS TANTO O PÚBLICO B2B QUANTO B2C,</h4>
                    <p className="pb-4 text-sm max-md:text-xs" data-aos="fade-right" data-aos-delay="400">garantindo a qualidade e a eficiência que nossos clientes precisam.</p>

                    <p className="pb-2 text-sm max-md:text-xs leading-relaxed" data-aos="fade-right" data-aos-delay="600">
                        Ao longo dos anos, a R3 Suprimentos tem buscado aprimorar nossos serviços e oferecer soluções inovadoras para atender todos os clientes.
                        Consolidando nossa reputação como uma empresa sólida e confiável no mercado goiano, estabelecendo um padrão de qualidade e comprometimento.                </p>
                </div>

            </div>
        </section>
    )
}

export default Second;