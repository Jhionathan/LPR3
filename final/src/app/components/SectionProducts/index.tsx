import { url } from "inspector"
import Products from "./Products"


const ProductCard = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center mb-4 pt-10">
            <div className="w-8/12 mb-7 mt-12">
                <h5 className="text-lg font-light  mt-3 max-md:text-1xl" data-aos="fade-left">ENTREGA PAUTADA NA</h5>
                <h2 className="text-5xl font-bold pb-5 text-blue-text  max-md:text-1xl" data-aos="fade-left">
                    PARCERIA COM <br /> GRANDES MARCAS
                </h2>
                <p className="pb-2 text-sm  mt-2  max-md:text-xs leading-relaxed" data-aos="fade-left" data-aos-delay="300">
                    Reconhecida por sua solidez e compromisso, a R3 conquistou a confiança do mercado
                    corporativo, fidelizando clientes em diversos segmentos. Trabalhamos em parceria com
                    marcas renomadas nacionais e internacionais, como Chamex, Unilever, Ecomaster, Tork,
                    Santher, Fibraform, Galvanotek, 3M, Freeco, Rubbermaid, Karcher, Spartan, entre outras.
                </p>
            </div>
            <div className=" mt-3 mb-12 grid grid-cols-5 grid-rows-5  max-md:grid-cols-2 gap-4">
                <Products
                    url="/Flamboyant.png"
                />
                <Products
                    url="/Aquarius.png"
                />
                <Products
                    url="/HEINZ.png"
                />
                <Products
                    url="/itambé.png"
                />
                <Products
                    url="/Rioquente.png"
                />
                <Products
                    url="/syngenta.png"
                />
                <Products
                    url="/tatico.png"
                />
                <Products
                    url="/Terral.png"
                />
                <Products
                    url="/Unimed.png"
                />
                <Products
                    url="/Saccaria.png"
                />
                <Products
                    url="/proBrazilian.png"
                />
                <Products
                    url="/n23.png"
                />
                <Products
                    url="/Unimed.png"
                />
                <Products
                    url="/Saccaria.png"
                />
                <Products
                    url="/proBrazilian.png"
                />
                <Products
                    url="/n23.png"
                />
                <Products
                    url="/Unimed.png"
                />
                <Products
                    url="/Saccaria.png"
                />
                <Products
                    url="/proBrazilian.png"
                />
                <Products
                    url="/n23.png"
                />
                                <Products
                    url="/Unimed.png"
                />
                <Products
                    url="/Saccaria.png"
                />
                <Products
                    url="/proBrazilian.png"
                />
                <Products
                    url="/n23.png"
                />
                <Products
                    url="/n23.png"
                />
            </div>
        </section>
    )
}


export default ProductCard