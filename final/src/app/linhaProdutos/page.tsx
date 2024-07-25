import { PiCoffeeLight, PiNoteBlank, PiPintGlass, PiHandSoap, PiRecycle, PiPackageLight, PiBroom, PiToiletPaper, PiWashingMachine, PiOfficeChair } from "react-icons/pi";
import { FaHelmetSafety } from "react-icons/fa6";
import { MdOutlineScience } from "react-icons/md";

const LinhaProdutos = () => {
    return (
        <div>
            <div className="w-full h-[50vh] flex flex-col items-center">
                <div className="h-[80px] w-full bg-blue-950"> </div>
                <div className="absolute -z-10 bg-[url('/img-3.jpg')] contrast-50 w-full h-[50vh] bg-cover bg-center bg-no-repeat flex flex-col items-center">
                </div>
                <h2 className="text-4xl font-semibold p-3 text-white mt-28">Linha de Produtos</h2>
                    <h5 className="text-xl mb-4 text-white font-normal max-sm:text-base">1500 itens distribuídos em diversas Categorias</h5>
                    <p className="text-sm w-2/3 text-white text-center max-sm:text-xs">Oferecemos itens de consumo recorrente essenciais para operação, uso de seus colaboradores e o dia a dia da sua empresa. Confira abaixo nossas Categorias de Produtos</p>
            </div>
            <div className="w-full h-[50vh] bg-blue-950 flex items-center justify-center">
                <div className="grid grid-cols-12 gap-7 w-4/6 m-auto max-xl:grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-2 max-sm:gap-2">
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="0">
                        <a href=""><PiCoffeeLight className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">ALIMENTICIO</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="100">
                        <a href=""><PiNoteBlank className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">CHAMEX</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="200">
                        <a href=""><PiPintGlass className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">DESCARTAVEIS</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="300">
                        <a href=""><PiHandSoap className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">DISPENSERS</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="400">
                        <a href=""><PiRecycle className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">ECO</p>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="500">
                        <a href=""><PiPackageLight className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">EMBALAGEM</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="600">
                        <a href=""><FaHelmetSafety className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">EPI</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="700">
                        <a href=""><PiBroom className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">EQUIP. E ACESSORIOS</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="800">
                        <a href=""><PiToiletPaper className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">HIGIENE PESSOAL</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="900">
                        <a href=""><PiWashingMachine className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">LAVANDERIA</p>
                    </div>

                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="900">
                        <a href=""><PiOfficeChair className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">MATERIAL ESCRITORIO</p>
                    </div>
                    <div className="text-white flex flex-col items-center" data-aos="fade-down" data-aos-delay="900">
                        <a href=""><MdOutlineScience className="text-3xl mb-2 text-white" /></a>
                        <p className="text-xs text-center">QUIMICO</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinhaProdutos;
