import Background from "./Backgroud";

const Second = () => {
    return (
        <section>
        <div>
            <Background />
        </div>    
        <div className="flex items-center min-h-screen justify-center">
        <div className="flex flex-col w-1/2 text-white max-md:w-10/12">
            <h2 className="pb-2 font-bold text-5xl max-md:text-3xl" data-aos="fade-left">SOLUÇÃO PARA <br/> SUPRIMENTOS INDIRETOS</h2>
            <p className="pb-2 text-sm max-md:text-xs" data-aos="fade-right" data-aos-delay="200">
                A gestão da cadeia de suprimentos, quando avaliada por curva de consumo, demonstra que as empresas gastam mais de 50% do tempo estratégico com uma gama de itens de baixo valor agregado.
            </p>
            <p className="pb-2 text-sm max-md:text-xs" data-aos="fade-right" data-aos-delay="400">
                Mais de 50% dos itens adquiridos representam menos de 5% do custo. Essa equação é equilibrada com o modelo da R-3 Suprimentos, que possibilita que a área de Compras possa focar o seu tempo em questões estratégicas e relevantes.
            </p>
        </div>
        </div>
        </section>
    )
}

export default Second;