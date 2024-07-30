
import Background from "./Background";
import { ImagesSliderDemo } from "./imageSliderDemo";


const SectionHero = () => {
    return (
        <section>
            <div>
                <Background></Background>
            </div>
            <div className="flex items-center min-h-screen justify-center">            
                <h1 className="font-bold text-4xl text-center text-white" data-aos="fade-up">A R3 Suprimentos <br/> fornece o essencial para sua empresa fazer o que faz de melhor</h1>
            </div>
        </section>
    )
}


export default SectionHero;