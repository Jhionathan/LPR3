import { Button } from "@/components/ui/button";
import Background from "./Background";

const SectionTree = () => {
    return (
        <section>
            <div>
                <Background></Background>
            </div>
            <div className="flex items-center min-h-screen justify-center">
                <div className="flex flex-col w-1/2 text-white max-md:w-10/12">
                    <h2 className="pb-6 font-bold text-5xl max-md:text-3xl" data-aos="fade-right">
                        CONTRATO DE FORNECIMENTO <br />
                        DE SUPRIMENTOS
                    </h2>
                    <p className="pb-2 text-sm max-md:text-xs" data-aos="fade-left" >
                        A R-3 Suprimentos vai desenvolver uma proposta customizada pra sua empresa, que racionalize a gestão de indiretos.
                    </p>
                    <p className="pb-2 text-sm max-md:text-xs" data-aos="fade-left" data-aos-delay="500">
                        Somos especializados no fornecimento de Suprimentos e atuamos em todo Brasil.
                    </p>
                    <p className="pb-2 text-sm max-md:text-xs" data-aos="fade-left" data-aos-delay="700">
                        Faça o seu contato agora mesmo, um profissional de nosso time comercial vai te atender prontamente.
                    </p>
                    <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="500">
                        <Button className=" bg-white text-black mt-16">SOLICITAR CONTATO</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionTree;