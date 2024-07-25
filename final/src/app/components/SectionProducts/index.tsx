import { url } from "inspector"
import Products from "./Products"


const ProductCard = () => {
    return (
        <section className="flex flex-col justify-center items-center  mb-4 pt-10">
            <div className="w-8/12 mb-7">
                <h2 className="text-3xl font-bold text-center mt-3 max-md:text-1xl" data-aos="fade-left">CASES</h2>
                <p className="pb-2 text-sm text-center mt-2  max-md:text-xs" data-aos="fade-left" data-aos-delay="300">
                    Apresentamos alguns Cases, de forma prática, contados por clientes que confiaram no modelo de gestão da R3 Suprimentos . São experiências e resultados obtidos por clientes que possuem grande complexidade operacional, de diversos segmentos da economia.
                    Mensalmente, são publicados Cases de Sucesso nas revistas de bordo das principais Cias Aéreas do país. Conheça:
                </p>
            </div>
            <div className=" mt-3 grid grid-cols-4 grid-rows-3  max-md:grid-cols-1 gap-4">
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
            </div>
        </section>
    )
}


export default ProductCard